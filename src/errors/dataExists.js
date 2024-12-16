function dataExists(req,res,next){
if(!req.body.data){
    return next({
      status:400,
      message:"Data must exist"
    })
  }
  next();
}
  module.exports= dataExists