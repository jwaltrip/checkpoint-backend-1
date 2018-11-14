const express = require('express');
const router = express.Router();

// import messages controller
const messagesController = require("../controllers/messages.controller");
// list all messages
router.get("/messages", messagesController.list);
// create new message
router.post("/messages", messagesController.create);

module.exports = router;
