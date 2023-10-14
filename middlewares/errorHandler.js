const errorHandler = (error, req, res, next) => {
  const {
    statusCode = 500,
    message = "Something went wrong. Try again leter",
  } = error;
  res.status(statusCode).json({ message });
};

module.exports = errorHandler;
