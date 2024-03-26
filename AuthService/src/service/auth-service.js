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
      console.log("user dat", storedUser);

      // if user dont exist then send error
      if (!storedUser?.dataValues) {
        throw new Error(
          "looks like you dont have an account with us pls signup"
        );
      }
      // if user is admin then send error
      else if (storedUser?.dataValues?.role !== "user") {
        throw new Error("you are admin , may be try signin as admin");
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

  async signInAdmin(data) {
    try {
      // chck is user already exists
      const storedUser = await this.authRepository.getUser(data);

      // if user dont exist then send error
      if (!storedUser?.dataValues) {
        throw new Error(
          "looks like you dont have an account with us pls signup"
        );
      } else if (storedUser?.dataValues?.role !== "admin") {
        throw new Error("you tried to sign in as admin , but u are not one ");
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

  async getAllUsers(user) {
    try {
      //  geting user info from db
      const storedUser = await this.authRepository.getUser(user);

      //  if user is admin then call delete users
      if (storedUser?.dataValues?.role === "admin") {
        const response = this.authRepository.getAllUsers();
        return response;
      } else {
        throw new Error("you dont have rights to do this");
      }
    } catch (error) {
      console.log("something went wrong in serivce layer");
      console.log("serivce error", error);
      throw new Error(error);
      s;
    }
  }

  async deleteUser(data) {
    try {
      //  geting user info from db
      const storedUser = await this.authRepository.getUser(data?.user);
      //  if user is admin then call delete users
      if (storedUser?.dataValues?.role === "admin") {
        const response = this.authRepository.deleteUser(data.query);
        return response;
      } else {
        throw new Error("you dont have rights to do this");
      }
    } catch (error) {
      console.log("something went wrong in serivce layer");
      console.log("serivce error", error);
      throw new Error(error);
      s;
    }
  }

  async deleteAllUsers(user) {
    try {
      //  geting user info from db
      const storedUser = await this.authRepository.getUser(user);
      //  if user is admin then call delete users
      if (storedUser?.dataValues?.role === "admin") {
        const response = this.authRepository.deleteAllUsers();
        return response;
      } else {
        throw new Error("you dont have rights to do this");
      }
    } catch (error) {
      console.log("something went wrong in serivce layer");
      console.log("serivce error", error);
      throw new Error(error);
      s;
    }
  }
}

module.exports = AuthService;
