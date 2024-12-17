//write service file first
const service = require("./movies.service.js");
const asyncErrorBoundary = require("../errors/asyncErrorBoundary");

//list will have two puropse:
  //- it will either display all movies
  //- it will display only movies where query param is true
  
async function list(req,res){
  const {is_showing} = req.query;
  if(is_showing){
    res.json({ data: await service.showingList() })
  }else{
    res.json({ data: await service.list(req.params.movieId) })
  }
}

//read validator
async function movieExists(req, res, next){
  const {movieId} = req.params;
  const movieData = await service.read(movieId);
  if(movieData){
    res.locals.movie = movieData;
    return next();
  }
    next({
      status: 404,
      message: "Movie cannot be found."});
    }

async function read(req, res){
  res.status(200).json({data: res.locals.movie});
}

module.exports = {
    list:[asyncErrorBoundary(list)],
    read:[asyncErrorBoundary(movieExists),asyncErrorBoundary(read)]
};