import React from "react";
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import Login from "./pages/Login";
import Landing from "./pages/Landing";
import Signup from "./pages/Signup";
import NoMatch from "./pages/NoMatch";
import Dashboard from "./pages/Dashboard";
import Nav from "./components/Nav";
import {/* getCookie, */ authenticateUser} from "./utils/handleSessions";


class App extends React.Component {
  // check cookie
  // getCookie();

  state = {
    authenticated: false,
    loading: false
  }

  authenticate = () => authenticateUser()
    .then(auth => {
      console.log(auth)
      this.setState({authenticated: auth.data, loading:false}, ()=>console.log(this.state))})
    .catch(err => console.log(err))

  componentWillMount(){
    this.authenticate();
  }
  
  PrivateRoute = ({ component: Component, ...rest }) => (
    <Route {...rest} render={  (props) => (
      this.state.authenticated === true 
        ? <Component {...props} />
        : this.state.loading === true
          ?<div></div>
          : <Redirect to='/' />
    )} />
  )

  render(){
    return (
    <Router>
      <div>
        <Nav />
        <Switch>
          <Route exact path="/" render={(props) => <Landing {...props} authenticate={this.authenticate} authenticated={this.state.authenticated} />} />
          <Route exact path="/signup"  render={(props) => <Signup {...props} authenticate={this.authenticate} authenticated={this.state.authenticated} />} />
          <Route exact path="/login" render={(props) => <Login {...props} authenticate={this.authenticate} authenticated={this.state.authenticated} />} />
          <Route exact path="/landing" render={(props) => <Landing {...props} authenticate={this.authenticate} authenticated={this.state.authenticated} />} />
          <Route exact path="/dashboard" render={(props) => <Dashboard {...props} authenticate={this.authenticate} authenticated={this.state.authenticated} />} />

          <Route component={NoMatch} />
        </Switch>
      </div>
    </Router>
  )}
}

export default App;
