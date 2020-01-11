import React, { Component } from "react";
import API from "../utils/API";
import { Redirect } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import MainJumbotron from "../components/MainJumbotron";
import LandingJumbo from "../components/LandingJumbo";



class Mission extends Component {
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
         
         <h1 style={{color: `white`}}>About Us</h1>
         <br>
         </br>

         <h4 style={{color: `white`}}>EcoChef was created by Sam Will, Thelina George, Rich Gayle, and Yannik Büchi.</h4>
         <br></br>
         <h2 style={{color: `white`}}>The initial idea behind EcoChef was to create something simple but impactful. Something that could change the way people live.</h2>
         <br></br>
         <h3 style={{color: `white`}}>We thought: why not cooking? It's fun (when you have the time). It's something we do (or should do) every day. It's something that empowers us to make a true difference. To reduce packaging and waste, to support local busineses, to eat healthy home-cooked food, to choose our ingredients wisely and protect our environment</h3>
         <br></br>
         <h5></h5>
        

         
          
              
  
          {/* Redirect on authentication */}
  
          {!this.props.authenticated && <Redirect to="/login" />}
        </Container>
      );
    }
  }
  
  export default Mission;
  