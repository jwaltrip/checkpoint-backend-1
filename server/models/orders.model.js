// import mongoose to connect to mongodb
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// create orders schema
const OrdersSchema = new Schema({
  orderDate: String,
  orderTime: String,
  amount: String
});

// export orders model
module.exports = mongoose.model("orders", OrdersSchema);