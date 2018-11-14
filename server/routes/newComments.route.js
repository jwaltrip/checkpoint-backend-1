const express = require('express');
const router = express.Router();

// import newComment controller
const newCommentsController = require("../controllers/newComments.controller");

router.get("/newComments", newCommentsController.list);

module.exports = router;
