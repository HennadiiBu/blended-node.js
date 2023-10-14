const controllerWrapper = require("../utils/controllerWrapper");
const {signUpService} = require("../services/authServices");

const signUp = controllerWrapper(async(req, res, next) => {
const user = await signUpService();
res.json(user);
});

const signIn = controllerWrapper(async (req, res, next) => {

});

const signOut = controllerWrapper(async (req, res, next) => {

});

module.exports = {
  signUp,
  signIn,
  signOut,
};