function reservationFinished(req, res, next) {
    const { status } = res.locals.reservation
    // console.log(status,"from reservationFinished Function")
    if (status === "finished") {
        return next({
            status: 400,
            message: "finished"
        })
    }
    next();
}

module.exports = reservationFinished;