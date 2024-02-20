const jwt = require("jsonwebtoken");

const isValidSignUpRequest = (req, res, next) => {
  if (
    !req.body.name ||
    !req.body.email ||
    !req.body.password ||
    !req.body.mobile_no ||
    !req.body.role
  ) {
    return res.status(403).json({
      data: {},
      success: false,
      message: "unable to complete your request",
      error: "required fields are missing",
    });
  } else next();
};

const isValidSignInRequest = (req, res, next) => {
  if (!req.headers.email || !req.headers.password) {
    return res.status(403).json({
      data: {},
      success: false,
      message: "unable to complete your request",
      error: "email or password is missing",
    });
  } else next();
};

module.exports = {
  isValidSignUpRequest,
  isValidSignInRequest,
};
