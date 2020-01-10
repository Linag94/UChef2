import React, { Component } from "react";
import API from "../utils/API";
import { Redirect } from "react-router-dom";
import { Container } from "../components/Grid";
import CookBookCard from "../components/CookBookCard";
import ResultsCardInstructions from "../components/ResultsCardInstructions";

class Landing extends Component {
  constructor(props){
  super(props)
  this.state = {
    instructions: [],
  };
}
  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  getInstructions = (id) => {
    console.log("called")
    API.getSpoonacularInstructions(id)
      .then(results => {
        console.log(results)
        this.setState({
          instructions: results.data
        }, () => console.log(this.state.instructions))

      })
      .catch(err => {
        console.log(err)
      })
  }


  render() {
    return (
      <Container fluid>

        <div>
          <CookBookCard
            recipes={this.props.authenticated.savedRecipes}
            getInstructions={this.getInstructions}
          >
          </CookBookCard>
        </div>

        <div>
          <ResultsCardInstructions
            instructions={this.state.instructions}
          >
          </ResultsCardInstructions>
        </div>

        {/* Redirect on authentication */}

        {/* {this.props.authenticated ? <Redirect to='/cookbook' /> : <div></div>} */}


      </Container >
    );
  }
}

export default Landing;
