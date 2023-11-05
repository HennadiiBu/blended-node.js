const controllerWrapper = require("../utils/controllerWrapper");
const {
  signUpService,
  signInService,
  signOutService,
} = require("../services/authServices");

const signUp = controllerWrapper(async (req, res, next) => {
  const user = await signUpService(req.body);
  res.json(user);
});

const signIn = controllerWrapper(async (req, res, next) => {
  const { accessToken } = await signInService(req.body);
  res.json({ accessToken });
});

const signOut = controllerWrapper(async (req, res, next) => {
  await signOutService(req.user._id);
  res.status(200).json({ message: "Successfull logout" });
});

module.exports = {
  signUp,
  signIn,
  signOut,
};
