const express = require("express");

const authController = require("../../controllers/auth-controller");

const {
  isValidSignUpRequest,
  isValidSignInRequest,
  isValidAdminSecretPhrase,
  authJWT,
  checkValidSignUpData,
} = require("../../middlewares/index");

const router = express.Router();

// USER  ROUTES
router.post(
  "/user/signup",
  isValidSignUpRequest,
  checkValidSignUpData,
  authController.signUpUser
);
router.post("/user/signin", isValidSignInRequest, authController.signInUser);

// ADMIN ROUTES
router.post(
  "/admin/signup",
  isValidAdminSecretPhrase,
  isValidSignUpRequest,
  authController.signUpUser
);
router.post("/admin/signin", isValidSignInRequest, authController.signInUser);
router.get("/admin/users", authJWT, authController.getAllUsers);
router.delete("/admin/user/", authJWT, authController.deleteUser);
router.delete("/admin/users", authJWT, authController.deleteAllUsers);

module.exports = router;
