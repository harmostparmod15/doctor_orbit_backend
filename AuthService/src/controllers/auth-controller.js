const AuthService = require("../service/auth-service");

const authService = new AuthService();

const signUpUser = async (req, res) => {
  try {
    const response = await authService.signUpUser(req.body);
    return res.status(200).json({
      data: response,
      success: true,
      message: "successfully signed you up ",
      error: {},
    });
  } catch (error) {
    return res.status(500).json({
      data: {},
      success: false,
      message: "unable to signed you up ",
      error: error.message,
    });
  }
};

const signInUser = async (req, res) => {
  try {
    const response = await authService.signInUser(req.headers);
    return res.status(200).json({
      response: response,
      success: true,
      message: "successfully signed you in",
      error: {},
    });
  } catch (error) {
    return res.status(500).json({
      data: {},
      success: false,
      message: "unable to signed you in ",
      error: error.message,
    });
  }
};

const signInAdmin = async (req, res) => {
  try {
    const response = await authService.signInAdmin(req.headers);
    return res.status(200).json({
      response: response,
      success: true,
      message: "successfully signed you in",
      error: {},
    });
  } catch (error) {
    return res.status(500).json({
      data: {},
      success: false,
      message: "unable to signed you in ",
      error: error.message,
    });
  }
};

const getAllUsers = async (req, res) => {
  try {
    const response = await authService.getAllUsers(req.user);
    return res.status(201).json({
      data: response,
      success: true,
      message: "successfully fetched all users",
      error: {},
    });
  } catch (error) {
    return res.status(401).json({
      data: {},
      success: false,
      message: "unable to fetch all users ",
      error: error.message,
    });
  }
};

const deleteUser = async (req, res) => {
  try {
    const response = await authService.deleteUser(req);
    return res.status(200).json({
      deleteUserEmail: response,
      success: true,
      message: "successfully deleted a user ",
      error: {},
    });
  } catch (error) {
    return res.status(500).json({
      data: {},
      success: false,
      message: "unable to delete  a user ",
      error: error.message,
    });
  }
};

const deleteAllUsers = async (req, res) => {
  try {
    const response = await authService.deleteAllUsers(req.user);
    return res.status(201).json({
      data: response,
      success: true,
      message: "successfully deleted all users",
      error: {},
    });
  } catch (error) {
    return res.status(401).json({
      data: {},
      success: false,
      message: "unable to delete all users ",
      error: error.message,
    });
  }
};

module.exports = {
  signUpUser,
  signInUser,
  signInAdmin,
  getAllUsers,
  deleteUser,
  deleteAllUsers,
};
