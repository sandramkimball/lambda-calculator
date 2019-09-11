import React, {useState} from "react";
import {numbers} from '../../../data';
import NumberButton from './NumberButton';


/* STEP 3 - Use .map() to iterate over your data and return a button
component matching the name. Pass any props needed by the child component*/


const Numbers = () => {
  const [numbersState, setNumbersState] = useState(numbers);

  return (
    <div className="numbers_container">
        {numbersState.map((index, numbers)=> {return (
          <NumberButton key={index} numbers={numbers} />
        );
      })}
    </div>
  );
}

export default Numbers;
