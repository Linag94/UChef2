import React, { Component } from "react";
import {getUserCookBook} from "../utils/API";
import { Redirect } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import MainJumbotron from "../components/MainJumbotron";
// import Cookbook from "../components/LandingJumbo";
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

class CookBook extends Component {
  state = {
    recipes: "",
    spoonacular: []
  };

  componentDidMount() {
    // call api recipes
     getUserCookBook   

  }

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };



  render() {
    return (
      <Container fluid>
        <MainJumbotron>
          <h1>CookBook</h1>
        </MainJumbotron>
        {/* render cards for recipes */}
       
      </Container>
    );
  }
}

export default CookBook;



