const checkValidBookingDate = (bookingDate) => {
  let todayDate = new Date().toISOString().split("T");
  todayDate = todayDate[0];
  const todayDateArr = todayDate.split("-");
  const bookingDataArr = bookingDate.split("-");

  console.log("date", todayDateArr, bookingDataArr);

  let isValidDate = false;

  for (let i = 0; i < 3; i++) {
    if (bookingDataArr[i] < todayDateArr[i]) {
      console.log("date cant be less");
      isValidDate = false;
      // return false;
    } else {
      console.log("create booking");
      // return true;
      isValidDate = true;
    }
  }
  return isValidDate;
};

module.exports = { checkValidBookingDate };
