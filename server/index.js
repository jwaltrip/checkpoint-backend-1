const express = require("express");
const bodyParser = require("body-parser");
// import mongoose to connect to mongodb
const mongoose = require("mongoose");

const app = express();

// setup bodyparser middleware
app.use(bodyParser.json());

// setup mongoDB connection
mongoose.Promise = global.Promise;
// mongoDB connection string
mongoose.connect("mongodb://jake:pass1234@ds063140.mlab.com:63140/checkpoint-1");

// import routes
const dateTime_route = require("./routes/datetime.route");
const newComments_route = require("./routes/newComments.route");
const newTasks_route = require("./routes/newTasks.route");
const newOrders_route = require("./routes/newOrders.route");
const tickets_route = require("./routes/tickets.route");
const tasks_route = require("./routes/tasks.route");
const orders_route = require("./routes/orders.route");
const messages_route = require("./routes/messages.route");
const foxes_route = require("./routes/foxes.route");

// setup routes
app.use("/", dateTime_route);
app.use("/", newComments_route);
app.use("/", newTasks_route);
app.use("/", newOrders_route);
app.use("/", tickets_route);
app.use("/", tasks_route);
app.use("/", orders_route);
app.use("/", messages_route);
app.use("/", foxes_route);

// tell server to listen on port 3002
app.listen(3001, (err) => {
  if (err) {
    return console.log("Error", err);
  }
  console.log("Web server is now living in apartment 3001");
});
