const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// recipes
const recipesSchema = new Schema({
  spoonRecipeID: { type: String, required: true, unique: true },
  title: { type: String, required: true },
  cookTime: { type: String, required: true },
  imgURL: { type: String, required: true },
  date: { type: Date, default: Date.now }
});

// instructions
const instructionsSchema = new Schema({
    spoonRecipeID: { type: String, required: true },
    stepNum: { type: String, required: true },
    name: { type: String, required: true },
    date: { type: Date, default: Date.now }
  });
  

//   indgredients
const ingredientsSchema = new Schema({
    spoonRecipeID: { type: String, required: true },
    ingredientID: { type: String, required: true },
    amount: { type: String, required: true },
    unit: { type: String, required: true },
    name: { type: String, required: true },
    date: { type: Date, default: Date.now }
  });

  const Cookbook = mongoose.model("Cookbook", ingredientsSchema, instructionsSchema, recipesSchema);

module.exports = Cookbook;