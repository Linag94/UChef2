import React, { Component } from "react";
import API from "../utils/API";
import {  Redirect } from "react-router-dom";
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
  backgroundSize : `cover`,
  backgroundPosition: `center`
};
var createJumboStyle = {
  backgroundImage: `url(` + CreateImage + `)`,
  height: `100%`,
  width: `100%`,
  backgroundSize : `cover`,
  backgroundPosition: `center`
};
var consciousJumboStyle = {
  backgroundImage: `url(` + ConsciousImage + `)`,
  height: `100%`,
  width: `100%`,
  backgroundSize : `cover`,
  backgroundPosition: `center`
};

class Landing extends Component {
  state = {
      email: "",
      password: ""
    };
    
  componentDidMount() {
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
              <h1>The Chef Has Arrived</h1>
              
              <i class="fas fa-columns"></i>
              <i class="far fa-lightbulb"></i>
              <i class="fas fa-carrot"></i>
              <i class="fas fa-leaf"></i>
              
              <h3>Plan. Create. Cook. Responsibly.</h3>
              <form >
              <input type="text" id="landing-form" placeholder="Search by Ingredient or Recipe"/>
              </form>
              {/* Add icons. Animate to make them appear in one by one*/}
              <div id="ecochef-jumbo">EcoChef</div>

          </MainJumbotron>

          
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
        {this.props.authenticated ? <Redirect to='/books'/>: <div></div>}
      </Container>
    );
  }
}

export default Landing;
