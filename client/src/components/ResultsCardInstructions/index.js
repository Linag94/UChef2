import React from "react";
import "./style.css";

function ResultsCardInstructions({ instructions }) {
  return (

    <div class="resultscard">
      <div class="card-body">
        <h2 class="card-title">Shopping List</h2>
        <table className="summaryCards ">
          <thead>
            <tr>
              <th>Step #</th>
              <th>Instructions</th>
         
            </tr>
          </thead>
          <tbody>
            {
              instructions.map((item, i) =>
                <tr key={i + '-row'}>
     
                  <td>{item.number}</td>
                  <td>{item.step}</td>
                </tr>)
            }
          </tbody>
        </table>
      </div>
    </div>

  );
}

ResultsCardInstructions.defaultProps = {
  instructions: []
}


export default ResultsCardInstructions;