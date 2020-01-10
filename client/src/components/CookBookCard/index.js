import React from "react";
import "./style.css";

function CookBookCard(props) {
  const { card, searchUserRecipes, authenticated } = props;
  return (

    <div class="card" style={{ width: `50rem` }}>
      <div class="card-body">
        <h5 class="card-title">Recipes</h5>
        <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>
        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        <a href="#" class="card-link">Button Here</a>
        <a href="#" class="card-link">Button There</a>

        { searchUserRecipes(authenticated._id)}
        {/* <button onClick={() => searchUserRecipes(authenticated._id)}>Display</button> */}
        <div className="summaryCards ">

          {card.savedRecipes ? (<>
            <ol>

              {
                card.savedRecipes.map((res, i) => {
                  return <li key={i + '-ins'}>{res[0].name}</li>
                })
              }
            </ol>
          </>)
            : (
              <p>Need to login first</p>
            )}
        </div>
      </div>
    </div>
  );
}


export default CookBookCard;