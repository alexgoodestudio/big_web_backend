require("dotenv").config();
const express = require("express");
const app = express();
const knex = require("./api/db/connection");
const cors = require('cors');
const subscriberRouter = require("./api/subscribers/subscribers.router");
const chatRouter = require('./api/chat/chat.router')
const estimateRouter = require('./api/estimates/estimates.router')

app.use(cors());
app.use(express.json());

app.use((req, res, next) => {
  if (req.path === '/responses') {
    console.log('Incoming request to /responses with data:', req.body);
    console.log('Received inputData:', req.body.data);
  }
  next();
});

app.use("/estimates", estimateRouter);
app.use("/subscribers", subscriberRouter);
app.use("/responses", chatRouter);


app.use((req, res, next) => {
  next({ status: 404, message: `Not found: ${req.originalUrl}` });
});

app.use((err, req, res, next) => {
  res.status(err.status || 500).json({ error: err.message });
});


const PORT = process.env.PORT || 5001;
knex.migrate.latest()
  .then((migrations) => {
    console.log("migrations", migrations);
    app.listen(PORT, () => {
      console.log(`${PORT}!`);
    });
  })
  .catch((error) => {
    console.error(error);
    knex.destroy();
  });





  