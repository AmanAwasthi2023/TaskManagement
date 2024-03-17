const TaskModel = require("../models/TaskModel")

module.exports.getTasks = async(req, res) => {
    const tasks = await TaskModel.find();
    res.send(tasks);
}

module.exports.saveTask = async(req, res) => {
    const tasks = req.body

    TaskModel.create({task})
    .then((dtata) => {
        console.log("Saved Successfully...")
        res.status(201).send(data)
    }).catch((err) => {
        console.log(err);
        res.sen({error: err, msg: "Something went wrong!"});
    });
};

module.exports.updateTask = (req, res) => {
    const {id} = req.params
    const {tasks} = req.body

    TaskModel.findByIdAndUpdate(id, {task})
    .then(() => res.send("Updated successfully"))
    .catch((err) => {
        console.log(err);
        res.sen({error: err, msg: "Something went wrong!"});
    });
};

module.exports.deleteTask = (req, res) => {
    const {id} = req.params

    TaskModel.findByIdAndDelete(id)
    .then(() => res.send("Deleted successfully"))
    .catch((err) => {
        console.log(err);
        res.send({error: err, msg: "Something went wrong!"});
    });
};