const BookingRepository = require("../repository/booking-repository");

class BookingService {
  constructor() {
    this.bookingRepository = new BookingRepository();
  }

  async createBooking(data) {
    try {
      //  check if user has already booking
      const isBookingExist = await this.bookingRepository.getBooking(
        data.user.email
      );
      //  if booking with same useremail exist throw an error
      if (isBookingExist[0]?.dataValues?.patientEmail === data?.user?.email) {
        throw new Error("Only 1 appointment allowed per user,  ");
      }
      //else  create a new bookings
      else {
        const response = await this.bookingRepository.createBooking(data);
        return response;
      }
    } catch (error) {
      console.log("something went wrong in serivce layer");
      throw new Error(error);
    }
  }
}

module.exports = BookingService;
