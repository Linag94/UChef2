import React from "react";
import Cookies from 'js-cookie';
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import Login from "./pages/Login";
import Landing from "./pages/Landing";
import Signup from "./pages/Signup";
import NoMatch from "./pages/NoMatch";
import Dashboard from "./pages/Dashboard";
import Shopping from "./pages/Shopping";
// import Client from "./pages/Client";

import Nav from "./components/Nav";
import Footer from "./components/Footer";
import {/* getCookie, */ authenticateUser, logOut} from "./utils/handleSessions";


class App extends React.Component {

  state = {
    authenticated: false,
    loading: false
  }

  authenticate = () => authenticateUser()
    .then(auth => {
      console.log(auth)
      this.setState({authenticated: auth.data, loading:false}, ()=>console.log(this.state))
    })
    .catch(data => {
      if(data.response.status === 401) this.setState({authenticated: false, loading:false}, ()=>console.log(this.state))
      console.log(data)
    })

  logout = () => logOut()
    .then(res => {
      Object.keys(Cookies.get()).forEach(cookieName => Cookies.remove(cookieName));
      this.authenticate()
    })
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
        <Nav logout={this.logout}/>
        <Switch>
          <Route exact path="/" render={(props) => <Landing {...props} authenticate={this.authenticate} authenticated={this.state.authenticated} />} />
          <Route exact path="/signup"  render={(props) => <Signup {...props} authenticate={this.authenticate} authenticated={this.state.authenticated} />} />
          <Route exact path="/login" render={(props) => <Login {...props} authenticate={this.authenticate} authenticated={this.state.authenticated} />} />
          <Route exact path="/landing" render={(props) => <Landing {...props} authenticate={this.authenticate} authenticated={this.state.authenticated} />} />
          {/* <Route exact path="/client" render={(props) => <Client {...props} authenticate={this.authenticate} authenticated={this.state.authenticated} />} /> */}
          <Route exact path="/dashboard" render={(props) => <Dashboard {...props} authenticate={this.authenticate} authenticated={this.state.authenticated} />} />
          <Route exact path="/shoppinglist" render={(props) => <Shopping {...props} authenticate={this.authenticate} authenticated={this.state.authenticated} />} />

          <Route component={NoMatch} />
        </Switch>
        <Footer></Footer>
      </div>
    </Router>
  )}
}

export default App;
