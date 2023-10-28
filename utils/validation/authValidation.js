const Joi = require("joi");

const {passwordPattern} = require("../../constants/regexp.js");

const reqValidationSkima = Joi.object({
  userName: Joi.string().min(2).max(10).required(),
  email: Joi.string().email().required(),
  password: Joi.string().pattern(passwordPattern).required().messages({
    'string.pattern.base':
      'Password should contain minimum eight characters, at least one letter and one number.',
  }),
})

// const loginValidationSchema = Joi.object({

// })
module.exports = {reqValidationSkima};