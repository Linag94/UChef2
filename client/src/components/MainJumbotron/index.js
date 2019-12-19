import React from "react";
import bgimage from './backgroundLanding.jpg';
import "./style.css";

var jumbotronArray = [
  {
    "id": 1,
    "name": "The Chef Has Arrived",
    "image": "./backgroundLanding.jpg",
    "occupation": "Fry Cook",
    "location": "A Pineapple Under the Sea"
  }
]

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
