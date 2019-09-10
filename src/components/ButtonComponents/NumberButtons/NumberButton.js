import React from "react";
// import {numbers} from '../../../data';

const NumberButton = props => {
  console.log('NumberButton: ', props);
  return (
    <div>
      <button className="numbers_button"> {props.numbers} </button>
    </div>
  );
};

export default NumberButton;

{/* <button onClick={()=> props.numbers(props.count)} className="numbers_button"> {props.numbers.value} </button> */}


