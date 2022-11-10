const mongoose = require("mongoose");
const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please Enter the Name of your Product"],
    trim: true,
    maxlength: [
      25,
      "The product name should not exceed more than 25 characters",
    ],
  },
  description: {
    type: String,
    required: [true, "Enter the Description of your Product"],
    maxlength: [
      4000,
      "Description should not exceed more than 4000 characters",
    ],
  },
  price: {
    type: Number,
    required: [true, "Please add a price for your Product"],
    maxlength: [8, "Price can not exceed more than 8 characters"],
  },
  discountPrice: {
    type: String,
    maxlength: [4, "Discount price can not exceed more than 4 characters"],
  },
  color: {
    type: String,
  },
  size: {
    type: String,
  },
  ratings: {
    type: Number,
    default: 0,
  },
  images: [
    {
      public_id: {
        type: String,
        required: true,
      },
      url: {
        type: String,
        required: true,
      },
    },
  ],
  category: {
    type: String,
    required: [true, "Please add a category of your Product"],
  },
  Stock: {
    type: Number,
    required: [true, "Please add some stock for your Product"],
    maxlength: [4, "Stock can not exceed more than 3 Characters"],
  },
  numOfReviews: {
    type: Number,
    default: 0,
  },
  reviews: [
    {
      user: {
        type: mongoose.Schema.ObjectId,
        ref: "User",
        required: true,
      },
      name: {
        type: String,
        required: true,
      },
      rating: {
        type: Number,
        required: true,
      },
      comment: {
        type: String,
      },
      time: {
        type: Date,
        default: Date.now(),
      },
    },
  ],
  user: {
    type: mongoose.Schema.ObjectId,
    ref: "User",
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
});

module.exports = mongoose.model("Product", productSchema);
