function cancelReservation(req, res, next) {
  // const reservationId = req.body
  const reservation = res.locals.reservation
  if (reservation === "cancelled") {
    return next({
      status: 200,
      message: `cancelled reservation status shows ${status}`
    })
  }
  next()
}

module.exports = cancelReservation;
