const knex = require("../db/connection");
const {today} = require("../utils/date-time")
                                    //from utils
function list(date = today()) {
    return knex('reservations')
        .select("*")
        .where({ reservation_date : date })
        .whereNot("status","finished")
        .orderBy("reservation_time", "asc");
    }    

 function create(newReservation) {
    return knex('reservations')
        .insert(newReservation)
        .returning("*")
        .then((data) => data[0]);
    }

function read(reservationId){
    return knex('reservations')
    .select("*")
    .where({ reservation_id: reservationId})
    .first();
}

function search(mobile_number) {
    return knex("reservations")
      .whereRaw(
        "translate(mobile_number, '() -', '') like ?",
        `%${mobile_number.replace(/\D/g, "")}%`
      )
      .orderBy("reservation_date");
  }

  function updateStatus(reservation) {
    return knex('reservations')
      .where({ reservation_id: reservation.reservation_id })
      .update(reservation, "*")
      .then((updatedRecords) => updatedRecords[0]);
  }

  function update(reservation) {
    return knex('reservations')
      .where({ reservation_id: reservation.reservation_id })
      .update(reservation, "*")
      .then((updatedRecords) => updatedRecords[0]);
  }

module.exports = {
    list,
    create,
    read,
    search,
    update,
    updateStatus,
}