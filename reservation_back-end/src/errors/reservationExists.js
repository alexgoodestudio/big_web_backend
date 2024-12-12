const service = require("../reservations/reservations.service");

async function reservationExists(req, res, next) {
    const reservation_id = res.locals.reservation_id;
    const reservation = await service.read(reservation_id );
    res.locals.reservation = reservation;
    if (!reservation) {
        return next({
            message: `this reservation_id (${reservation_id}) does not exist`,
            status: 404,
        });
    }
    next();
  }

  module.exports = reservationExists;