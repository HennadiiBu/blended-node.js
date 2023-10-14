const express = require("express");
const {
  getAllTasks,
  getOneTask,
  createTask,
  updateTask,
  deleteTask,
} = require("../controlers/taskControlers");

const {
  createTaskValidationSchema,
  updateTaskValidationSchema,
} = require("../utils/validation/taskValidationSchemas");

const validateBody = require("../utils/validation/validateBody");

const router = express.Router();

router.get("/", getAllTasks);

router.get("/:id", getOneTask);

router.post("/", validateBody(createTaskValidationSchema), createTask);

router.patch("/:id", validateBody(updateTaskValidationSchema), updateTask);

router.delete("/:id", deleteTask);

module.exports = { taskRouter: router };
