import React, {useState} from "react";
import OperatorButton from './OperatorButton';
import {operators} from '../../../data';


const Operators = () => {
  const [operatorState] = useState(operators);

  return (
    <div class='operator_buttons'>
      <span className="button_container">
        {operatorState.map((operators, index)=> (
          <OperatorButton key={index} operators={operators}/>
        ))}
      </span>
    </div>
  );
};

export default Operators;


//   const divide = () =>{
//     setOperatorState(operatorState => '/')
//   };
//   const mutliply = () =>{
//     setOperatorState(operatorState => '*')
//   };
//   const subtract = () =>{
//     setOperatorState(operatorState => '-')
//   };
//   const add = () =>{
//     setOperatorState(operatorState => '+')
//   };
//   const equal = () =>{
//     setOperatorState(operatorState => '=')
//   };

{/* <OperatorButton operator={divide} buttonValue = '/'/>
<OperatorButton operator={multiply} buttonValue = '*'/>
<OperatorButton operator={subtract} buttonValue = '-'/>
<OperatorButton operator={add} buttonValue = '+'/>
<OperatorButton operator={equal} buttonValue = '='/> */}