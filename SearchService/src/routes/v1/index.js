const express = require("express");

const DoctorController = require("../../controllers/doctor-controller");

const router = express.Router();

router.get("/get-all-doctors", DoctorController.getAllDoctors);

module.exports = router;
