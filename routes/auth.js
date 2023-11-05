const express = require("express");

const {
  signUp,
  signIn,
  signOut,
} = require("../controlers/authControllers")

const auth = require("../middlewares/auth")

const router = express.Router();


router.post("/signup", signUp);

router.post("/signin", signIn);


router.post("/signout", auth, signOut);

module.exports = {authRouter: router};