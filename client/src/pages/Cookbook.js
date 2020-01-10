import React, { Component } from "react";
import API from "../utils/API";
import { Redirect } from "react-router-dom";
import { Container } from "../components/Grid";
import CookBookCard from "../components/CookBookCard";

class CookBook extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: "",
      recipes: "",
      ingredient: "",
      instructions: "",
      spoonacular: []
    };
  }

  componentWillMount() {
    // call api recipes
    console.log("componentWillMount")
    if (this.state.user._id) {
      console.log(this.state.user._id)

      this.searchUserRecipes(this.state.user._id) 
    }

  }

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };
  searchUserRecipes = id => {
    console.log("searchUserRecipes")
    API.findRecipesByUser(id)

      .then(results => {
        console.log(results)

        // this.setState(
        //   {
        //     user: results.data
        //   },
        //   () => console.log(this.state.user.savedRecipes)
        // );
      })
      .catch(err => {
        console.log(err);
      });
  };

  render() {
    return (
      <Container fluid>
        <div>
          <CookBookCard
            searchUserRecipes={this.searchUserRecipes}
            authenticated={this.props.authenticated}
            card={this.state.user}
          ></CookBookCard>
        </div>

        {/* Redirect on authentication */}

        {/* {this.props.authenticated ? <Redirect to="/cookBook" /> : <div></div>} */}
      </Container>
    );
  }
}

export default CookBook;
