const express = require("express");
const {
  getAllTasks,
  getOneTask,
  createTask,
  updateTask,
  deleteTask,
} = require("../controlers/taskControlers");

const router = express.Router();

router.get("/", getAllTasks);

router.get("/:id", getOneTask);

router.post("/", createTask);

router.patch("/:id", updateTask);

router.delete("/:id", deleteTask);

module.exports = { taskRouter: router };
