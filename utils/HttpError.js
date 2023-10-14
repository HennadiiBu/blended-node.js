const errorMessages = require("../constants/errorMessages");

class HttpError extends Error {
  constructor(
    statusCode = 500,
    message = errorMessages[statusCode] || errorMessages.default
  ) {
    super(message);
    this.statusCode = statusCode;
  }
}

module.exports = HttpError;
