const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const recipesSchema = new Schema({
  spoonRecipeID: { type: String, required: true },
  title: { type: String, required: true },
  cookTime: { type: String, required: true },
  date: { type: Date, default: Date.now }
});

const Recipes = mongoose.model("Recipe", recipesSchema);

module.exports = Recipes;
