const express = require("express");

const BookingController = require("../../controllers/booking-controller");

const { validBookingRequest, authJWT } = require("../../middlewares/index");

const router = express.Router();

router.post(
  "/booking/new",
  validBookingRequest,
  authJWT,
  BookingController.createBooking
);

module.exports = router;
