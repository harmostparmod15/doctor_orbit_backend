const { generateJWT, isPasswordCorrect } = require("../utils/helpers");

const AuthRepository = require("../repository/auth-repository");

class AuthService {
  constructor() {
    this.authRepository = new AuthRepository();
  }

  async signUpUser(data) {
    try {
      //  check if user  already exist
      const storedUser = await this.authRepository.getUser(data);

      //  if user exist then throw error
      if (data.email === storedUser?.dataValues?.email) {
        throw new Error("user already exist");
      }
      //  is user dont eist then create one and return token
      else {
        const response = await this.authRepository.createUser(data);
        const userName = response?.dataValues?.name;
        const userId = response?.dataValues?.id;
        const token = generateJWT(data);
        const responseObj = {
          userName: userName,
          userId: userId,
          token: token,
        };
        return responseObj;
      }
    } catch (error) {
      console.log("something went wrong in service layer");
      console.log("service error", error);
      throw new Error(error);
    }
  }

  async signInUser(data) {
    try {
      // chck is user already exists
      const storedUser = await this.authRepository.getUser(data);

      // if user dont exist then send error
      if (!storedUser?.dataValues) {
        throw new Error(
          "looks like you dont have an account with us pls signup"
        );
      }
      // if user exist then check passwords and return token
      else {
        const passwordMatches = isPasswordCorrect(
          data.password,
          storedUser?.dataValues?.password
        );
        if (passwordMatches) {
          const userName = storedUser?.dataValues?.name;
          const token = generateJWT(data);
          const responseObj = {
            userName: userName,
            token: token,
          };
          return responseObj;
        } else throw new Error("you have entered incorrect password");
      }
    } catch (error) {
      console.log("something went wrong in serivce layer");
      console.log("service error", error);
      throw new Error(error);
    }
  }
}

module.exports = AuthService;
