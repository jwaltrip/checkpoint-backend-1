const express = require('express');
const router = express.Router();

// import commnet controller
const dateTimeController = require("../controllers/datetime.controller");

router.get("/dateTime", dateTimeController.get_dateTime);

module.exports = router;
