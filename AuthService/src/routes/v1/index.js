const express = require("express");

const authController = require("../../controllers/auth-controller");

const {
  isValidSignUpRequest,
  isValidSignInRequest,
} = require("../../middlewares/index");

const router = express.Router();

// USER  ROUTES
router.post("/user/sign-up", isValidSignUpRequest, authController.signUpUser);
router.post("/user/sign-in", isValidSignInRequest, authController.signInUser);

module.exports = router;
