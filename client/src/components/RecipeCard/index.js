import React from "react";
import "./style.css";

function RecipeCard(body, image) {
    return (
  
      <nav className="card">
        <img class="card-img-top" src={image} alt="Card image cap"/>
            <div class="card-body">
                {body}
            </div>
      </nav>
    );
  }


export default RecipeCard;