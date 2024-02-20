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

module.exports = {
  signUpUser,
  signInUser,
};
