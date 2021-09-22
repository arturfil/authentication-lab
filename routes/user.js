const bcrypt = require('bcryptjs');
const express = require('express');
const router = require('router');

const User = require('../models/User');

const {generateJwt} = require('../middlewares/generateJwt')

router.post('/signup', async(req,res) => {
  const testEmail = await User.findOne({email: req.body.email});
  if(testEmail) {
    return res.status(500).json({mesasge: "Email already exist"})
  }
  const userToCreate = await User.create(req.body);
  try {
    const salt = bycypt.genSaltSync();
    userToCreate.password = bycypt.hashSync(req.body.password, salt);
    userToCreate.save();
    return res.status(201).json(userToCreate);
  } catch (error) {
    return res.status(500).json({message: "Couldn't create user"});
  }
})

router.post('/login', async (req, res) => {
  const {email,password} = req.body;

  const userExist = await User.findOne({email});
  if(!userExist){
    return res.status(400).json({message: "User whit that email does not exist"})
  }
  const validPassword = bycypt.compareSync(password, userExist.password);
  if (!validPassword) {
    return res.status(500).json({message: 'incorrect credentials'});
  }
  const token = await generateJwt(userExist._id)
  return res.json({user: userExist, token})
})

  

module.exports = router;