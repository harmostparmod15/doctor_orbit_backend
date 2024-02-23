const jwt = require("jsonwebtoken");
const { SECRET_KEY } = require("../config/server-config");

const bcrypt = require("bcrypt");

const generateJWT = (data) => {
  const email = data.email;
  const role = data.role;
  const token = jwt.sign({ email, role }, SECRET_KEY);
  return token;
};

const isPasswordCorrect = (userIncomingPassword, userStoredPassword) => {
  return bcrypt.compareSync(userIncomingPassword, userStoredPassword);
};

module.exports = {
  generateJWT,
  isPasswordCorrect,
};
