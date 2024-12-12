function hasReservationID2(req, res, next) {
  
    const reservation_id = req.params.reservation_id || req.body?.data?.reservation_id;
  
    if (reservation_id) {
      res.locals.reservation_id = reservation_id;
      next();
    } else {
      next({
        status: 400,
        message: 'missing reservation_id',
      });
    }
  }
  
  module.exports = hasReservationID2;
  