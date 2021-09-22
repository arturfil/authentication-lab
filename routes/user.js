const express = require("express");
const router = express.Router();

const {
  userSignup,
  userLogin
} = require("../controllers/userController");


// POST - Sign up
router.post("/signup", userSignup)

// Login
router.post("/login", userLogin)

module.exports = router;
