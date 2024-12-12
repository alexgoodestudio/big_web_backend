/**
 * You will not need to make changes to this file.
 */
const environment = process.env.NODE_ENV || "development";
const config = require("../../knexfile")[environment];
const knex = require("knex")(config);

module.exports = knex;
