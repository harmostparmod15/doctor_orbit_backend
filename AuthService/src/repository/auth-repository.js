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
}

module.exports = UserRepository;
