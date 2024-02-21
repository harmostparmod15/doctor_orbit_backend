const jwt = require("jsonwebtoken");
const { SECRET_KEY, ADMIN_SECRET_PHRASE } = require("../config/server-config");

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

const isValidAdminSecretPhrase = (req, res, next) => {
  if (req?.headers?.secretphrase === ADMIN_SECRET_PHRASE) {
    next();
  } else {
    return res.status(403).json({
      data: {},
      success: false,
      message: "  admin secret phrase is wrong",
      error: " Authentication error  ",
    });
  }
};

const authJWT = (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (authHeader) {
    const token = authHeader.split(" ")[1];
    jwt.verify(token, SECRET_KEY, (err, user) => {
      if (err) {
        return res.status(403).json({
          data: {},
          success: false,
          message: "Authorization token is wrong",
          error: "Authorization failed",
        });
      } else {
        req.user = user;
        next();
      }
    });
  } else {
    return res.status(401).json({
      data: {},
      success: false,
      message: "unable to complete your request",
      error: "authorization token is missing",
    });
  }
};

module.exports = {
  isValidSignUpRequest,
  isValidSignInRequest,
  isValidAdminSecretPhrase,
  authJWT,
};
