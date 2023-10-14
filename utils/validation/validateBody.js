const validateBody = (schema) => {
  return (req, res, next) => {
    const { error } = schema.validate(req.body);
    if (error) {
      return res.status(406).json({ message: error.message });
    }
    next();
  };
};

module.exports = validateBody;
