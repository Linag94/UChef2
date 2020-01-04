const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ingredientsSchema = new Schema({
  spoonRecipeID: { type: String, required: true, unique: true },
  ingredientID: { type: String, required: true },
  amount: { type: String, required: true },
  unit: { type: String, required: true },
  name: { type: String, required: true },
  date: { type: Date, default: Date.now }
});

const Ingredients = mongoose.model("Ingredients", ingredientsSchema);

module.exports = Ingredients;