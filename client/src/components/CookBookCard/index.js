import React from "react";
import "./style.css";

function CookBookCard(props) {
  const { card, searchUserRecipes, authenticated } = props;
  return (

    <div class="card" style={{ width: `50rem` }}>
      <div class="card-body">
        <h5 class="card-title">Recipes</h5>
        <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>
        

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
              <p></p>
            )}
        </div>
      </div>
    </div>
  );
}


export default CookBookCard;