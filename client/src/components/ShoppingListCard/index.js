import React from "react";
import "./style.css";

function ShoppingListCard({ recipes, getIngredients }) {
  return (

    <div class="displaycard">
      <div class="card-body">
        <h2 class="card-title">Saved Recipes</h2>
        <p class="card-title">Click on a recipe below to view the required ingredients</p>
        <div className="summaryCards ">
          <ol>

            {
              recipes.map((res, i) => {
                return (
                  <div key={i + '-ins'} className="cardHolder" onClick={() => getIngredients(res[0].recipeID)}>
                    <img className="smallCard" src={"https://spoonacular.com/recipeImages/" + res[0].image} alt="" />
                    <h4>{res[0].name}</h4>
                  </div>)
              })
            }
          </ol>
        </div>
      </div>
    </div>

  );
}

ShoppingListCard.defaultProps = {
  recipes: [],
  getIngredients: function(){}
}


export default ShoppingListCard;