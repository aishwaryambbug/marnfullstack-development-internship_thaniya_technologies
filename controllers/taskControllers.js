const Task = require("../models/Task");

// Create task
exports.createTask = async (req, res) => {
  const task = await Task.create(req.body);
  res.json(task);
};

// Get all tasks
exports.getTasks = async (req, res) => {
  const tasks = await Task.find();
  res.json(tasks);
};