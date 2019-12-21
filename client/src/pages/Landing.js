import React, { Component } from "react";
import API from '../utils/API';
import { Redirect } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import MainJumbotron from "../components/MainJumbotron";
import LandingJumbo from "../components/LandingJumbo";
import PlanImage from "../pages/images/PlanBG.jpg";
import CreateImage from "../pages/images/CreateBG.jpg";
import ConsciousImage from "../pages/images/ConsciousBG.jpg";
import Wrapper from "../components/Wrapper";



// Make sure to import the correct components
//Components required:
//Design the navbar
//Design the jumbotron
//Design the landing page layout

//Styles for each Landing Jumbotron
var planJumboStyle = {
  backgroundImage: `url(` + PlanImage + `)`,
  height: `100%`,
  width: `100%`,
  backgroundSize: `cover`,
  backgroundPosition: `center`
};
var createJumboStyle = {
  backgroundImage: `url(` + CreateImage + `)`,
  height: `100%`,
  width: `100%`,
  backgroundSize: `cover`,
  backgroundPosition: `center`
};
var consciousJumboStyle = {
  backgroundImage: `url(` + ConsciousImage + `)`,
  height: `100%`,
  width: `100%`,
  backgroundSize: `cover`,
  backgroundPosition: `center`
};

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
    API.getSpoonacularResults(this.state.ingredient, 10)
      .then(results => {
        this.setState({ spoonacular: results.data.results })
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
          <button onClick={this.searchSpoonacular}>Search</button>
          {/* Add icons. Animate to make them appear in one by one*/}
          <div id="ecochef-jumbo">EcoChef</div>


        </MainJumbotron>
        {
          console.log(this.state.spoonacular),
          this.state.spoonacular.map((recipe, i) => <p key={i + '-recipe'}>{recipe.title}</p>)
          // ,
          // this.state.spoonacular.map((recipe, i) => <img src="https://spoonacular.com/recipeImages/chicken-spinoccoli-breaded-stuffed-chicken-breast-with-spinach-broccoli-and-cheese-485365.jpg" alt="" className="img-responsive" key={i} />)
        }

        <LandingJumbo>
          <div style={planJumboStyle}>
            <h1>Plan</h1>

            <h3>Like a calculator. For Food.</h3>
          </div>
        </LandingJumbo>

        <LandingJumbo>
          <div style={createJumboStyle}>
            <h1>Create.</h1>

            <h3>Like a painting canvas. For Food.</h3>
          </div>

        </LandingJumbo>
        <LandingJumbo>
          <div style={consciousJumboStyle}>
            <h1>Conscious.</h1>

            <h3>Earth takes care of food. Food takes care of you. So let's take care of Earth.</h3>
          </div>
        </LandingJumbo>


        {/* <form>
              <Input
                value={this.state.email}
                onChange={this.handleInputChange}
                name="email"
                placeholder="email (required)"
              />
              <Input
                value={this.state.password}
                onChange={this.handleInputChange}
                name="password"
                placeholder="(required)"
                type="password"
              />
              
              <FormBtn
                disabled={!(this.state.email && this.state.password)}
                onClick={this.handleFormSubmit}
              >
                Submit Book
              </FormBtn>
            </form> */}


        {/* Redirect on authentication */}
        {this.props.authenticated ? <Redirect to='/books' /> : <div></div>}
      </Container>
    );
  }
}

export default Landing;
