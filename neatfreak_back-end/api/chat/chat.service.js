const knex = require("../db/connection");

function listResponse(responseId) { 
  return knex('chatbot')
    .select('*')
    .where({ chat_id: responseId }) 
    .first();
}

module.exports = {
  listResponse,
};
