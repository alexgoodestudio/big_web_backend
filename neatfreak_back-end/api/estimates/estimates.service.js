const knex = require("../db/connection")

function read(id){
    return knex('estimates')
    .select("*")
    .where({estimate_id : id})
}

function list(){
    return knex('estimates')
    .select("*")
}
function create(newEstimate){
    return knex('estimates')
        .insert(newEstimate)
        .returning("*")
        .then((data) => data[0])
} 

async function update(estimate) {
    console.log("UPDATE SERVICE FUNCTION", estimate)
  return knex('estimates')
      .where({ estimate_id : estimate.estimate_id })
      .update( estimate)
      .then((updatedRecords) => updatedRecords[0])     
}
  


function destroy(id) {
    return knex('estimates')
      .where({ estimate_id: id }) 
      .del();
  }

module.exports ={
    read,
    list,
    create,
    update,
    destroy
}