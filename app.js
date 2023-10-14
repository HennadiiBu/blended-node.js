const express = require("express");

const errorHandler = require("./middlewares/errorHandler");

const { taskRouter } = require("./routes/tasks");

const { authRouter } = require("./routes/auth");

const app = express();

app.use(express.json());
app.use("/tasks", taskRouter);
app.use("/auth", authRouter);

app.use(errorHandler);

module.exports = app;
