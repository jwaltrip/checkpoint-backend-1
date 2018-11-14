const express = require('express');
const router = express.Router();

// import newTasks controller
const newTasksController = require("../controllers/newTasks.controller");

router.get("/newTasks", newTasksController.list);

module.exports = router;
