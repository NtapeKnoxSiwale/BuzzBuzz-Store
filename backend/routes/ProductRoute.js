const express = require("express");
const {
  getAllProducts,
  createProduct,
  updateProduct,
  deleteProduct,
  getSingleProduct,
} = require("../controller/ProductController");
const {
  isAuthenticatedUser,
  authorizeRoles,
} = require("../middleware/Authentication");
const router = express.Router();

router.route("/products").get(getAllProducts);
router
  .route("/product/new")
  // Only Admin can add product
  .post(isAuthenticatedUser, authorizeRoles("admin"), createProduct);
router
  .route("/product/:id")
  // Only add can update products
  .put(isAuthenticatedUser, authorizeRoles("admin"), updateProduct)
  // Only add can delete products
  .delete(isAuthenticatedUser, authorizeRoles("admin"), deleteProduct)
  .get(getSingleProduct);

module.exports = router;
