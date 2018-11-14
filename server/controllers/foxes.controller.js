const fetch = require("node-fetch");

module.exports.list = function (req, res, next) {
  fetch("https://randomfox.ca/floof/")
    .then(res => res.json())
    .then(fox => {
      return res.send(fox.image);
    });
};