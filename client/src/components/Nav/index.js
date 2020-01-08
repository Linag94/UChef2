import React from "react";
import "./style.css";
import Button from "../Button"

function Nav(props, {children}) {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-info">

            <a className="nav-title-uchef" href="/">
              EcoChef
            </a>

    {/* <div class="navbar-collapse collapse w-100 order-3 dual-collapse2"> */}
    <div>
      {children}
    </div>
    </nav>

  );
}

export default Nav;
