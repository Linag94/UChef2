import React, { Component } from "react";
import API from '../utils/API';
import { Redirect } from "react-router-dom";
import { Container } from "../components/Grid";
import MainJumbotron from "../components/MainJumbotron";
import RecipeCard from "../components/RecipeCards";


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

        <MainJumbotron>
          <h1>The Chef Has Arrived</h1>

          <i className="fas fa-columns"></i>
          <i className="far fa-lightbulb"></i>
          <i className="fas fa-carrot"></i>
          <i className="fas fa-leaf"></i>

          <h3>Plan. Create. Cook. Responsibly.</h3>
          <input type="text" name="ingredient" onChange={this.handleInputChange} value={this.state.ingredient} id="landing-form" placeholder="Search by Ingredient or Recipe" />
          <button onClick={this.searchSpoonacular} >Search</button>
          {/* Add icons. Animate to make them appear in one by one*/}
          <div id="ecochef-jumbo">EcoChef</div>

        </MainJumbotron>

        <div>

          {
            this.state.spoonacular.map((card, i) =>

              <RecipeCard
                key={i + "- recipe"}
                 card={card}
                viewHideInstructions={this.viewHideInstructions}
                searchIngredients={this.searchIngredients}
                searchInstructions={this.searchInstructions}

              />)
          }
        </div>

        {/* Redirect on authentication */}
        {this.props.authenticated ? <Redirect to='/dashboard' /> : <div></div>}

      </Container>
    );
  }
}

export default Landing;

