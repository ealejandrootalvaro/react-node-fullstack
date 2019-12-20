
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {id: 1, username: 'prueba1'},
        {id: 2, username: 'prueba2'},
        {id: 3, username: 'prueba3'}
      ]);
    });
};
