const knex = require("../db/connection");


async function readCriticInformation(critic_id){
  return knex("critics")
    .where({critic_id})
    .first()
} 

async function addCritic(review){
  review.critic = await readCriticInformation(review.critic_id)
  return review
} 

//need to join reviews and critics on critic_id
function list(movie_id) {
  return knex("reviews")
    .where({movie_id})
    .then((reviews) => Promise.all(reviews.map(addCritic)) )
}

//read function to read all reviews for a specific movie
function read(reviewId){
return knex("reviews")
  .select("*")
  .where({review_id: reviewId})
  .first()
}

//needs updatedReview prop passed to it
function update(reviewData) {
  return knex("reviews")
    .where({review_id: reviewData.review_id})
    .update(reviewData, "*")
    .then(() => read(reviewData.review_id))
    .then(addCritic);
}

function destroy(reviewId) {
    return knex("reviews").where({review_id: reviewId }).del();
}
  
module.exports={
    list,
    read,
    update,
    destroy,
}

