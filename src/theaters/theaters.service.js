const knex = require("../db/connection");

//return all the `theaters` and the movies playing at each theatre
// join theaters, movies_theaters, movies 
function list(){
  return knex("theaters as t")
        .select("*")
        .join("movies_theaters as mt", "t.theater_id","=","mt.theater_id")
        .join("movies as m", "mt.movie_id","=","m.movie_id");
}

// Function lists theaters that are showing specific movie.
// need to join with movies_theaters on theater_id
// where the mt.movie_id =  movieID
function configureList(movieId){
  return knex("theaters as t")
    .select("t.*")
    .join("movies_theaters as mt", "t.theater_id","=","mt.theater_id")
    .where("mt.movie_id", Number(movieId));
}

module.exports = {
    list,
    configureList,
}