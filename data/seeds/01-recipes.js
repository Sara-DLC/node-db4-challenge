
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('recipes').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('recipes').insert([
        {id: 1, name: 'Lasagna'},
        {id: 2, name: 'Enchiladas'},
        {id: 3, name: 'Steak'}
      ]);
    });
};
