import React, { Component } from "react";

import API from "../utils/API";
import { Redirect } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import { Input, FormBtn } from "../components/Form";

class Signup extends Component {
  state = {
    email: "",
    username: "",
    password: "",
    passwordConf: "",
    servingSize: "",
    mealPreferance: "",
    redirect: false
  };

  componentDidMount() {}

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    console.log("handleform");
    if (this.state.email && this.state.password) {
      API.signup({
        username: this.state.username,
        email: this.state.email,
        password: this.state.password,
        passwordConf: this.state.passwordConf
      })
        .then(res => {
          console.log(res);
          if (res.status === 200) {
            this.props.authenticate();
            // this.setState({ redirect: true });
          }
        })
        .catch(err => console.log(err));
    }
  };

  render() {
    return (
      <Container fluid>
        {/* {this.state.redirect && <Redirect to="/landing" />} */}
        {/* redirect on authenticated */}
        {this.props.authenticated && <Redirect to="/dashboard" />}
        <Row>
          <Col size="12">
            <div>
              <h2 style={{color: `white`}}>Sign Up!</h2>
              <br></br>
            </div>
            <form style={{width:`50%`}}>
              <Input
                value={this.state.username}
                onChange={this.handleInputChange}
                name="username"
                placeholder="Username (required)"
              />
              <Input
                value={this.state.email}
                onChange={this.handleInputChange}
                name="email"
                placeholder="Email (required)"
              />
              <Input
                value={this.state.password}
                onChange={this.handleInputChange}
                name="password"
                placeholder="Password (required)"
                type="password"
              />
              <Input
                value={this.state.passwordConf}
                onChange={this.handleInputChange}
                name="passwordConf"
                placeholder="Password Match (required)"
                type="password"
              />

              <label style={{color: `white`, marginRight: `10px`}}>
                Select Household Size:
                <select
                  value={this.state.servingSize}
                  name="servingSize"
                  onChange={this.handleInputChange}
                  style={{marginLeft: `10px`}}
                >
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4 +</option>
                </select>
              </label>
              <label style={{color: `white`}}>
                Dietary Preference:
                <select
                  value={this.state.value}
                  name="value"
                  onChange={this.handleInputChange}
                  style={{marginLeft: `10px`}}
                >
                  <option href="Veggie">Vegatarian</option>
                  <option value="Fish">Pescatarian</option>
                  <option value="Meat">Open</option>
                  <option value="Low Calorie">Calorie Watching</option>
                </select>
              </label>

              <FormBtn
                // disabled={!(this.state.email && this.state.password)}
                onClick={this.handleFormSubmit}
              >
                Signup
              </FormBtn>
            </form>
          </Col>
        </Row>
        
      </Container>
    );
  }
}

export default Signup;
