const { doctors } = require("../models/index");

class DoctorRepository {
  async getAllDoctors() {
    try {
      const response = await doctors.findAll();
      return response;
    } catch (error) {
      console.log("something went worng in repository layer");
      throw error;
    }
  }
}

module.exports = DoctorRepository;
