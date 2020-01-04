import React from "react";
import "./style.css";


function Jumbotron({ children }) {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6" id="panel-jumbo">

          {children}
          
      </div>
      </div>
    </div>
  );
}

export default Jumbotron; 
