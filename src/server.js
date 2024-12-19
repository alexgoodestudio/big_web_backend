const { PORT = 5001 } = process.env; // Default to 5001 if no PORT is set in the environment

const app = require("./app");
const knex = require("./db/connection");

knex.migrate
  .latest()
  .then((migrations) => {
    console.log("migrations", migrations);

    // Ensure app listens on the dynamically assigned port
    app.listen(PORT, listener);
  })
  .catch((error) => {
    console.error("Migration error:", error);
    knex.destroy(); // Clean up knex connection in case of errors
  });

function listener() {
  console.log(`Server is listening on port ${PORT}!`);
}
