import React from "react";

const NumberButton = props => {
  console.log('NumberButton: ', props);
  return (
    <button className="numbers_button" >
      <span role= 'button' aria-label="ignoreNonDom: true"> 
        {props.numbers} 
      </span>
    </button>
  );
};

export default NumberButton;



