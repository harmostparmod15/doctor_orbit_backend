const BookingService = require("../service/booking-service");

const bookingService = new BookingService();

const createBooking = async (req, res) => {
  try {
    const response = await bookingService.createBooking(req);
    return res.status(201).json({
      data: response,
      success: true,
      message: " Successfully created your Booking",
      error: {},
    });
  } catch (error) {
    return res.status(501).json({
      data: {},
      success: false,
      message: " Unable to create Booking at the moment",
      error: error.message,
    });
  }
};

module.exports = {
  createBooking,
};
