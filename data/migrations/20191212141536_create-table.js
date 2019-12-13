
exports.up = function(knex) {
    return knex.schema
    .createTable('recipes', table =>{
        table.increments();
        table
        .string('name', 255)
        .notNullable()
    })
    .createTable('ingredients', table =>{
        table.increments();
        table.integer('ingredient_id').notNullable()
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('recipes')
        .onUpdate('CASCADE')
        .onDelete('RESTRICT');
        table.string('ingredient_name')
    })
    .createTable('steps', table =>{
        table.increments();
        table.integer('recipe_id').notNullable()
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('recipes')
        .onUpdate('CASCADE')
        // .onDelete('RESTRICT');
        table.float('quantity');
        // table.string('ingredient_name', 255)
        // .notNullable()
        // .unsigned()
        // .notNullable()
        // .references('id')
        // .inTable('ingredients')
        // .onUpdate('CASCADE')
        // .onDelete('RESTRICT');
        table.string('instructions', 255).notNullable()
    });
};

exports.down = function(knex) {
    return knex.schema
    .dropTableIfExists('steps')
    .dropTableIfExists('ingredients')
    .dropTableIfExists('recipes');
};
