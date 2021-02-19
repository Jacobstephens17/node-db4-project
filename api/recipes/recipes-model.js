const db = require("../../data/db-config");


const getRecipes = () => {
return db("recipes");
}

const getShoppingList = (id) => {
return db("ingredients as i")
    .join("step_ingredients as si", "i.ingredient_id", "si.ingredient_id")
    .join("steps as s", "si.step_id", "s.step_id")
    .select("i.ingredient_name", "si.ingredient_quantity")
    .where("s.recipe_id", id);
}

const getInstructions = (id) => {
return db("steps")
    .select("step_text", "step_order")
    .where("recipe_id", id)
    .orderBy("step_order");
  }


module.exports = {
    getRecipes, 
    getShoppingList,
    getInstructions
}