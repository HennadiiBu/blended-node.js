const HttpError = require("../utils/HttpError");

const bcrypt = require("bcryptjs")

const User = require("../models/User");

const signUpService = async (body) => {
  const isUserExist = await User.findOne({
    email: body.email,
  });
  if(isUserExist) {
    throw new HttpError(406);
  }
const hashedPassword = await bcrypt.hash(body.password, 12)
const user = await User.create({
  ...body,
  password: hashedPassword,
});
user.password = undefined;
return user;
};

module.exports = {
  signUpService,
};