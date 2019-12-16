const router = require("express").Router();
var axios = require("axios");
const { Recipes } = require('../../models')
// const booksController = require("../../controllers/booksController");


router.get("/spoonrecipes/:ingredient/:quantity", async (req, res) => {
    try {
        const results = await axios.get("https://api.spoonacular.com/recipes/search?query=" + req.params.ingredient + "&number=" + req.params.quantity + "&apiKey=" + process.env.SPOONACULAR_API);
        if (results.status !== 200)
            throw "Error";

        await results.data.results.map(recipe => {
            Recipes.create({
                spoonRecipeID: recipe.id,
                title: recipe.title,
                cookTime: recipe.readyInMinutes
            })
        })

        res.json(results.data)

    } catch (error) {
        res.sendStatus(404)
    }
})

router.get("/spooninstructions/:id", async (req, res) => {
    try {
        const results = await axios.get("https://api.spoonacular.com/recipes/" + req.params.id + "/analyzedInstructions?&apiKey=" + process.env.SPOONACULAR_API);
        if (results.status !== 200)
            throw "Error";

        await results.data.results.steps[0].map(instructions => {
            Instructions.create({
                spoonRecipeID: "req.params.id",
                stepNum: instructions.number,
                name: instructions.step
            })
        })
        
        res.json(results.data)

    } catch (error) {
        res.sendStatus(404)
    }
})


router.get("/spooningredients/:id", async (req, res) => {
    try {
        const results = await axios.get("https://api.spoonacular.com/recipes/" + req.params.id + "+/information?includeNutrition=false&apiKey=" + spoonacularKey);
        if (results.status !== 200)
            throw "Error";
        
            
        await results.data.results.steps[0].map(instructions => {
            Instructions.create({
                spoonRecipeID: "req.params.id",
                stepNum: instructions.number,
                name: instructions.step
            })
        })


        res.json(results.data)
    } catch (error) {
        res.sendStatus(404)
    }
})


// Test script
async function Test() {
    try {
        const results = await axios.get("https://api.spoonacular.com/recipes/search?query=chicken&number=4&apiKey=7d70116487034719ac07022ddfc69967");
        if (results.status !== 200)
            throw "Error";

        console.log(results.data, results.status)
    } catch (error) {
        console.log(error)
    }
}

// Test script
async function Test2() {
    try {
        const results = await axios.get("https://api.spoonacular.com/recipes/485365/analyzedInstructions?&apiKey=7d70116487034719ac07022ddfc69967");
        if (results.status !== 200)
            throw "Error";

        const object = results.data[0].steps

        for (i = 0; i < object.length; i++) {
            console.log(i + ". " + object[i].step)
        }

    } catch (error) {
        console.log(error)
    }
}

// Test script
async function Test3() {
    try {
        const results = await axios.get("https://api.spoonacular.com/recipes/716429/information?includeNutrition=false&apiKey=7d70116487034719ac07022ddfc69967");
        if (results.status !== 200)
            throw "Error";


        const object = results.data.extendedIngredients

        for (i = 0; i < object.length; i++) {
            console.log(i + 1 + ". " + object[i].amount)
            console.log(i + 1 + ". " + object[i].unit)
            console.log(i + 1 + ". " + object[i].name)
        }

        // console.log(results.data)
    } catch (error) {
        console.log(error)
    }
}

// Test();
// Test2();
// Test3();

module.exports = router;


