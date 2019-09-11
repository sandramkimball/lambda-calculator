import React, {useState} from "react";
import numbers from '../../../data';
import NumberButton from './NumberButton';

//import any components needed
//Import your array data to from the provided data file.

// STEP 2 - add the imported data to state
/* STEP 3 - Use .map() to iterate over your data and return a button
component matching the name. Pass any props needed by the child component*/


const Numbers = () => {
  const [numbersState] = useState(numbers);

  return (
    <div className="numbers_container">
        {numbersState.map((index)=> {return (
          <NumberButton key={index} />
        );
      })}
    </div>
  );
}

export default Numbers;
