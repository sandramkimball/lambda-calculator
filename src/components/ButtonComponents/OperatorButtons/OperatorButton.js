import React from "react";

const OperatorButton = props => {
  console.log('OperatorButton: ', props);
  return (
    <button className="operators_button" >
      <span role= 'button' aria-label="ignoreNonDom: true">
        {props.operators}
      </span>
    </button>
  );
};

export default OperatorButton;
