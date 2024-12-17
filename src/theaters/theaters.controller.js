const service = require("./theaters.service");
const asyncErrorBoundary = require("../errors/asyncErrorBoundary");
const reduceProperties = require("../utils/reduce-properties")

const reduceToSingleProperty = {
    movie_id: ["movies", null, "movie_id"],
    title: ["movies", null, "title"],
    runtime_in_minutes: ["movies", null, "runtime_in_minutes"],
    rating: ["movies", null, "rating"],
    description: ["movies", null, "description"],
    image_url: ["movies", null, "image_url"],
    created_at: ["movies", null, "created_at"],
    updated_at: ["movies", null, "updated_at"],
    is_showing: ["movies", null, "is_showing"],
}

async function list(req, res) {
    const movieId = req.params.movieId;
    if (movieId) {
        const data = await service.configureList(movieId);
        res.json({ data: data })
    } else {
        let data = await service.list();
        const reducer = reduceProperties("theater_id", reduceToSingleProperty)
        data = reducer(data)
        res.json({ data: data })
    }
}

module.exports = {
    list: asyncErrorBoundary(list),
}