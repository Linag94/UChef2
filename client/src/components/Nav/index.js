import React from "react";
import "./style.css";
import Button from "../Button"

function Nav(props) {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-info">

            <a className="nav-title-uchef" href="/">
              EcoChef
            </a>

    {/* <div class="navbar-collapse collapse w-100 order-3 dual-collapse2"> */}
    <div class="">
        <ul class="navbar-nav ml-auto">
            <li class="nav-item">
                <a class="nav-link" id="signup" href="/signup">Sign Up</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" id="login" href="/login">Login</a>
            </li>
            <li>
              <Button onClick={props.logout}>
                logout
              </Button>
            </li>
        </ul>
    </div>
    </nav>

  );
}

export default Nav;
