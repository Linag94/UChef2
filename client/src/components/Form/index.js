import React from "react";

// This file exports the Input, TextArea, and FormBtn components

 function Input(props) {
  return (
    <div className="form-group">
      <input className="form-control" {...props} />
    </div>
  );
}

 function TextArea(props) {
  return (
    <div className="form-group">
      <textarea className="form-control" rows="20" {...props} />
    </div>
  );
}

function FormBtn(props) {
  return (
    <button {...props} style={{ float: props.float, marginBottom: 10 }} className="btn btn-success text-white">
      {props.children}
    </button>
  );
}
FormBtn.defaultProps = {
  float: 'right'
}

export {
  FormBtn,
  Input,
  TextArea
}
