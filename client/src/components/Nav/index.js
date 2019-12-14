import React from "react";
import "./style.css";

function Nav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-info">
      <a className="nav-title-uchef" href="/">
        EcoChef
      </a>
    <span className="btn" id="signup" role="button" tabIndex="0">
      Sign Up
    </span>
    <span className="btn" id="login" role="button" tabIndex="0">
      Login
    </span>
    </nav>
  );
}

export default Nav;
