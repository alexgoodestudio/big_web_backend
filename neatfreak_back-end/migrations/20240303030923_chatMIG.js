exports.up = function(knex) {
    return knex.schema
      .dropTableIfExists('chatbot')
      .createTable('chatbot', function(table) {
        table.increments('chat_id').primary();
        table.string('service_type').nullable();
        table.text('responses').nullable(); 
        table.timestamps(true, true);
        table.text('keywords').nullable(); 
      });
  };
  
  exports.down = function(knex) {
    return knex.schema.dropTable('chatbot');
  };
  