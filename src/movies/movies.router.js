const router = require("express").Router();
const controller = require("./movies.controller");
const methodNotAllowed = require("../errors/methodNotAllowed");
const theatersController = require("../theaters/theaters.controller");
const reviewsController = require("../reviews/reviews.controller");


router.route("/")
    .get(controller.list)
    .all(methodNotAllowed);

router.route("/:movieId")
    .get(controller.read)
    .all(methodNotAllowed);

router.route("/:movieId/theaters")
    .get(theatersController.list)
    .all(methodNotAllowed);

router.route("/:movieId/reviews")
    .get(reviewsController.list)
    .all(methodNotAllowed);


module.exports = router;