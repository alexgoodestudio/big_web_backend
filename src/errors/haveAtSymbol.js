function haveAtSymbol(req, res, next) {
    let email = res.locals.email_address;
  if (!email.includes("@")) {
    return next( {
      status: 409,
      message: `The email "${email}" must have @ symbol`,
    });
  }
  next()
}

module.exports = haveAtSymbol;
