import React, { Component } from "react";
import API from '../utils/API';
import { Redirect } from "react-router-dom";
import { Container } from "../components/Grid";
import ShoppingListCard from "../components/ShoppingListCard";


class Landing extends Component {
  state = {
    ingredient: "",
    user: [],
    spoonacular: []
  };

  componentDidMount() {
  }

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  searchUserRecipes = (id) => {
    API.findRecipesByUser(id)

      .then(results => {
        this.setState({
          user: results.data
        }, () => console.log(this.state.user.savedRecipes))

      })
      .catch(err => {
        console.log(err)
      })
  }

  render() {
    return (
      <Container fluid>

        <div>
          <ShoppingListCard
            searchUserRecipes={this.searchUserRecipes}
            authenticated={this.props.authenticated}
            card={this.state.user}
          >


          </ShoppingListCard>
        </div>

        {/* Redirect on authentication */}

        {this.props.authenticated ? <Redirect to='/shoppinglist' /> : <div></div>}


      </Container >
    );
  }
}

export default Landing;



  // handleInputChange = event => {
  //   const { name, value } = event.target;
  //   this.setState({
  //     [name]: value
  //   });
  // };

  // searchSpoonacular = () => {
  //   API.getSpoonacularResults(this.state.ingredient, 3)
  //     .then(results => {
  //       this.setState({
  //         spoonacular: results.data.results.map(x => {
  //           return ({
  //             ...x,
  //             selected: false
  //           })
  //         })
  //       }, () => console.log(this.state))
  //     })
  //     .catch(err => {
  //       console.log(err)
  //     })
  // }

  // viewHideInstructions = id => {
  //   this.setState({
  //     spoonacular: this.state.spoonacular.map(x => {
  //       if (x.id === id) {
  //         return ({ ...x, selected: !x.selected })
  //       }
  //       return x
  //     })
  //   })
  // }

  // // get ingredients
  // searchIngredients = (id) => {
  //   API.getSpoonacularIngredients(id)
  //     .then(results => {
  //       this.setState({
  //         spoonacular: this.state.spoonacular.map(x => {
  //           if (x.id === id) {
  //             return ({ ...x, ingredients: results.data })
  //           }
  //           return x
  //         })
  //       }, () => console.log(this.state))

  //     })
  //     .catch(err => {
  //       console.log(err)
  //     })
  // }

  // // get instructions
  // searchInstructions = (id) => {
  //   API.getSpoonacularInstructions(id)
  //     .then(results => {

  //       this.setState({
  //         spoonacular: this.state.spoonacular.map(x => {
  //           if (x.id === id) {
  //             return ({ ...x, instructions: results.data, selected: true })
  //           }
  //           return x
  //         })
  //       }, () => console.log(this.state))

  //     })
  //     .catch(err => {
  //       console.log(err)
  //     })
  // }

//   <div>

//   {
//     this.state.spoonacular.map((card, i) =>

//       <RecipeCardsBasic
//         key={i + "- user"}
//         card={card}
//         searchUserRecipes={this.searchUserRecipes}
//         // viewHideInstructions={this.viewHideInstructions}
//         // viewHideIngregients={this.viewHideIngregients}
//         // searchIngredients={this.searchIngredients}
//         // searchInstructions={this.searchInstructions}
//         // saveUserRecipe={this.saveUserRecipe}
//         authenticated={this.props.authenticated}

//       />)
//   }
// </div> */}

      // {/* <div>
      //     {
      //       this.state.user.map((card, i) =>

      //         <ShoppingListCard
      //           key={i + "- user"}
      //           card={card}
      //           card={this.state.user}
      //           searchUserRecipes={this.searchUserRecipes}
      //           authenticated={this.props.authenticated}
      //         />)
      //     }
      //   </div> */}