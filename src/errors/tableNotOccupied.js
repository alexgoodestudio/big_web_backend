async function tableNotOccupied(req, res, next){
    if(res.locals.table !== undefined){
        if( res.locals.table.status !== "occupied"){
            return next({
                message: "not occupied",
                status: 400,
            });
        }
    }
    next()

}

module.exports = tableNotOccupied;