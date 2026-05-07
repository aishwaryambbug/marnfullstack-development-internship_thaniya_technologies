const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },

  status: {
    type: String,
    default: "todo"
  }
});

module.exports = mongoose.model("Task", taskSchema);