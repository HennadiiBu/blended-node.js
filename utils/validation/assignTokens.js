const jwt = require("jsonwebtoken");

const {JWT_ACCESS_SECRET, JWT_REFRESH_SECRET, JWT_ACCESS_EXPIRES_IN, JWT_REFRESH_EXPIRES_IN} = process.env;

const assignTokens = (user) => {
const payload ={
  id: user._id,
};
const accessToken = jwt.sign(payload, JWT_ACCESS_SECRET, {expiresIn: JWT_ACCESS_EXPIRES_IN});

const refreshToken = jwt.sign(payload, JWT_REFRESH_SECRET, {expiresIn: JWT_REFRESH_EXPIRES_IN});

return{accessToken, refreshToken};
} 

module.exports = {assignTokens};