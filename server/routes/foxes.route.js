const express = require('express');
const router = express.Router();

// import foxes controller
const foxesController = require("../controllers/foxes.controller");
// list fox image
router.get("/foxes", foxesController.list);

module.exports = router;