exports.seed = function (knex) {
      return knex("ingredients").insert([
        { ingredient_name: "Noodles" },
        { ingredient_name: "Marinara Sauce" },
        { ingredient_name: "Seasoning" },
        { ingredient_name: "Beef" },
        { ingredient_name: "Bun" },
        { ingredient_name: "Cheese" },
        { ingredient_name: "Lettuce" },
        { ingredient_name: "Dressing" },
      ]);
};