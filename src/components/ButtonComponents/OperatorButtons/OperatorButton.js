import React from "react";
import operators from '../../../data';

const OperatorButton = props => {
  console.log('OperatorButton: ', props);
  return (
    <div>
      <button className="operators_button">
        {props.button}
      </button>
    </div>
  );
};

export default OperatorButton;
