const express = require('express');
const router = express.Router();

// import orders controller
const tasksController = require("../controllers/orders.controller");
// list all orders
router.get("/orders", tasksController.list);
// create new orders
router.post("/orders", tasksController.create);

module.exports = router;
