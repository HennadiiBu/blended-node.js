const express = require("express");

const {
  signUp,
  signIn,
  signOut,
} = require("../controlers/authControllers")

const router = express.Router();


router.post("/signup", signUp);

router.post("/signin", signIn);

router.post("/signout", signOut);

module.exports = {authRouter: router};