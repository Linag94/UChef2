import React, { Component } from "react";

import API from "../utils/API";
import { Redirect } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import { Input, FormBtn } from "../components/Form";
// import { Link } from "react-router-dom";

class Login extends Component {
  state = {
    email: "",
    password: "",
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
    if (this.state.email && this.state.password) {
      API.loginUser({
        email: this.state.email,
        password: this.state.password
      })
        .then(res => {
          if (res.status === 200) {
            this.props.authenticate().then(data => {
              this.setState({ redirect: true })
            });
          }
        })
        .catch(err => console.log(err));
    }
  };

  handleFormSignUp = event => {
    return <Redirect to="/signup" />;
  };

  render() {
    return (
      <Container fluid>
        <Row>
          <Col size="12">
            <div>
              <h3 style={{color: `white`}}>Log In</h3>
            </div>
            <br>
            </br>
            <div style={{color: `white`}}>
              Haven't signed up yet? <a href="/signup">Click Here!</a>
            </div>

            <br></br>
            <form style={{width: `50%`}}>
              <div style={{color: `white`}}>Enter your e-mail:</div>
              <Input
                value={this.state.email}
                onChange={this.handleInputChange}
                name="email"
                placeholder="E-mail"
              />
              <div style={{color: `white`}}>Enter your password:</div>
              <Input
                value={this.state.password}
                onChange={this.handleInputChange}
                name="password"
                placeholder="Password"
                type="password"
              />

              <FormBtn
                disabled={!(this.state.email && this.state.password)}
                onClick={this.handleFormSubmit}
                float="left"
              >
                Login
              </FormBtn>

            </form>
          </Col>
        </Row>

        {/* Redirect on authentication */}
        {this.state.redirect && <Redirect to="/dashboard" /> }
      </Container>
    );
  }
}

export default Login;
