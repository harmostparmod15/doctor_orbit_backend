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

  async getDoctor(id) {
    try {
      const response = await this.doctorRepository.getDoctor(id);
      return response;
    } catch (error) {
      console.log("something went wrong in service layer");
      throw error;
    }
  }

  async deleteDoctor(id) {
    try {
      const response = await this.doctorRepository.deleteDoctor(id);
      return response;
    } catch (error) {
      console.log("something went worng in service layer");
      throw error;
    }
  }

  async createDoctor(data) {
    try {
      const response = await this.doctorRepository.createDoctor(data);
      return response;
    } catch (error) {
      console.log("something went wrong in service layer");
      throw error;
    }
  }
}

module.exports = DoctorService;
