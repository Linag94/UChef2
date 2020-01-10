import React from "react";
import "./style.css";

function CookBookCard({ recipes, getInstructions }) {
  return (

    <div class="displaycard">
      <div class="card-body">
        <h2 class="card-title">Saved Recipes</h2>
        <p class="card-title">Click on a recipe below to view the cookbook instructions</p>
        <div className="summaryCards ">
          <ol>

            {
              recipes.map((res, i) => {
                return (
                  <div key={i + '-ins'} className="cardHolder" onClick={() => getInstructions(res[0].recipeID)}>
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

CookBookCard.defaultProps = {
  recipes: [],
  getInstructions: function(){}
}


export default CookBookCard;