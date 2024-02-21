const { user } = require("../models/index");

class UserRepository {
  async createUser(data) {
    try {
      const response = await user.create(data);

      return response;
    } catch (error) {
      console.log("something went wrong in repository layer");
      throw error;
    }
  }

  async getUser(data) {
    try {
      const response = await user.findOne({ where: { email: data.email } });
      return response;
    } catch (error) {
      console.log("something went wrong in repository layer");
      throw error;
    }
  }

  async getAllUsers() {
    try {
      const response = await user.findAll({ where: { role: "user" } });
      return response;
    } catch (error) {
      console.log("something went wrong in repository layet");
      throw error;
    }
  }

  async deleteUser(data) {
    try {
      const deletedUser = await user.findOne({ where: { id: data.id } });
      await user.destroy({ where: { id: data.id } });
      return deletedUser.email;
    } catch (error) {
      console.log("something went wrong in repository layer");
      throw error;
    }
  }

  async deleteAllUsers() {
    try {
      await user.destroy({ where: { role: "user" } });
      return true;
    } catch (error) {
      console.log("something went wrong in repository layer");
      throw error;
    }
  }
}

module.exports = UserRepository;
