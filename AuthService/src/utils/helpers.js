const jwt = require("jsonwebtoken");
const { SECRET_KEY } = require("../config/server-config");

const generateJWT = (data) => {
  const email = data.email;
  const role = data.role;
  const token = jwt.sign({ email, role }, SECRET_KEY);
  return token;
};

const isPasswordCorrect = (userIncomingPassword, userStoredPassword) => {
  userIncomingPassword = String(userIncomingPassword).toLowerCase();
  userStoredPassword = String(userStoredPassword).toLowerCase();
  //  if password matches
  if (userIncomingPassword === userStoredPassword) return true;
  //  if password dont matches
  else if (userIncomingPassword !== userStoredPassword) return false;
};

module.exports = {
  generateJWT,
  isPasswordCorrect,
};
