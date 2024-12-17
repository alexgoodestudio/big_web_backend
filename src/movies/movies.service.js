// write service page before controller
//service page will use knex | it will do all heavy lifting and will be where all the heavy lifting is done | remember controller is reception
const knex = require("../db/connection");

// LIST function to select all movies
function list(){
    return knex("movies")
        .select("*")
}

// isShowing function to select only movies that isShowing in movies_theaters are true
function showingList(){
    return knex("movies as m")
        .select("m.*")
        .join("movies_theaters as mt", "m.movie_id", "mt.movie_id")
        .where({"mt.is_showing" : true})
        .groupBy("m.movie_id")
        .orderBy("m.movie_id");
}

// READ function will select a specific id
function read(movieId){
 return knex("movies")
    .select("*")
    .where({"movies.movie_id" : movieId})
    .first()
}

module.exports = {
list,
showingList,
read,
}