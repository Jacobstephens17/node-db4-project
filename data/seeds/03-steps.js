exports.seed = function(knex) {
  return knex("steps").insert([
    {step_text: "Boil Noodles",step_order: 1,recipe_id: 1},
    {step_text: "Drain Noodles",step_order: 2,recipe_id: 1},
    {step_text: "Add Sauce",step_order: 3,recipe_id: 1},
    {step_text: "Add Seasoning",step_order: 4,recipe_id: 1},
    {step_text: "Mix it up and enjoy!",step_order: 5,recipe_id: 1},
    {step_text: "Make Burger Patty",step_order: 1,recipe_id: 2},
    {step_text: "Cook until desired result achieved",step_order: 2,recipe_id: 2},
    {step_text: "Place on bun with cheese then enjoy your dry ass burger!",step_order: 3,recipe_id: 2},
    {step_text: "Chop up lettuce",step_order: 1,recipe_id: 3},
    {step_text: "Put in bowl and toss with dressing",step_order: 2,recipe_id: 3},
    {step_text: "Enjoy!",step_order: 3,recipe_id: 3},
  ]);
}
