const express = require('express');
const router = express.Router();

// import orders controller
const ordersController = require("../controllers/orders.controller");
// list all orders
router.get("/orders", ordersController.list);
// create new orders
router.post("/orders", ordersController.create);

module.exports = router;
