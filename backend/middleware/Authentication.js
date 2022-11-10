const jwt = require("jsonwebtoken");
const User = require("../models/UserModel");
const ErrorHandler = require("../utils/ErrorHandler");
const CatchAsyncErrors = require("./CatchAsyncErrors");

exports.isAuthenticatedUser = CatchAsyncErrors(async (req, res, next) => {
  const { token } = req.cookies;

  if (!token) {
    return next(
      new ErrorHandler("Sorry, please login for access to this resource", 401)
    );
  }

  const decodedData = jwt.verify(token, process.env.JWT_SECRET_KEY);

  req.user = await User.findById(decodedData.id);

  next();
});

// Admin Roles for Adding and Removing Products
exports.authorizeRoles = (...roles) => {
  return (req, res, next) => {
    if (!roles.includes(req.user.role)) {
      return next(
        new ErrorHandler(`${req.user.role} can not access this resources`)
      );
    }
    next();
  };
};
