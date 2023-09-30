const {
  getAllTasksService,
  getOneTaskService,
  createTaskService,
  updateTaskService,
  deleteTaskService,
} = require("../services/taskServices");

const getAllTasks = async (req, res, next) => {
  const tasks = await getAllTasksService();
  res.json(tasks);
};

const getOneTask = async (req, res, next) => {
  const { id } = req.params;

  try {
    const task = await getOneTaskService(id);
    res.json(task);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

const createTask = async (req, res, next) => {
  try {
    const newTask = await createTaskService(req.body);
    res.status(201).json(newTask);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

const updateTask = (req, res, next) => {};

const deleteTask = (req, res, next) => {};

module.exports = {
  getAllTasks,
  getOneTask,
  createTask,
  updateTask,
  deleteTask,
};
