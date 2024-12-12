/**
 * Creates a middleware function that validates that req.body.data has the specified non-falsey properties.
 * @param properties
 *  one or more property name strings.
 * @returns {function(*, *, *): void}
 *    a middleware function that validates that req.body.data has the specified non-falsey properties.
 */

function hasProperties2(statusProperties) {
  return function (req, res, next) {
    const { status } = req.body.data
    if (!statusProperties.includes(status)) {
      return next({
        status: 400,
        message: "unknown"
      })
    }
    next();
  }
}

module.exports = hasProperties2;