const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema({
    task: {
        type: String,
        requried: true,
    },
});

module.exports = mongoose.model("Task", taskSchema);