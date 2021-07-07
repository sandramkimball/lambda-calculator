import React from "react";

const OperatorButton = props => {
  console.log('OperatorButton: ', props);
  return (
    <div>
      <button className="operators_button" onClick ={ ()=> props.func(props.operator)}>
          {props.operator}
      </button>
    </div>
  );
};

export default OperatorButton;
