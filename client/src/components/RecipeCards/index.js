import React from "react";
import "./style.css";

function RecipeCard(props) {
    const { card, searchIngredients, searchInstructions, viewHideInstructions } = props;
    return (

        <div className="card" >

            {card.selected ? (<>
                <h3>{card.title}</h3>
                <ol>

                    {
                        card.instructions && card.instructions.map((ins, i) => {
                            return <li key={i + '-ins'}>{ins.step}</li>
                        })
                    }
                </ol>

                <button onClick={() => viewHideInstructions(card.id)}>Hide</button>
            </>)
                : (
                    <>

                        <div className="img-container">
                            <img alt={card.title} src={"https://spoonacular.com/recipeImages/" + card.image} />
                        </div>

                        <h3>{card.title}</h3>

                        <div className="time">
                            <i className="far fa-clock"></i>
                            <p>{card.readyInMinutes} mins</p>
                        </div>

                        <div className="servings">
                            <i id="clock" className="far fa-user"></i>
                            <p>Serves {card.servings}</p>
                        </div>

                        <ol>

                            {
                                card.ingredients && card.ingredients.map((ins, i) => {
                                    return <li key={i + '-ins'}>{ins.name}</li>
                                })
                            }
                        </ol>
                    </>
                )}

            <button className="Ingredientsbtn" onClick={() => searchIngredients(card.id)}> View Ingredients </button>
            <button className="Instructionsbtn" onClick={() => searchInstructions(card.id)}> View Instructions </button>

            {/* <div id="save-recipe"> Save to cookbook </div> */}

        </div>

    );
}


export default RecipeCard;


// RecipeCard.defaultProps = {
//     card: {
//         id: "1",
//         title: "Chicken Noodle soup",
//         instructions: [],
//         image: "#",
//         selected: false
//     },
//     searchInstructions: function () { },
//     viewHideInstructions: function () { }
// }