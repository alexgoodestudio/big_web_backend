exports.up = function(knex) {
    return knex.schema.createTable("estimates", (table) => {
      table.increments("estimate_id").primary();
      table.string("name");
      table.string("email_address");
      table.string("phone_number");
      table.string("address");
      table.string('number_of_beds');
      table.string('number_of_baths');
      table.string('square_footage');
      table.string('additional_info');
      table.boolean('checkbox').defaultTo(false);
      table.timestamps(true, true);
    });
  };
  
  exports.down = function(knex) {
    return knex.schema.hasTable('estimates').then(exists => {
      if (exists) {
        return knex.schema.dropTable('estimates');
      }
    });
  };
  