/**
 * Knex configuration file.
 *
 * You will not need to make changes to this file.
 */

require('dotenv').config();
const path = require("path");

const {
  DATABASE_URL="postgresql://bigweb_user:xDnTqKSBLVt7Qdrv2PD0jxkxCqwSxEVn@dpg-ct7ke73qf0us73dp7t30-a.ohio-postgres.render.com/bigweb?ssl=true",
  DATABASE_URL_DEVELOPMENT="postgresql://bigweb_user:xDnTqKSBLVt7Qdrv2PD0jxkxCqwSxEVn@dpg-ct7ke73qf0us73dp7t30-a.ohio-postgres.render.com/bigweb?ssl=true",
  DATABASE_URL_TEST="postgresql://bigweb_user:xDnTqKSBLVt7Qdrv2PD0jxkxCqwSxEVn@dpg-ct7ke73qf0us73dp7t30-a.ohio-postgres.render.com/bigweb?ssl=true",
  DATABASE_URL_PREVIEW="postgresql://bigweb_user:xDnTqKSBLVt7Qdrv2PD0jxkxCqwSxEVn@dpg-ct7ke73qf0us73dp7t30-a.ohio-postgres.render.com/bigweb?ssl=true",
  DEBUG="true"
} = process.env;

module.exports = {
  development: {
    client: "postgresql",
    pool: { min: 1, max: 5 },
    connection: DATABASE_URL_DEVELOPMENT,
    migrations: {
      directory: path.join(__dirname, "src", "db", "migrations"),
    },
    seeds: {
      directory: path.join(__dirname, "src", "db", "seeds"),
    },
    debug: !!DEBUG,
  },
  test: {
    client: "postgresql",
    pool: { min: 1, max: 5 },
    connection: DATABASE_URL_TEST,
    migrations: {
      directory: path.join(__dirname, "src", "db", "migrations"),
    },
    seeds: {
      directory: path.join(__dirname, "src", "db", "seeds"),
    },
    debug: !!DEBUG,
  },
  preview: {
    client: "postgresql",
    pool: { min: 1, max: 5 },
    connection: DATABASE_URL_PREVIEW,
    migrations: {
      directory: path.join(__dirname, "src", "db", "migrations"),
    },
    seeds: {
      directory: path.join(__dirname, "src", "db", "seeds"),
    },
    debug: !!DEBUG,
  },
  production: {
    client: "postgresql",
    pool: { min: 1, max: 5 },
    connection: DATABASE_URL,
    migrations: {
      directory: path.join(__dirname, "src", "db", "migrations"),
    },
    seeds: {
      directory: path.join(__dirname, "src", "db", "seeds"),
    },
    debug: !!DEBUG,
  },
};
