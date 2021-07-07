import React, {useState} from "react";
import OperatorButton from './OperatorButton';
import {operators} from '../../../data';


const Operators = props => {
  const [operatorState] = useState(operators);

  return (
    <div class='operator_buttons'>
        {operatorState.map((operator, index)=> { 
          return <OperatorButton key={index} operator={operator.char} fnc ={props.onButtonPress}/>
        })
        }
    </div>
  );
};

export default Operators;


