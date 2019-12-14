import React, { Component } from "react";

import API from "../utils/API";
import {  Redirect } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import { Input, FormBtn } from "../components/Form";
import Jumbotron from "../components/Jumbotron";

// Make sure to import the correct components
//Components required:
//Design the navbar
//Design the jumbotron
//Design the landing page layout

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
        <Row>
          <Col size="12">
              <Jumbotron>
                  Welcome to uChef! 
              </Jumbotron>
 
            <form>
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
            </form>
          </Col>
          
        </Row>

        {/* Redirect on authentication */}
        {this.props.authenticated ? <Redirect to='/books'/>: <div></div>}
      </Container>
    );
  }
}

export default Landing;
