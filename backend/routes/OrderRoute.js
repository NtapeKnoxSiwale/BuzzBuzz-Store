const express = require("express");
const {
  createOrder,
  getSingleOrder,
  getAllOrders,
  updateAdminOrder,
  deleteOrder,
} = require("../controller/OrderController");

const {
  isAuthenticatedUser,
  authorizeRoles,
} = require("../middleware/Authentication");
const router = express.Router();

router.route("/order/new").post(isAuthenticatedUser, createOrder);

router.route("/order/:id").post(isAuthenticatedUser, getSingleOrder);

router.route("/orders/me").get(isAuthenticatedUser, getAllOrders);

router
  .route("/admin/orders")
  .get(isAuthenticatedUser, authorizeRoles("admin"), getAllOrders);

router
  .route("/admin/order/:id")
  .put(isAuthenticatedUser, authorizeRoles("admin"), updateAdminOrder)
  .delete(isAuthenticatedUser, authorizeRoles("admin"), deleteOrder);

module.exports = router;
