const express = require('express');
const router = express.Router();

// import tasks controller
const tasksController = require("../controllers/tasks.controller");
// list all tasks
router.get("/tasks", tasksController.list);
// create new task
router.post("/tasks", tasksController.create);

module.exports = router;
