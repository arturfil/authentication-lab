
const express = require('express')
const { userSignUp, userLogin } = require('../controllers/userAuthMiddleware')
const {validateFields} = require('../middlewares/validateFields')
const {check} = require('express-validator')
const router = express.Router()

router.post('/signup', [
  check("name", "Name is required").not().isEmpty(),
  check("email", "Email is required").isEmail(),
  check("password", "Password is required").isLength({min: 6}),
  validateFields
], userSignUp);

router.post('/login', [
  check("email", "Please provide an email").isEmail(),
  check("password", "Please provide a password").isLength({min: 6}),
  validateFields
], userLogin);

  

module.exports = router