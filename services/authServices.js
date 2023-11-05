const HttpError = require("../utils/HttpError");

const bcrypt = require("bcryptjs");

const User = require("../models/User");
const { assignTokens } = require("../utils/validation/assignTokens");

const signUpService = async (body) => {
  const isUserExist = await User.findOne({
    email: body.email,
  });
  if (isUserExist) {
    throw new HttpError(406);
  }

  const user = await User.create(body);
  user.password = undefined;
  return user;
};

const signInService = async (body) => {
  const user = await User.findOne({
    email: body.email,
  });
  if (!user) {
    throw new HttpError(401);
  }
  const passwordCompare = await bcrypt.compare(body.password, user.password);
  if (!passwordCompare) {
    throw new HttpError(401);
  }
  const { accessToken, refreshToken } = assignTokens(user);
  await User.findByIdAndUpdate(user._id, { refreshToken });

  return { accessToken };
};

const signOutService = async (id) => {
  await User.findByIdAndUpdate(id, { refreshToken: "" });
  return `${id}`;
};

module.exports = {
  signUpService,
  signInService,
  signOutService,
};
