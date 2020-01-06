import React from "react";
import "./style.css";

function ShoppingListCard(props) {
    const { card, searchIngredients, searchInstructions, viewHideInstructions, saveUserRecipe, authenticated } = props;
    return (

<div class="card" style={{width: `50rem`}}>
  <div class="card-body">
    <h5 class="card-title">Shopping List</h5>
    <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="card-link">Button Here</a>
    <a href="#" class="card-link">Button There</a>
  </div>
</div>



    );
}


export default ShoppingListCard;