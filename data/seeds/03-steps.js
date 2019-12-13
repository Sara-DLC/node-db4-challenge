
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('steps').del()
    .then(function () {
      // Inserts seed entries
      return knex('steps').insert([
        {id: 1, recipe_id: 3, quantity: '6 oz', steps: 'sear for 10 min'},


        {id: 2, recipe_id: 2, quantity: '7 oz', steps: 'sear for 5 min'},

        {id: 3, recipe_id: 1, quantity: '3 oz',  steps: 'sear for 20 min'},

      ]);
    });
};
