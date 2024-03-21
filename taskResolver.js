// taskResolver.js
const Task = require('./taskModel');

const taskResolver = {
  task: async ({ id }) => await Task.findById(id),
  tasks: async () => await Task.find(),
  addTask: async ({ title, description, completed, duration }) => {
    const task = new Task({ title, description, completed, duration });
    return await task.save();
  },
  completeTask: async ({ id }) => {
    return await Task.findByIdAndUpdate(id, { completed: true }, { new: true });
  },
  changeDescription: async ({ id, description }) => {
    return await Task.findByIdAndUpdate(id, { description }, { new: true });
  },
  deleteTask: async ({ id }) => {
    return await Task.findByIdAndDelete(id);
  },
};

module.exports = taskResolver;
