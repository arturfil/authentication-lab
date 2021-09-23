const express = require("express");
const router = express.Router();

const { check } = require('express-validator')
const { validateFields } = require('../middlewares/validateField')

const { userSignup, userLogin } = require("../controllers/userController");


// POST - Sign up
router.post("/signup",[
  check("name", "Name field is required").not().isEmpty(),
  check("email", "Email field is required").not().isEmpty(),
  check("password", "Password must be 8 charaacters long").isLength({min: 8}),
  validateFields
], userSignup)

// Login
router.post("/login", userLogin)

module.exports = router;
