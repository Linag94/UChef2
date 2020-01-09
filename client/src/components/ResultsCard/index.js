import React from "react";
import "./style.css";

function ResultsCard({ ingredients }) {
  return (

    <div class="resultscard">
      <div class="card-body">
        <h2 class="card-title">Shopping List</h2>
        <table className="summaryCards ">
          <thead>
            <tr>
              <th>Checkbox</th>
              <th>Ingredient</th>
              <th>Amount</th>
              <th>Unit of Measure</th>
            </tr>
          </thead>
          <tbody>
            {
              ingredients.map((item, i) =>
                <tr key={i + '-row'}>
                  <td><input type="checkbox"></input></td>
                  <td>{item.name}</td>
                  <td>{item.amount}</td>
                  <td>{item.unit}</td>
                </tr>)
            }
          </tbody>
        </table>
      </div>
    </div>

  );
}

ResultsCard.defaultProps = {
  ingredients: []
}


export default ResultsCard;