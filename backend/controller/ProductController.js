const Product = require("../models/ProductModel.js");
const ErrorHandler = require("../utils/ErrorHandler.js");
const catchAsyncErrors = require("../middleware/CatchAsyncErrors");

// Creating the Product
exports.createProduct = catchAsyncErrors(async (req, res, next) => {
  const product = await Product.create(req.body);

  res.status(201).json({
    success: true,
    product,
  });
});

// Getting all Products
exports.getAllProducts = catchAsyncErrors(async (req, res) => {
  const products = await Product.find();
  res.status(200).json({
    message: "Route is working fine",
    products,
  });
});

// Updating Product ---Administrator
exports.updateProduct = catchAsyncErrors(async (req, res, next) => {
  let product = await Product.findById(req.params.id);
  if (!product) {
    //return next(new ErrorHandler("Product with this ID is not found", 404));
    return next(new ErrorHandler("Product with this ID is not found", 404));
  }
  product = await Product.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
    useUnified: false,
  });
  res.status(200).json({
    success: true,
    product,
  });
});

// Product deleting
exports.deleteProduct = catchAsyncErrors(async (req, res, next) => {
  const product = await Product.findById(req.params.id);
  if (!product) {
    return next(new ErrorHandler("Product with this ID is not found", 404));
  }

  await product.remove();
  return res.status(200).json({
    success: true,
    message: "The Product was deleted successfully.",
  });
});

//Single Product Details
exports.getSingleProduct = catchAsyncErrors(async (req, res, next) => {
  const product = await Product.findById(req.params.id);
  if (!product) {
    return next(new ErrorHandler("Product with this ID is not found", 404));
  }
  return res.status(200).json({
    success: true,
    product,
  });
});
