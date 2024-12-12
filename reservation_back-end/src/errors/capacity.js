function capacity(req, res, next) {
    const { capacity } = req.body.data;
    if (!capacity || !Number.isInteger(capacity)) {
   
      return next({
            status:400,
            message:"The 'capacity' field must be a number and cannot be null or empty."
        })
    }
    next();
}
module.exports = capacity;
