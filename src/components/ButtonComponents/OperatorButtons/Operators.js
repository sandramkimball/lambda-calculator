import React, {useState} from "react";
import OperatorButton from './OperatorButton';
import {operators} from '../../../data';


const Operators = () => {
  const [operatorState] = useState(operators);

  return (
    <div class='operator_buttons'>
        {operatorState.map((operators, index)=> (
          <OperatorButton key={index} operators={operators}/>
        ))}
    </div>
  );
};

export default Operators;


