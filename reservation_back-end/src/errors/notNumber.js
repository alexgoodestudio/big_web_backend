async function notNumber(req, res, next) {
    const { mobile_number } = req.body.data;
    const isValidPhoneNumber = /^(\+\d{1,2}\s?)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/.test(mobile_number);

    if (!isValidPhoneNumber) {
        next({
            message: `mobile_number must be a valid phone number`,
            status: 400,
        });
    } else {
        next();
    }
}


  module.exports = notNumber;