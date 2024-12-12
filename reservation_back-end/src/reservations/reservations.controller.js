const service = require("./reservations.service");
const asyncErrorBoundary = require("../errors/asyncErrorBoundary");
const hasProperties = require("../errors/hasProperties");
const pastDate = require("../errors/pastDate");
const hasEnoughPeople = require("../errors/hasEnoughPeople");
const validateDateAndTime = require("../errors/validateDateAndTime");
const tuesdayValidation = require("../errors/tuesdayValidation");
const reservationExists = require("../errors/reservationExists");
const reservationExists2 = require("../errors/reservationExists2");
const hasProperties2 = require("../errors/hasProperties2");
const reservationFinished = require("../errors/reservationFinished");
const hasReservationID2 = require("../errors/hasReservationID2");
const reservationStatusErrors = require("../errors/reservationStatusErrors");
const booked = require("../errors/booked");
const cancelReservation = require("../errors/cancelReservation");
const notNumber = require("../errors/notNumber");

const requiredProperties = [
  "first_name",
  "last_name",
  "mobile_number",
  "reservation_date",
  "reservation_time",
  "people",
];

const statusProperties = ["booked", "seated", "finished", "cancelled"];

async function read(req, res) {
  const reservationId = res.locals.reservation_id;
  const readReservationID = await service.read(reservationId);
  res.status(200).json({
    data: readReservationID,
  });
}

async function update(req, res) {
  const { reservation_id } = req.params;
  const existingData = await service.read(reservation_id);
  const {
    status,
    first_name,
    last_name,
    mobile_number,
    people,
    reservation_date,
    reservation_time,
  } = req.body.data;

  const updatedData = {
    ...existingData,
    status,
    first_name,
    last_name,
    mobile_number,
    people,
    reservation_date,
    reservation_time,
  };
  await service.update(updatedData);
  res.status(200).json({ data: updatedData });
}

async function list(req, res) {
  const mobile_number = req.query.mobile_number;
  const data = await (mobile_number
    ? service.search(mobile_number)
    : service.list(req.query.date));
  res.json({
    data,
  });
}

async function create(req, res) {
  const data = await service.create(req.body.data);
  res.status(201).json({ data });
}

async function updateReservationStatus(req, res) {
  const reservationId = req.params.reservation_id;
  const data = await service.read(reservationId);
  const updatedObject = {
    ...data,
    reservation_id: reservationId,
    status: req.body.data.status,
  };
  const data2 = await service.updateStatus(updatedObject);
  res.status(200).json({
    data: data2,
  });
}

module.exports = {
  list: [asyncErrorBoundary(list)],
  create: [
    hasProperties([...requiredProperties]),
    tuesdayValidation,
    hasEnoughPeople,
    pastDate,
    booked,
    reservationStatusErrors,
    validateDateAndTime,
    notNumber,
    asyncErrorBoundary(create),
  ],

  update: [
    hasProperties([...requiredProperties]),
    asyncErrorBoundary(reservationExists2),
    tuesdayValidation,
    hasEnoughPeople,
    pastDate,
    validateDateAndTime,
    notNumber,
    asyncErrorBoundary(update),
  ],

  updateReservationStatus: [
    asyncErrorBoundary(reservationExists2),
    asyncErrorBoundary(hasProperties2([...statusProperties])),
    cancelReservation,
    reservationFinished,
    asyncErrorBoundary(updateReservationStatus),
  ],

  read: [
    asyncErrorBoundary(hasReservationID2),
    asyncErrorBoundary(reservationExists),
    asyncErrorBoundary(read),
  ],
};
