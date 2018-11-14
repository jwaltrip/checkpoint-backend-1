// import mongoose to connect to mongodb
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// create tasks schema
const TasksSchema = new Schema({
  id: Number,
  task: String,
  date: String
});

// export tasks model
module.exports = mongoose.model("tasks", TasksSchema);