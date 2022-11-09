const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const validator = require("validator");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please enter your Name."],
    minLength: [3, "Please enter a name atleast 3 Characters."],
    maxLength: [30, "Name can not be more than 30 Characters."],
  },
  email: {
    type: String,
    required: [true, "Please enter your email address."],
    validate: [validator.isEmail, "Please enter a valid email."],
    unique: true,
  },
  password: {
    type: String,
    required: [true, "Please enter a valid password!"],
    minLength: [8, "Password should be more than 8 characters."],
    select: false,
  },
  avatar: {
    public_id: {
      type: String,
      required: true,
    },
    url: {
      type: String,
      required: true,
    },
  },
  role: {
    type: String,
    default: "user",
  },
  resetPasswordToken: String,
  resetPasswordTime: Date,
});

// Password encryption: Hashing
userSchema.pre("save", async function (next) {
  this.password = await bcrypt.hash(this.password, 10);
});

//JWT Token for Login
userSchema.methods.getJwtToken = function () {
  return jwt.sign({ id: this._id }, process.env.JWT_SECRET_KEY, {
    expiresIn: process.env.JWT_EXPIRES,
  });
};

// Comparing User given password
userSchema.methods.comparePassword = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
};

module.exports = mongoose.model("User", userSchema);
