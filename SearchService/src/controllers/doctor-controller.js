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

const getDoctor = async (req, res) => {
  try {
    const response = await doctorService.getDoctor(req.params.id);
    return res.status(200).json({
      data: response,
      success: true,
      message: "successfully fetched doctor",
      error: {},
    });
  } catch (error) {
    return res.status(500).json({
      data: {},
      success: false,
      message: "unable to get doctor",
      error: error,
    });
  }
};

const deleteDoctor = async (req, res) => {
  try {
    const response = await doctorService.deleteDoctor(req.params.id);
    return res.status(201).json({
      data: response,
      success: true,
      message: "successfully deleted a doctor",
      error: {},
    });
  } catch (error) {
    return res.status(501).json({
      data: {},
      success: false,
      message: "unable to delete a doctors",
      error: error,
    });
  }
};

const createDoctor = async (req, res) => {
  try {
    const response = await doctorService.createDoctor(req.body);
    return res.status(201).json({
      data: response,
      success: true,
      message: " successfully create a doctor",
      error: {},
    });
  } catch (error) {
    return res.status(501).json({
      data: {},
      success: false,
      message: " unable  to create  a doctor",
      error: error,
    });
  }
};

module.exports = {
  getAllDoctors,
  getDoctor,
  deleteDoctor,
  createDoctor,
};
