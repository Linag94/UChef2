import React from "react";
import "./style.css";

function RecipeCard({ props }) {
    return (
      <div
        className="jumbotron" id="landing-jumbo"
      >
        {props.children}
      </div>
    );
  }

export default RecipeCard;