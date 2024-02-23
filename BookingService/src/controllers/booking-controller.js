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

const getBooking = async (req, res) => {
  try {
    const response = await bookingService.getBooking(req.user.email);
    return res.status(200).json({
      data: response,
      success: true,
      message: " successfully fetched your  Booking",
      error: {},
    });
  } catch (error) {
    return res.status(500).json({
      data: {},
      success: false,
      message: " unable to fetch  your Booking",
      error: error.message,
    });
  }
};

const deleteBooking = async (req, res) => {
  try {
    const response = await bookingService.deleteBooking(req.params.id);
    return res.status(201).json({
      data: response,
      success: true,
      message: " successfully deleted a  booking",
      error: {},
    });
  } catch (error) {
    return res.status(501).json({
      data: {},
      success: false,
      message: " unable to delete a   booking",
      error: error,
    });
  }
};

module.exports = {
  createBooking,
  getBooking,
  deleteBooking,
};
