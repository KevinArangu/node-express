const express = require("express");
const OrderService = require("../services/orders.service");

const router = express.Router();
const service = new OrderService();

router.get("/", (req, res, next) => {
  try {
    const orders = service.find();
    res.json(orders);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
