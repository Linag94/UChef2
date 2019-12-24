const router = require("express").Router();
var axios = require("axios");
const { Instructions, Ingredients, Recipes, User } = require('../../models')


router.get("/spoonrecipes/:ingredient/:quantity", async (req, res) => {
    console.log("Spoonacular api route")
    try {
        const results = await axios.get("https://api.spoonacular.com/recipes/search?query=" + req.params.ingredient + "&number=" + req.params.quantity + "&apiKey=" + process.env.SPOONACULAR_API);
        if (results.status !== 200)
            throw "Error";

        await results.data.results.map(recipe => {
            Recipes.create({
                spoonRecipeID: recipe.id,
                title: recipe.title,
                cookTime: recipe.readyInMinutes,
                imgURL: "https://spoonacular.com/recipeImages/" + recipe.image
            })
        })

        res.json(results.data)

    } catch (error) {
        res.sendStatus(error)
    }
})

router.get("/spooninstructions/:id", async (req, res) => {
    try {
        const results = await axios.get("https://api.spoonacular.com/recipes/" + req.params.id + "/analyzedInstructions?&apiKey=" + process.env.SPOONACULAR_API);
        if (results.status !== 200)
            throw "Error";

        await results.data[0].steps.map(instructions => {
            Instructions.create({
                spoonRecipeID: req.params.id,
                stepNum: instructions.number,
                name: instructions.step
            })
        })


        res.json(results.data[0].steps)

    } catch (error) {
        res.sendStatus(error)
    }
})


router.get("/spooningredients/:id", async (req, res) => {
    try {
        const results = await axios.get("https://api.spoonacular.com/recipes/"+ req.params.id +"/information?includeNutrition=false&apiKey=" + process.env.SPOONACULAR_API);
        if (results.status !== 200)
            throw "Error";

        await results.data.extendedIngredients.map(ingredients => {
            Ingredients.create({
                spoonRecipeID: req.params.id,
                ingredientID: ingredients.id,
                amount: ingredients.measures.us.amount,
                unit: ingredients.measures.us.unitShort,
                name: ingredients.name
            })
        })

        res.json(results.data.extendedIngredients)

    } catch (error) {
        res.sendStatus(404)
    }
})


module.exports = router;