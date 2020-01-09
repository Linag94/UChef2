import React, { Component } from "react";
import API from '../utils/API';
import { Redirect } from "react-router-dom";
import { Container } from "../components/Grid";
import ShoppingListCard from "../components/ShoppingListCard";
import ResultsCard from "../components/ResultsCard";


class Landing extends Component {
  state = {
    ingredients: [],
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  getIngredients = (id) => {
    API.getSpoonacularIngredients(id)
      .then(results => {
        // console.log(results)
        this.setState({
          ingredients: results.data
        }, () => console.log(this.state.ingredients))

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
            recipes={this.props.authenticated.savedRecipes}
            getIngredients={this.getIngredients}
          >
          </ShoppingListCard>
        </div>

        <div>
          <ResultsCard
            ingredients={this.state.ingredients}
          >
          </ResultsCard>
        </div>

        {/* Redirect on authentication */}

        {this.props.authenticated ? <Redirect to='/shoppinglist' /> : <div></div>}


      </Container >
    );
  }
}

export default Landing;



  // searchUserRecipes = (id) => {
  //   API.findRecipesByUser(id)
  //     .then(results => {
  //       this.setState({
  //         user: results.data
  //       }, ()=>console.log(this.state.user))

  //     })
  //     .catch(err => {
  //       console.log(err)
  //     })
  // }

  // getIngredients(id){
  //   console.log(id)
  //   API.findRecipeById(id)
  //   .then(results => {
  //     this.setState({
  //       spoonacular: results.data
  //     }, console.log(results) )

  //   })
  //   .catch(err => {
  //     console.log(err)
  //   })
  // }
