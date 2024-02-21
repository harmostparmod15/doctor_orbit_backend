const dotenv = require("dotenv");

dotenv.config();

module.exports = {
  PORT: process.env.PORT,
  SECRET_KEY: process.env.SECRET_KEY,
  ADMIN_SECRET_PHRASE: process.env.ADMIN_SECRET_PHRASE,
};
