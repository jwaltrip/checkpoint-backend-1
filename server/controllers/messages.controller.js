// import mongodb messages model
const Messages = require("../models/messages.model");

// GET - list all messages from mongodb
module.exports.list = function (req, res, next) {
  Messages.find({}).exec()
    .then(messages => {
      return res.send(messages);
    })
    .catch(err => {
      console.log("Error listing all messages from mongodb", err);
      return res.send(err);
    });
};

// gets last messages id (max order id)
// this is used to increment the messages.id + 1
function getLastMessageId() {
  return Messages.find({}).sort({"id": -1}).limit(1).exec()
    .then(messages => {
      return messages[0].id;
    })
    .catch(err => {
      console.log("Error getting max message id", err);
    });
}

// POST - create new order, add to mongodb
module.exports.create = function (req, res, next) {
  // use anonymous async function so we can use await
  (async function() {
    const newMessage = new Messages();

    // use await to make sure we get the last max task id
    newMessage.id = await getLastMessageId() + 1;
    newMessage.name = req.body.name;
    newMessage.date = req.body.date;
    newMessage.message = req.body.message;

    newMessage.save((err, newMessage) => {
      if (err) return res.send(err);

      return res.send(newMessage);
    });
  })();
};