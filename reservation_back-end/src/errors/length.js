function length(req, res, next) {
  const { table_name } = req.body.data;
  if (table_name.length < 2) {
    return next({
      status: 400,
      message: "table_name length must be at least 2 characters"
    });
  }
  next();
}

module.exports = length;



