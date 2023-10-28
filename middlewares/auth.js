const User = require("../models/User");
const jwt = require("jsonwebtoken");
const {assignTokens} = require("../utils/validation/assignTokens");
const {HttpError} = require("../utils/HttpError");
const {JWT_ACCESS_SECRET, JWT_REFRESH_SECRET} = process.env;

const auth = async(req, res, next) =>{
  const { authorization = '' } = req.headers;
  const [bearer, token] = authorization.split(' ');
  if (bearer !== 'Bearer' || !token) {
    return next(new HttpError(401));
  }
  let fetchedUser;
  try {
    const decoded = jwt.decode(token);
    fetchedUser = await User.findById(decoded.id);
    if (!fetchedUser || !fetchedUser.refresh_token) {
      return next(new HttpError(401));
    }
    jwt.verify(token, JWT_ACCESS_SECRET);
    req.user = fetchedUser;

    next();
  }
catch(error) {
  if (error?.name !== 'TokenExpiredError') {
    return next(new HttpError(401, error.message || 'Not authorized'));
  }
  try {
    jwt.verify(fetchedUser.refreshToken, JWT_REFRESH_SECRET);
    const { accessToken, refreshToken } = assignTokens(fetchedUser);
    await User.findByIdAndUpdate(fetchedUser._id, { refreshToken });
    res.status(200).json({
      accessToken,
    });
  }
  catch(error) {
    next(new HttpError(401, 'Refresh token is expired'));
  }
}
}

module.exports = auth;