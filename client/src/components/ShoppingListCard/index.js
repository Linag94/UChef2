import React from "react";
import "./style.css";

function ShoppingListCard(props) {
    const { card, searchIngredients, searchInstructions, viewHideInstructions, saveUserRecipe, authenticated } = props;
    return (

<div class="card" style={{width: `50rem`}}>
  <div class="card-body">
    <h3 class="card-title">Shopping List</h3>
    <hr></hr>
    <p class="card-text">

        <ul className="shoppinglist-list">
            {/* Entry point for ingredient items to be searched in database */}
            <li>Item 1 <a href="#" class="card-link">X</a></li>    
            <li>Item 2<a href="#" class="card-link">X</a></li>   
            <li>Item 3<a href="#" class="card-link">X</a></li>
            <li>Item 4<a href="#" class="card-link">X</a></li>
        </ul>
    </p>

  </div>
</div>



    );
}


export default ShoppingListCard;