
const User = require('../models/User');
const bcrypt = require('bcryptjs');
const {generateJwt} = require('../middlewares/generateJwt')

exports.userSignUp = async (req,res) => {
  const testEmail = await User.findOne({email: req.body.email});
  if(testEmail) {
    return res.status(500).json({mesasge: "Email already exist"})
  }
  const userToCreate = await User.create(req.body);
  try {
    const salt = bcrypt.genSaltSync();
    userToCreate.password = bcrypt.hashSync(req.body.password, salt);
    userToCreate.save();
    return res.status(201).json(userToCreate);
  } catch (error) {
    return res.status(500).json({message: "Couldn't create user"});
  }
}

exports.userLogin = async (req, res) => {
  const {email,password} = req.body;

  const userExist = await User.findOne({email});
  if(!userExist){
    return res.status(400).json({message: "User whit that email does not exist"})
  }
  const validPassword = bcrypt.compareSync(password, userExist.password);
  if (!validPassword) {
    return res.status(500).json({message: 'incorrect credentials'});
  }
  const token = await generateJwt(userExist._id)
  return res.json({user: userExist, token})
}