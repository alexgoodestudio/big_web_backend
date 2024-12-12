function tuesdayValidation(req, res, next) {
  // console.log("tuesdayVal");
  const { reservation_date, reservation_time } = req.body.data;

  const reservationDate = new Date(`${reservation_date}T${reservation_time}:00Z`);
  res.locals.time = reservationDate;

  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const numeralDay = reservationDate.getDay();

  if (isNaN(numeralDay)) {
    return next({
      message: `reservation_date/ reservation_time is not a number`,
      status: 400,
    });
  }

  
  if (numeralDay === 2) {
    return next({
      message: `The reservation date is a Tuesday as the restaurant is closed on Tuesdays`,
      status: 400,
    });
  }

  if (reservationDate < today) {
    return next({
      message: `The reservation date is in the past. Only future reservations are allowed`,
      status: 400,
    });
  }

  next();
}

module.exports = tuesdayValidation;
