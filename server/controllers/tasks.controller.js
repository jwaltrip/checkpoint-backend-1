// import mongodb tasks model
const Tasks = require("../models/tasks.model");

// GET - list all tasks from mongodb
module.exports.list = function (req, res, next) {
  Tasks.find({}).exec()
    .then(tasks => {
      return res.send(tasks);
    })
    .catch(err => {
      console.log("Error listing all tasks from mongodb", err);
      return res.send(err);
    });
};

// gets last task id (max task id)
// this is used to increment the task.id + 1
function getLastTaskId() {
  return Tasks.find({}).sort({"id": -1}).limit(1).exec()
    .then(tasks => {
      return tasks[0].id;
    })
    .catch(err => {
      console.log("Error getting max task id", err);
    });
}

// POST - create new task, add to mongodb
module.exports.create = function (req, res, next) {
  // use anonymous async function so we can use await
  (async function() {
    const newTask = new Tasks();

    // use await to make sure we get the last max task id
    newTask.id = await getLastTaskId() + 1;
    newTask.task = req.body.task;
    newTask.date = req.body.date;

    newTask.save((err, newTask) => {
      if (err) return res.send(err);

      return res.send(newTask);
    });
  })();
};