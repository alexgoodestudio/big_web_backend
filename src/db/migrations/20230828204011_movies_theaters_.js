exports.up = function(knex) {
    return knex.schema.createTable('movies_theaters', function(table) {
      // Primary Key
      table.increments('id').primary();
  
      // Foreign Key referencing movies table
      table.integer('movie_id').unsigned().notNullable();
      table.foreign('movie_id').references('movie_id').inTable('movies').onDelete('cascade');
  
      // Foreign Key referencing theaters table
      table.integer('theater_id').unsigned().notNullable();
      table.foreign('theater_id').references('theater_id').inTable('theaters').onDelete('cascade');
  
      // Boolean to indicate if the movie is currently showing
      table.boolean('is_showing').notNullable();
  
      // Timestamps
      table.timestamps(true, true);
    });
  };
  
  exports.down = function(knex) {
    return knex.schema.dropTable('movies_theaters');
  };
  