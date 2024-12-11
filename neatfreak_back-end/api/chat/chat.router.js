const router = require("express").Router();
const controller = require("./chat.controller");
const methodNotAllowed = require("../errors/methodNotAllowed");

router.route("/") 
    .post(controller.listResponse)
    .all(methodNotAllowed);

module.exports = router;


