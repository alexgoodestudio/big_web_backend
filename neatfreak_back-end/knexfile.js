const path = require("path");
require("dotenv").config();

const DATABASE_URL = process.env.DATABASE_URL;
if (!DATABASE_URL) {
  console.error("DATABASE_URL not set");
  process.exit(1);
}

module.exports = {
  development: {
    client: "postgresql",
    connection: {
      connectionString: DATABASE_URL,
      ssl: {
        rejectUnauthorized: false // You can set this to true if you want a stricter validation
      }
    },
    migrations: {
      directory: path.join(__dirname, 'migrations')
    }
  },
  production: {
    client: "postgresql",
    connection: {
      connectionString: DATABASE_URL,
      ssl: {
        rejectUnauthorized: false // Same for production
      }
    },
    migrations: {
      directory: path.join(__dirname, 'migrations')
    }
  },
};
