function hasEnoughPeople(req, res, next) {
    // console.log("hasEnoughPeople");
  
    let { people } = req.body.data;
    if (typeof people !== "number" || people < 1) {
        return next({
            message: "people has to be a number above zero",
            status: 400,
        });
    }
    next();
  }

  module.exports = hasEnoughPeople;