import React from "react";
import "./style.css";


function Header({ children }) {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-6">
          {/* <div
            className="jumbotron" id = "panel-jumbo"
          > */}
            {children}
            
          {/* </div> */}
        </div>
        </div>
      </div>
    );
  }
  
  export default Header; 