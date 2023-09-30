const fs = require("fs/promises");
const path = require("path");
const crypto = require("crypto");

const taskPath = path.join(__dirname, "..", "db", "tasks.json");

const readDB = async () => {
  const result = await fs.readFile(taskPath);
  return JSON.parse(result);
};

const getAllTasksService = async () => {
  return await readDB();
};

const getOneTaskService = async (id) => {
  const tasks = await readDB();
  const task = tasks.find((task) => task.id === id);
  if (!task) {
    throw new Error("Task not found");
  }
  return task;
};

const createTaskService = async ({ title, completed }) => {
  const newTask = {
    id: crypto.randomUUID(),
    title,
    completed,
  };
  const tasks = await readDB();
  tasks.push(newTask);
  await fs.writeFile(taskPath, JSON.stringify(tasks, null, 4));
  return newTask;
};

const updateTaskService = () => {};

const deleteTaskService = () => {};

module.exports = {
  getAllTasksService,
  getOneTaskService,
  createTaskService,
  updateTaskService,
  deleteTaskService,
};
