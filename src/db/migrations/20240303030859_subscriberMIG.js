exports.up = function(knex) {
    return knex.schema.createTable("subscriber", (table) => {
      table.increments("subscriber_id").primary();
      table.string("name");
      table.string("email_address");
      table.timestamps(true, true);
      table.string("found_type").nullable(); 
    });
  };
  
  exports.down = function(knex) {
    return knex.schema.hasTable('subscriber').then(exists => {
      if (exists) {
        return knex.schema.dropTable('subscriber');
      }
    });
  };