const Joi = require("joi");

const createTaskValidationSchema = Joi.object({
  title: Joi.string().required().min(4).max(99),
  completed: Joi.boolean(),
});

const updateTaskValidationSchema = Joi.object()
  .keys({
    title: createTaskValidationSchema.extract("title").optional(),
    completed: createTaskValidationSchema.extract("completed"),
  })
  .or("title", "completed");

module.exports = { createTaskValidationSchema, updateTaskValidationSchema };
