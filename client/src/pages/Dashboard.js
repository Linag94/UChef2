import React, { Component } from "react";
import API from '../utils/API';
import { Redirect } from "react-router-dom";
import { Container } from "../components/Grid";
import MainJumbotron from "../components/MainJumbotron";
import RecipeCard from "../components/RecipeCards";
import SearchHeader from "../components/SearchHeader"


class Landing extends Component {
  state = {
    ingredient: "",
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

  searchSpoonacular = () => {
    API.getSpoonacularResults(this.state.ingredient, 6)
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

  viewHideIngregients = id => {
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

  
  // save recipe for user
  saveUserRecipe = (id, recipeID, name, image) => {
    API.updateUserByRecipeId(id, recipeID, name, image)
      .then(results => {
        console.log(results);
        alert("Your Recipe Has Been Saved!!")
      })
      .catch(err => {
        console.log(err)
      })
  }

  render() {
    return (
      <Container fluid>

        <SearchHeader>
        <div className="dashboard-header">
          <h1>My Dashboard</h1>
        </div>
        </SearchHeader>
          <input type="text" name="ingredient" onChange={this.handleInputChange} value={this.state.ingredient} id="dashboard-search" placeholder="Search by Ingredient or Recipe" />
          <button id="dashboard-search-btn" onClick={this.searchSpoonacular} >Search</button>

          {/* Add icons. Animate to make them appear in one by one*/}
          {/* <div id="ecochef-jumbo">EcoChef</div> */}



        <div>

          {
            this.state.spoonacular.map((card, i) =>

              <RecipeCard
                key={i + "- recipe"}
                card={card}
                viewHideInstructions={this.viewHideInstructions}
                viewHideIngregients={this.viewHideIngregients}
                searchIngredients={this.searchIngredients}
                searchInstructions={this.searchInstructions}
                saveUserRecipe={this.saveUserRecipe}
                authenticated={this.props.authenticated}

              />)
          }
        </div>

        {/* Redirect on authentication */}
        {this.props.authenticated ? <div></div> : <Redirect to='/login' /> }

      </Container>
    );
  }
}

export default Landing;

