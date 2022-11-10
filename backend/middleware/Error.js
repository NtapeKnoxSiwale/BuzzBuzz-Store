const ErrorHandler = require("../utils/ErrorHandler");

module.exports = (err, req, res, next) => {
  err.statusCode = err.statusCode || 500;
  err.message = err.message || "Internal server error";

  // Wrong MongoDB id error
  if (err.name === "CastError") {
    const message = `Resources not found with this ID... Invalid ${err.path}`;
    err = new ErrorHandler(message, 400);
  }

  // Duplicate Key Error
  if (err.code === 11000) {
    const message = `Duplicate ${Object.keys(err.keyValue)} Entered`;
    err = new ErrorHandler(message, 400);
  }

  // Wrong JWT Error
  if (err.name === "jsonWebTokenError") {
    const message = `Your URL is invalid please try again`;
    err = new ErrorHandler(message, 400);
  }

  // JWT expire Error
  if (err.code === "TokenExpiredError") {
    const message = `Your URL is Expired please try again`;
    err = new ErrorHandler(message, 400);
  }

  res.status(err.statusCode).json({
    success: false,
    message: err.message,
  });
};
