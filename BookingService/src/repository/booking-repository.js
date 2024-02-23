const { bookings } = require("../models/index");

class BookingRepository {
  async createBooking(data) {
    try {
      const patientEmail = data.user.email;
      const bookingData = { ...data.body, patientEmail };
      const response = await bookings.create(bookingData);
      //  preparing response object and throwing it
      const responseObj = {
        name: response?.dataValues?.patientName,
        mobile_number: response?.dataValues?.patientMobile,
        appointment_date: response?.dataValues?.appointmentDate,
      };
      return responseObj;
    } catch (error) {
      console.log(error);
      console.log("something went wrong in repository layer");
      throw error;
    }
  }

  async getBooking(email) {
    try {
      const response = await bookings.findAll({
        where: { patientEmail: email },
      });
      return response;
    } catch (error) {
      console.log("something went wrong in repository layer");
      throw error;
    }
  }

  async deleteBooking(id) {
    try {
      const response = await bookings.destroy({
        where: {
          id: id,
        },
      });
      return response;
    } catch (error) {
      console.log("something went wrong in repositroy layer");
      throw error;
    }
  }
}

module.exports = BookingRepository;
