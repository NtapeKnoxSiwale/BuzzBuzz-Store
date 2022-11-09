const Product = require("../models/ProductModel.js");
const ErrorHandler = require("../utils/ErrorHandler.js");
const CatchAsyncErrors = require("../middleware/CatchAsyncErrors");
const Features = require("../utils/Features");

// Creating the Product
exports.createProduct = CatchAsyncErrors(async (req, res, next) => {
  const product = await Product.create(req.body);

  res.status(201).json({
    success: true,
    product,
  });
});

// Getting all Products
exports.getAllProducts = CatchAsyncErrors(async (req, res) => {
  const resultPerPage = 8;
  const productCount = await Product.countDocuments;
  const feature = new Features(Product.find(), req.query)
    .search()
    .filter()
    .pagination(resultPerPage);
  const products = await feature.query;
  res.status(200).json({
    message: true,
    products,
    resultPerPage,
  });
});

// Updating Product ---Administrator
exports.updateProduct = CatchAsyncErrors(async (req, res, next) => {
  let product = await Product.findById(req.params.id);
  if (!product) {
    // Return next(new ErrorHandler("Product with this ID is not found", 404));
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
exports.deleteProduct = CatchAsyncErrors(async (req, res, next) => {
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

// Single Product Details
exports.getSingleProduct = CatchAsyncErrors(async (req, res, next) => {
  const product = await Product.findById(req.params.id);
  if (!product) {
    return next(new ErrorHandler("Product with this ID is not found", 404));
  }
  return res.status(200).json({
    success: true,
    product,
    productCount,
  });
});
