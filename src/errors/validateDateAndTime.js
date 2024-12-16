function validateDateAndTime(req, res, next) {
  // console.log("validatedateand time");
  let hour = res.locals.time.getUTCHours();
  let minute = res.locals.time.getUTCMinutes();

  if (
    (hour < 10) ||
    (hour === 10 && minute < 30) ||
    (hour > 21) ||
    (hour === 21 && minute > 30)
  ) {
    return next({
      message: "please select a time between 10:30 & 21:30",
      status: 400,
    });
  }
  next();
}

module.exports = validateDateAndTime;
