const User = require("../models/UserModel");
const ErrorHandler = require("../utils/ErrorHandler.js");
const CatchAsyncErrors = require("../middleware/CatchAsyncErrors");
const sendToken = require("../utils/jwtToken.js");

// Registration of a new user
exports.createUser = CatchAsyncErrors(async (req, res, next) => {
  const { name, email, password } = req.body;
  const user = await User.create({
    name,
    email,
    password,
    avatar: {
      public_id: "https://test.com",
      url: "https://test.com",
    },
  });

  /* Has been replace by the line below.
  
  const token = user.getJwtToken();

  res.status(201).json({
    success: true,
    token,
  }); */

  sendToken(user, 200, res);
});

// Login User
exports.loginUser = CatchAsyncErrors(async (req, res, next) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return next(
      new ErrorHandler("Please enter your email address & password!", 400)
    );
  }
  const user = await User.findOne({ email }).select("+password");

  if (!user) {
    return next(
      new ErrorHandler(
        "User with this email address and password can not be found!",
        401
      )
    );
  }
  const isPasswordMatched = await user.comparePassword(password);

  if (!isPasswordMatched) {
    return next(
      new ErrorHandler(
        "User with this email address and password can not be found!",
        401
      )
    );
  }

  /* Has been replaced by the code below

  const token = user.getJwtToken();

  res.status(201).json({
    success: true,
    token,
  }); */

  sendToken(user, 200, res);
});

// Logout user
exports.logoutUser = CatchAsyncErrors(async (req, res, next) => {
  res.cookie("token", null, {
    expires: new Date(Date.now()),
    httpOnly: true,
  });

  res.status(200).json({
    success: true,
    message: "Logout Success",
  });
});
