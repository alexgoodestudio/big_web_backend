function reservationStatusCorrect(req, res, next) { 
      const {status} =req.body.data
      if(!statusProperties.includes(status)){
        return next({
            status:400,
            message:"unknown"
        })
      }
        next();
}

module.exports=reservationStatusCorrect