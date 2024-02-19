const DoctorRepository = require("../repository/doctor-repository");

class DoctorService {
  constructor() {
    this.doctorRepository = new DoctorRepository();
  }

  async getAllDoctors() {
    try {
      const response = await this.doctorRepository.getAllDoctors();
      return response;
    } catch (error) {
      console.log("something went wrong in service layer");
      throw error;
    }
  }
}

module.exports = DoctorService;
