const service = require("../tables/tables.service")

async function sufficientSeating(req,res,next){
    const {table_id} = req.params
    const table = await service.read(table_id)
    const reservation= res.locals.reservation

    if(reservation.people > table.capacity){
        return next({
            message: "reservation is higher than capacity",
            status: 400,
        });
    }
    next()
}

module.exports = sufficientSeating;