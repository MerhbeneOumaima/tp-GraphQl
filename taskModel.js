const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  completed: { type: Boolean, default: false },
  duration: { type: Number }
});

const Task = mongoose.model('Task', taskSchema);

module.exports = Task;
