import React, {useState} from "react";
import {numbers} from '../../../data';
import NumberButton from './NumberButton';


const Numbers = props => {
  const [numberState] = useState(numbers);
  console.log('Numbers: ', numberState)
  return (
    <div className="numbers_container">
        {numberState.map((number, index)=> { 
          return(
          <NumberButton key={index} number={number} fnc={props.onButtonPress}/>
        );
      })}
    </div>
  );
};

export default Numbers;