const service = require("./tables.service");
const asyncErrorBoundary = require("../errors/asyncErrorBoundary");
const hasProperties = require("../errors/hasProperties");
const length = require("../errors/length");
const tableExists = require("../errors/tableExists");
const capacity = require("../errors/capacity");
const dataExists = require("../errors/dataExists")
const hasReservationID2 = require("../errors/hasReservationID2");
const tableNotOccupied = require("../errors/tableNotOccupied");
const reservationExist = require("../errors/reservationExists");
const sufficientSeating = require("../errors/sufficientSeating");
const notFound2 = require("../errors/notFound2");
const us4tableNotOccupied = require("../errors/us4tableNotOccupied");
const alreadySeated = require("../errors/alreadySeated");

const requiredProperties = [
    "table_name",
    "capacity",
];
const requiredProperties2 = [
    "reservation_id",
];

async function finished(req, res, next) {
    const data = await service.finish(res.locals.table)
    res.json({
        data
    })
}

async function create(req, res) {
    const data = await service.create(req.body.data)
    res.status(201).json({ data })
}

async function list(req, res, next) {
    const { table_id } = req.query;
    res.status(200).json({
        data: await service.list(table_id),
    });
}

async function read(req, res) {
    const { table_id } = req.params;
    const data = await service.read(table_id);
    res.json({ data });
}

async function update(req, res) {
    const { table_id } = req.params;
    const reservationId = res.locals.reservation_id;
    const data = await service.read(table_id);
    const updatedData = {
        ...data,
        reservation_id: reservationId,
        status: "occupied"
    };

    await service.update(updatedData);
    const updatedReservationStatus = await service.updateReservationStatus(reservationId, "seated");
    res.status(200).json({ data: updatedData });
}

module.exports = {
    create: [
        asyncErrorBoundary(dataExists),
        asyncErrorBoundary(capacity),
        asyncErrorBoundary(hasProperties([...requiredProperties])),
        asyncErrorBoundary(length),
        asyncErrorBoundary(create)
    ],

    list: [

        asyncErrorBoundary(list)
    ],
    read: [
        asyncErrorBoundary(tableExists),
        asyncErrorBoundary(read)
    ],
    update: [
        notFound2,
        asyncErrorBoundary(hasProperties([...requiredProperties2])),
        asyncErrorBoundary(hasReservationID2),
        asyncErrorBoundary(reservationExist),
        asyncErrorBoundary(alreadySeated),
        asyncErrorBoundary(sufficientSeating),
        asyncErrorBoundary(us4tableNotOccupied),
        asyncErrorBoundary(update)
    ],

    destroy: [
        asyncErrorBoundary(tableExists),
        asyncErrorBoundary(tableNotOccupied),
        asyncErrorBoundary(finished),
    ]
};