import React, { Component } from "react";
import API from "../utils/API";
import { Redirect } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import MainJumbotron from "../components/MainJumbotron";
import LandingJumbo from "../components/LandingJumbo";
import PlanImage from "../pages/images/PlanBG.jpg";
import CreateImage from "../pages/images/CreateBG.jpg";
import ConsciousImage from "../pages/images/ConsciousBG.jpg";

//Styles for each Landing Jumbotron
var planJumboStyle = {
  backgroundImage: `url(` + PlanImage + `)`,
  height: `100%`,
  width: `100%`,
  backgroundSize: `cover`,
  backgroundPosition: `center`,
  color: `black`,
  padding: `270px`
};
var createJumboStyle = {
  backgroundImage: `url(` + CreateImage + `)`,
  height: `100%`,
  width: `100%`,
  backgroundSize: `cover`,
  backgroundPosition: `center`,
  padding: `160px`
};
var consciousJumboStyle = {
  backgroundImage: `url(` + ConsciousImage + `)`,
  height: `100%`,
  width: `100%`,
  backgroundSize: `cover`,
  backgroundPosition: `center`,
  padding: `200px`
};

var infoStyle = {
  backgroundColor: `rgb(255,255,255, 0.7)`,
  height: `100%`,
  width: `100%`,
  backgroundSize: `cover`,
  backgroundPosition: `center`,
  padding: `160px`,
  fontSize: `25px`,
  color: `black`
}

class Landing extends Component {
  state = {
    ingredient: "",
    spoonacular: []
  };
  

  componentDidMount() {}

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  //function
  searchSpoonacular = () => {
    API.getSpoonacularResults(this.state.ingredient, 10)
      .then(results => {
        this.setState({ spoonacular: results.data.results });
      })
      .catch(err => {
        console.log(err);
      });
  };

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
          {/* <input
            type="text"
            name="ingredient"
            onChange={this.handleInputChange}
            value={this.state.ingredient}
            id="landing-form"
            placeholder="Search by Ingredient or Recipe"
          />
          <button onClick={this.searchSpoonacular} id="landing-search-btn">
            Search
          </button> */}
          {/* Add icons. Animate to make them appear in one by one*/}
          <div id="ecochef-jumbo">EcoChef</div>
        </MainJumbotron>

        {this.state.spoonacular.map((recipe, i) => (
          <p key={i + "-recipe"}>{recipe.title}</p>
        ))
        // this.state.spoonacular.map((recipe, i) => <img src={recipe.imgURL} alt="" className="img-responsive" key={i} />)
        }
        <Row>
          <Col size="md-6">
            <LandingJumbo>
              <div style={planJumboStyle}>
                <h1>Plan</h1>
                <i className="fas fa-columns"></i>
              </div>
            </LandingJumbo>
          </Col>
          <Col size="md-6">
            <LandingJumbo>
            <div style={infoStyle}>
              <h3>Cooking requires a lot of planning, but we can help!</h3>
              <br></br>
              <article> Automatically add ingredients from your favorite recipes to your shopping list.</article>
            </div>
          </LandingJumbo>
          </Col>
        </Row>

        <Row>
          <Col size="md-6">
            <LandingJumbo>
              <div style={infoStyle}>
                <h1>Some information here.</h1>
                <i className="far fa-lightbulb"></i>
              </div>
            </LandingJumbo>
          </Col>
          <Col size="md-6">
            <LandingJumbo>
            <div style={createJumboStyle}>
              <h1>Create.</h1>
              <i className="far fa-lightbulb"></i>
            </div>
          </LandingJumbo>
          </Col>
        </Row>


        <LandingJumbo>
          <div style={consciousJumboStyle}>
            <h1 className="conscious">Consciously.</h1>
            <i className="fas fa-leaf"></i>
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

        {/* {!this.props.authenticated && <Redirect to="/login" />} */}
      </Container>
    );
  }
}

export default Landing;
