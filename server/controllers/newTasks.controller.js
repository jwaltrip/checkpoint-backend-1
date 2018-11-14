// import module to convert csv to json object
const csv = require("csvtojson");
const path = require('path');

module.exports.list = function (req, res, next) {
  // get relative path to data.csv
  const csvPath = path.join(__dirname, '..', 'data.csv');
  // convert csv to json object
  csv()
    .fromFile(csvPath)
    .then(csvObj => {
      return res.send(csvObj[0].new_tasks);
    })
    .catch(err => {
      return res.send(err);
    });
};