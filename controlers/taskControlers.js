const {
  getAllTasksService,
  getOneTaskService,
  createTaskService,
  updateTaskService,
  deleteTaskService,
} = require("../services/taskServices");

const controllerWrapper = require("../utils/controllerWrapper");

const getAllTasks = controllerWrapper(async (req, res, next) => {
  const tasks = await getAllTasksService();
  res.json(tasks);
});

const getOneTask = controllerWrapper(async (req, res, next) => {
  const { id } = req.params;

  const task = await getOneTaskService(id);
  res.json(task);
});

const createTask = controllerWrapper(async (req, res, next) => {
  const newTask = await createTaskService(req.body);
  res.status(201).json(newTask);
});

const updateTask = controllerWrapper(async (req, res, next) => {
  const { id } = req.params;
  const updatedTask = await updateTaskService(id, req.body);
  res.status(200).json(updatedTask);
});

const deleteTask = controllerWrapper(async (req, res, next) => {
  const { id } = req.params;
  const removedTask = await deleteTaskService(id);
  res.status(200).json(removedTask);
});

module.exports = {
  getAllTasks,
  getOneTask,
  createTask,
  updateTask,
  deleteTask,
};
