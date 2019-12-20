
exports.up = function(knex) {
  return knex.schema.createTableIfNotExists("users", function(table) {
      table.increments()
      table.string('username')
  })
};

exports.down = function(knex) {
    return knex.schema.dropTable("users")
};
