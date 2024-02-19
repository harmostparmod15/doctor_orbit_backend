const DoctorService = require("../services/doctor-service");

const doctorService = new DoctorService();

const getAllDoctors = async (req, res) => {
  try {
    const response = await doctorService.getAllDoctors();
    return res.status(200).json({
      data: response,
      success: true,
      message: "successfully fetched all doctors",
      error: {},
    });
  } catch (error) {
    return res.status(500).json({
      data: {},
      success: false,
      message: "unable to fetch all doctors",
      error: error,
    });
  }
};

module.exports = {
  getAllDoctors,
};
