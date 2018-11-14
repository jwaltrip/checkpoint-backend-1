const express = require('express');
const router = express.Router();

// import tickets controller
const ticketsController = require("../controllers/tickets.controller");

router.get("/tickets", ticketsController.list);

module.exports = router;
