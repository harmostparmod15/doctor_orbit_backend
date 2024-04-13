const jwt = require("jsonwebtoken");

const { SECRET_KEY } = require("../config/server-config");
const { checkValidBookingDate } = require("../utils/helpers");

const validBookingRequest = (req, res, next) => {
  const isNameValid = /^[a-z ,.'-]+$/i.test(req?.body?.patientName);
  const isMobileValid = /^([+]\d{2})?\d{10}$/.test(req?.body?.patientMobile);
  const isAgeValid = req?.body?.patientAge < 120 && req?.body?.patientAge > 0;

  const isValidBookingDate = checkValidBookingDate(req?.body?.appointmentDate);
  if (!isValidBookingDate) {
    return res.status(404).json({
      data: {},
      success: false,
      message: "Invalid data",
      error: "Appointment date cannot be in past",
    });
  }

  if (
    !req.body.patientName ||
    !req.body.patientAge ||
    !req.body.patientMobile ||
    !req.body.doctorId
  ) {
    return res.status(404).json({
      data: {},
      success: false,
      message: "bad request , missing parameters",
      error: "missing essentail arguments",
    });
  } else if (!isNameValid || !isMobileValid || !isAgeValid) {
    let wrongInput = null;
    // checking which field is invalid
    if (!isNameValid) wrongInput = "Patient Full Name";
    if (!isMobileValid) wrongInput = "Mobile number";
    if (!isAgeValid) wrongInput = "Age";
    return res.status(404).json({
      data: {},
      success: false,
      message: "unable to complete your request",
      error: `Wrong input , please enter *${wrongInput}* in correct format`,
    });
  } else next();
};

const authJWT = (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (authHeader) {
    const token = authHeader.split(" ")[1];
    jwt.verify(token, SECRET_KEY, (err, user) => {
      if (err) {
        // console.log(err);
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
  validBookingRequest,
  authJWT,
};
