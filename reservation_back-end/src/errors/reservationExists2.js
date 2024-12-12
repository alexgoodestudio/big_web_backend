const service = require("../reservations/reservations.service");

async function reservationExists2(req, res, next) {
    // console.log("reservationExists2");
    const reservationId = req.params.reservation_id
    const reservation = await service.read(reservationId);
    if(!reservation){
        next({
            message: `this reservation_id (${reservationId}) does not exist`,
            status: 404,
        });
    }else{
        res.locals.reservation = reservation;
        next();
    }
  }

  module.exports = reservationExists2;