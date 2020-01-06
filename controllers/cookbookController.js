const db = require("../models");

// Defining methods for the cookbookController
module.exports = {
    findById: function(req, res) {
      function mapPromises(savedRecipes) {
        return Promise.all (
          savedRecipes.map(async spoonId => {
            const recipePromises = [
              db.Recipes.find({spoonRecipeID: spoonId}),
              db.Ingredients.find({spoonRecipeID: spoonId}), 
              db.Instructions.find({spoonRecipeID: spoonId})
              ];
         return Promise.all (recipePromises) 
           
            // .then(recipeArry => recipeArry)
          })
        )
      }
      console.log(req.params);
      db.User
        .findById(req.params.id)
         .then(dbModel =>{
             mapPromises (dbModel.savedRecipes)
                .then(data =>{
                  res.json(data)
                  console.log(JSON.stringify({obj: data}, null, 2))
                  }
                  )
        
        
        })
        .catch(err => res.status(422).json(err));
    }
  };
  