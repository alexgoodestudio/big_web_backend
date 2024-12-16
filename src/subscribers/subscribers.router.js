const router = require("express").Router();
const controller = require("./subscribers.controller");
const methodNotAllowed = require("../errors/methodNotAllowed");


router.route("/")
    .get(controller.list)
    .post(controller.create)
    .all(methodNotAllowed);

router.route("/:subscriber_id")
    .get(controller.read)
    .delete(controller.destroy)
    .all(methodNotAllowed);

module.exports = router;
