import React, { Component } from "react";
import API from '../utils/API';
import { Redirect } from "react-router-dom";
import { Container } from "../components/Grid";
import MainJumbotron from "../components/MainJumbotron";
import RecipeCard from "../components/RecipeCards";
import ShoppingListCard from "../components/ShoppingListCard";


class Landing extends Component {
  state = {
    ingredient: "",
    spoonacular: [],
    weather: []
  };

  componentDidMount() {
  }

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  searchSpoonacular = () => {
    API.getSpoonacularResults(this.state.ingredient, 3)
      .then(results => {
        this.setState({
          spoonacular: results.data.results.map(x => {
            return ({
              ...x,
              selected: false
            })
          })
        }, () => console.log(this.state))
      })
      .catch(err => {
        console.log(err)
      })
  }

  viewHideInstructions = id => {
    this.setState({
      spoonacular: this.state.spoonacular.map(x => {
        if (x.id === id) {
          return ({ ...x, selected: !x.selected })
        }
        return x
      })
    })
  }

  // get ingredients
  searchIngredients = (id) => {
    API.getSpoonacularIngredients(id)
      .then(results => {
        this.setState({
          spoonacular: this.state.spoonacular.map(x => {
            if (x.id === id) {
              return ({ ...x, ingredients: results.data })
            }
            return x
          })
        }, () => console.log(this.state))

      })
      .catch(err => {
        console.log(err)
      })
  }

  // get instructions
  searchInstructions = (id) => {
    API.getSpoonacularInstructions(id)
      .then(results => {

        this.setState({
          spoonacular: this.state.spoonacular.map(x => {
            if (x.id === id) {
              return ({ ...x, instructions: results.data, selected: true })
            }
            return x
          })
        }, () => console.log(this.state))

      })
      .catch(err => {
        console.log(err)
      })
  }

  render() {
    return (
      <Container fluid>

        {/* Include a header for Shopping List */}
        <div className="shopping-header">

        </div>


        <ShoppingListCard>

          <h1>Shopping List  
            <i className="fas fa-columns"></i>
            <i className="far fa-lightbulb"></i>
            <i className="fas fa-carrot"></i>
            <i className="fas fa-leaf"></i>
          </h1>

        </ShoppingListCard>



        {/* Redirect on authentication */}
        {this.props.authenticated ? <Redirect to='/dashboard' /> : <div></div>}

      </Container>
    );
  }
}

export default Landing;

