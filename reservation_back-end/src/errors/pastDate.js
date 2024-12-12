function pastDate(req, res, next) {
  // console.log("pastDate");
  const today = new Date();
  const { reservation_date, reservation_time } = req.body.data;
  
  const reservationDateTime = new Date(`${reservation_date}T${reservation_time}:00Z`);

  const todayTimeStamp = today.getTime();
  const reservationDateTimeStamp = reservationDateTime.getTime();

  if (todayTimeStamp > reservationDateTimeStamp) {
    return res.status(400).send({ error: `future` });
  }
  next();
}

module.exports = pastDate;
