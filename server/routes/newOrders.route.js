const express = require('express');
const router = express.Router();

// import newOrders controller
const newOrdersController = require("../controllers/newOrders.controller");

router.get("/newOrders", newOrdersController.list);

module.exports = router;
