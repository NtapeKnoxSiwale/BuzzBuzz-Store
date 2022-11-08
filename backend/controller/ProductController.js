const Product = require("../models/ProductModel.js");

// Creating the Product
exports.createProduct = async (req, res, next) => {
  const product = await Product.create(req.body);

  res.status(201).json({
    success: true,
    product,
  });
};

// Getting all Products
exports.getAllProducts = async (req, res) => {
  const products = await Product.find();
  res.status(200).json({
    message: "Route is working fine",
    products,
  });
};

// Updating Product ---Administrator
exports.updateProduct = async (req, res, next) => {
  let product = await Product.findById(req.params.id);
  if (!product) {
    //return next(new ErrorHandler("Product with this ID is not found", 404));
    res.status(200).json({
      success: false,
      message: "Product is not found with this ID",
    });
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
};

// Product deleting
exports.deleteProduct = async (req, res, next) => {
  const product = await Product.findById(req.params.id);
  if (!product) {
    return res.status(500).json({
      success: true,
      message: "Product with this ID is not found.",
    });
  }

  await product.remove();
  return res.status(200).json({
    success: true,
    message: "The Product was deleted successfully.",
  });
};

//Single Product Details
exports.getSingleProduct = async (req, res, next) => {
  const product = await Product.findById(req.params.id);
  if (!product) {
    return res.status(500).json({
      success: true,
      message: "Product with this ID is not found.",
    });
  }
  return res.status(200).json({
    success: true,
    product,
  });
};
