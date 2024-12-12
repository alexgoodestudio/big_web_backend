const knex = require("../db/connection");

function read(id) {
  return knex('tables')
    .select("*")
    .where({ table_id: id })
    .first()
}

function readReservations(id) {
  return knex('reservations')
    .select("*")
    .where({ reservation_id: id })
    .first()
}

function list() {
  return knex('tables')
    .select("*")
    .orderBy('table_name', 'asc')
}

function update(updatedData) {
  return knex('tables')
    .select("*")
    .where({ table_id: updatedData.table_id })
    .update(updatedData)
}

function updateReservationStatus(reservationId, newStatus) {
  return knex('reservations')
    .where({ reservation_id: reservationId })
    .update({ status: newStatus })
    .catch((error) => {
      throw error;
    });
}

function create(data) {
  if (data.reservation_id) {
    return knex('tables')
      .insert(data)
      .returning('*')
      .then((rows) => rows[0])
      .then((table) => {
      return knex("tables")
        .where({ table_id: table.table_id })
        .update({ status: "occupied"}, "*")
        .then((newRecords) => newRecords[0])
    })
  } else {
    return knex("tables")
      .insert(data)
      .returning("*")
      .then((rows) => rows[0])
  }
}
function finish(table) {
  return knex("tables")
    .where({table_id: table.table_id})
    .update({status: "free", reservation_id: null})
    .then(() => {
      return knex("reservations")
        .where({reservation_id: table.reservation_id})
        .update({status: "finished"});
    });
  }


module.exports = {
  create,
  list,
  update,
  updateReservationStatus,
  read,
  readReservations,
  finish
};