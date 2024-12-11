const knex = require("../db/connection")

function list() {
  return knex('subscriber')
    .select("*")
}

function create(newsubscribers) {
  return knex('subscriber')
    .insert(newsubscribers)
    .returning("*")
    .then((data) => data[0]);
}

function read(id) {
  return knex('subscriber')
    .select("*")
    .where({ subscriber_id: id }) 
    .first();
}
function readEmail(email) {
  return knex('subscriber')
    .select("*")
    .where({ email_address: email }) 
    .first();
}

function destroy(id) {
  return knex('subscriber')
    .where({ subscriber_id: id }) 
    .del();
}

module.exports = {
  list,
  create,
  read,
  readEmail,
  destroy,
};