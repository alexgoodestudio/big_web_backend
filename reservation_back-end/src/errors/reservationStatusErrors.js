function reservationStatusErrors(req, res, next){
    const status = req.body.data.status;
if(status === 'seated' || status === 'finished'){
    return next({
        status:400,
        message:"cannot be seated or finished"
    })
}
next()
}
module.exports= reservationStatusErrors