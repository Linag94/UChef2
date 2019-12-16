const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const instructionsSchema = new Schema({
  spoonRecipeID: { type: String, required: true },
  stepNum: { type: String, required: true },
  name: { type: String, required: true },
  date: { type: Date, default: Date.now }
});

const Instructions = mongoose.model("Instruction", instructionsSchema);

module.exports = Instructions;