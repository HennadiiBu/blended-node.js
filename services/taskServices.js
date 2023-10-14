const HttpError = require("../utils/HttpError");

const Task = require("../models/Task");

const getAllTasksService = async () => {
  return await Task.find();
};

const getOneTaskService = async (id) => {
  const task = await Task.findById(id);

  if (!task) {
    throw new HttpError(404);
  }
  return task;
};

const createTaskService = async (body) => {
  return await Task.create(body);
};

const updateTaskService = async (id, body) => {
  const task = await Task.findByIdAndUpdate(id, body, { new: true });

  if (!task) {
    throw new HttpError(404);
  }
  return task;
};

const deleteTaskService = async (id) => {
  const task = await Task.findByIdAndDelete(id);

  if (!task) {
    throw new HttpError(404);
  }

  return task;
};

module.exports = {
  getAllTasksService,
  getOneTaskService,
  createTaskService,
  updateTaskService,
  deleteTaskService,
};
