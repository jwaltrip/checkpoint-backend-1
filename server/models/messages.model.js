// import mongoose to connect to mongodb
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// create messages schema
const MessagesSchema = new Schema({
  id: Number,
  name: String,
  date: String,
  message: String
});

// export messages model
module.exports = mongoose.model("messages", MessagesSchema);