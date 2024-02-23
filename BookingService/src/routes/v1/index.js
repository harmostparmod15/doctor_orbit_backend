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

router.get("/bookings", authJWT, BookingController.getBooking);
router.delete("/booking/:id", authJWT, BookingController.deleteBooking);

module.exports = router;
