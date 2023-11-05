const express = require("express");
const { authRouter } = require("./auth");
const { taskRouter } = require("./tasks");

const router = express.Router();

router.use("/tasks", taskRouter);
router.use("/auth", authRouter);

module.exports = router;