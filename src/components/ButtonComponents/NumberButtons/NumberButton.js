import React from "react";


const NumberButton = props => {
  
  console.log('NumberButton: ', props);
  return (
    <div>
      <button className="numbers_button" onClick= {()=> props.fnc(props.number)}> 
          {props.numbers}
      </button>
    </div>
  );
};

export default NumberButton;



