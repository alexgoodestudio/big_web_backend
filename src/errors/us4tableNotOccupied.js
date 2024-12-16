const service = require("../tables/tables.service")

async function us4tableNotOccupied(req, res, next){
    const {table_id} = req.params
    const data = await service.read(table_id)

    if(data.status !== "free"){
       return next({
            message: "occupied",
            status: 400,
        });
    }
    next()
}

module.exports= us4tableNotOccupied;