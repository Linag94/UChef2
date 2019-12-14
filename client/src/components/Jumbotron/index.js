import React from "react";
import bgimage from './backgroundLanding.jpg';
import "./style.css";

function Jumbotron({ children }) {
  return (
    <div
      className="jumbotron" id="landing-jumbo"
    >
      {children}
    </div>
  );
}

export default Jumbotron;
