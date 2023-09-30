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

const updateTask = async (req, res, next) => {
  try {
    const { id } = req.params;
    const updatedTask = await updateTaskService(id, req.body);
    res.status(200).json(updatedTask);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

const deleteTask = async (req, res, next) => {
  try {
    const { id } = req.params;
    const removedTask = await deleteTaskService(id);
    res.status(200).json(removedTask);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

module.exports = {
  getAllTasks,
  getOneTask,
  createTask,
  updateTask,
  deleteTask,
};
