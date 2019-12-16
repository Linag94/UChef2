const router = require("express").Router();
// const bookRoutes = require("./books");
const userRoutes = require("./user");
const recipeRoutes = require("./recipes");
const ingredientsRoutes = require("./ingredients");
const instructionsRoutes = require("./instructions");
const spoonRoutes = require("./spoonacular");

// // /api/book routes
// router.use("/books", bookRoutes);

// /api/user routes
router.use("/user", userRoutes);

// /api/recipe routes
router.use("/recipes", recipeRoutes);

// /api/ingredients routes
router.use("/ingredients", ingredientsRoutes);

// /api/instructions routes
router.use("/instructions", instructionsRoutes);

// // /api/spoonacular routes
 router.use("/spoonacular", spoonRoutes);

module.exports = router;
