import React from "react";
import "./style.css";


function Jumbotron({ children }) {
  return (

        <div
          className="jumbotron" id = "panel-jumbo"
        >
          {children}
          
        </div>
  );
}

export default Jumbotron; 
