// import mongodb orders model
const Orders = require("../models/orders.model");

// GET - list all orders from mongodb
module.exports.list = function (req, res, next) {
  Orders.find({}).exec()
    .then(orders => {
      return res.send(orders);
    })
    .catch(err => {
      console.log("Error listing all orders from mongodb", err);
      return res.send(err);
    });
};

// gets last orders id (max order id)
// this is used to increment the orders.id + 1
function getLastOrderId() {
  return Orders.find({}).sort({"id": -1}).limit(1).exec()
    .then(orders => {
      return orders[0].id;
    })
    .catch(err => {
      console.log("Error getting max orders id", err);
    });
}

// POST - create new order, add to mongodb
module.exports.create = function (req, res, next) {
  // use anonymous async function so we can use await
  (async function() {
    const newOrder = new Orders();

    // use await to make sure we get the last max task id
    newOrder.id = await getLastOrderId() + 1;
    newOrder.orderDate = req.body.orderDate;
    newOrder.orderTime = req.body.orderTime;
    newOrder.amount = req.body.amount;

    newOrder.save((err, newOrder) => {
      if (err) return res.send(err);

      return res.send(newOrder);
    });
  })();
};