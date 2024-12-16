
function emptyEstimateForm(req, res, next) {
    const email = req.body.data.email_address;
    const name = req.body.data.name;
    const address = req.body.data.address;
    const phone_number = req.body.data.phone_number;
    const number_of_beds = req.body.data.number_of_beds;
    const number_of_baths = req.body.data.number_of_baths;

    console.log(email, name, address)
    res.locals.email_address = email;
    if (!email || !name || !address || !phone_number || !number_of_baths || !number_of_beds ) {
      return next({
        status: 400,
        message: "Input value cannot be empty",
      });
    }
    next();
  }
  
  module.exports = emptyEstimateForm;
  