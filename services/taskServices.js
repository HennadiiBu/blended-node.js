const fs = require("fs/promises");
const path = require("path");
const crypto = require("crypto");

const taskPath = path.join(__dirname, "..", "db", "tasks.json");

const readDB = async () => {
  const result = await fs.readFile(taskPath);
  return JSON.parse(result);
};
const writeDB = async (data) => {
  await fs.writeFile(taskPath, JSON.stringify(data, null, 4));
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

const updateTaskService = async (id, body) => {
  const tasks = await readDB();
  const taskIndex = tasks.findIndex((task) => task.id === id);
  if (taskIndex === -1) {
    throw new Error("Task not found");
  }
  tasks.splice(taskIndex, 1, { ...tasks[taskIndex], ...body });
  await writeDB(tasks);
  return tasks[taskIndex];
};

const deleteTaskService = async (id) => {
  const tasks = await readDB();
  const taskIndex = tasks.findIndex((task) => task.id === id);
  if (taskIndex === -1) {
    throw new Error("Task not found");
  }
  const [deletedTask] = tasks.splice(taskIndex, 1);
  await writeDB(tasks);
  return deletedTask;
};

module.exports = {
  getAllTasksService,
  getOneTaskService,
  createTaskService,
  updateTaskService,
  deleteTaskService,
};
