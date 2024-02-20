const express = require("express");

const DoctorController = require("../../controllers/doctor-controller");

const { validRequestValidator } = require("../../middlewares/index");

const router = express.Router();

router.get("/doctors", DoctorController.getAllDoctors);
router.get("/doctor/:id", DoctorController.getDoctor);
router.delete("/doctor/:id", DoctorController.deleteDoctor);
router.post(
  "/doctor",
  validRequestValidator.validRequest,
  DoctorController.createDoctor
);

module.exports = router;
