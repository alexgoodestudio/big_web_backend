const router = require("express").Router();
const controller = require("./reservations.controller");
const methodNotAllowed = require("../errors/methodNotAllowed");

router
    .route("/:reservation_id/status")
    .get(controller.read)  
    .put(controller.updateReservationStatus)
    .all(methodNotAllowed);

router
    .route("/:reservation_id")
    .get(controller.read)  
    .put(controller.update)
    .all(methodNotAllowed);

router
    .route("/")
    .get(controller.list)
    .post(controller.create)
    .all(methodNotAllowed);

module.exports = router;