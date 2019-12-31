import React from "react";
import "./style.css";

function MainJumbotron({ children }) {
  return (
    <div
      className="jumbotron" id="landing-jumbo"
    >
      {children}
    </div>
  );
}

export default MainJumbotron;
