const dotenv = require("dotenv");
const mongoose = require("mongoose");
dotenv.config();

const app = require("./app");
const { PORT, DB_URI } = process.env;

(async () => {
  await mongoose.connect(DB_URI);
  console.log(`Connection to database successfully`);
  app.listen(PORT, () => {
    console.log(`Server run at ${PORT} port`);
  });
})();
