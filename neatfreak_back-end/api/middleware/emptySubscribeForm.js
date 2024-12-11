
function empty(req, res, next) {
  const body = req.body.data.email_address;
  res.locals.email_address = body;
  if (!body) {
    return next({
      status: 400,
      message: "Input value cannot be empty",
    });
  }
  next();
}

module.exports = empty;
