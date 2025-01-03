const path = require("path");

require("dotenv").config({ path: path.join(__dirname, "..", ".env") });

const express = require("express");
const cors = require("cors");

const errorHandler = require("./errors/errorHandler");
const notFound = require("./errors/notFound");
const reservationsRouter = require("./reservations/reservations.router");
const tablesRouter = require("./tables/tables.router");

const subscriberRouter = require("./subscribers/subscribers.router");
const chatRouter = require('./chat/chat.router')
const estimateRouter = require('./estimates/estimates.router')

const moviesRouter = require("./movies/movies.router");
const reviewsRouter = require("./reviews/reviews.router");
const theatersRouter = require("./theaters/theaters.router");


const app = express();

app.use(cors());
app.use(express.json());

app.use("/reservations", reservationsRouter);
app.use("/tables", tablesRouter)

//-----

app.use("/estimates", estimateRouter);
app.use("/subscribers", subscriberRouter);
app.use("/responses", chatRouter);

//-----

app.use("/movies",moviesRouter);
app.use("/reviews",reviewsRouter);
app.use("/theaters",theatersRouter);


app.use(notFound);
app.use(errorHandler);

module.exports = app;
