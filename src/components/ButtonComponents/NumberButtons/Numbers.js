import React, {useState} from "react";
import numbers from '../../../data';
import NumberButton from './NumberButton';

//import any components needed
//Example of import from data.js. 
//Import your array data to from the provided data file.

// STEP 2 - add the imported data to state
/* STEP 3 - Use .map() to iterate over your array data and return a button
component matching the name on the provided file. Pass it any props needed by the child component*/


const Numbers = () => {
  const [numberState] = useState(numbers);

  const one = () =>{
    setNumberState(numberState => 1)
  };
  const two = () =>{
    setNumberState(numberState => 2)
  };
  const three = () =>{
    setNumberState(numberState => 3)
  };

  const four = () =>{
    setNumberState(numberState => 4)
  };

  const five = () =>{
    setNumberState(numberState => 5)
  };


  return (
    <div className="numbers_container">
      <span className="button_container">
        {numberState.map((numbers, index)=> (
          <NumberButton key={index} numbers ={numbers}/>
        ))}
      </span>
    </div>
  );
};

export default Numbers;


// 

//   const one = () =>{
//     setNumberState(numberState => 1)
//   };
//   const two = () =>{
//     setNumberState(numberState => 2)
//   };
//   const three = () =>{
//     setNumberState(numberState => 3)
//   };

{/* <NumberButton number={one} buttonValue = '1'/>
      <NumberButton number={two} buttonValue = '2'/>
      <NumberButton number={three} buttonValue = '3'/>
      <NumberButton number={4} buttonValue = '4'/>
      <NumberButton number={5} buttonValue = '5'/>
      <NumberButton number={6} buttonValue = '6'/>
      <NumberButton number={7} buttonValue = '7'/>
      <NumberButton number={8} buttonValue = '8'/>
      <NumberButton number={9} buttonValue = '9'/>
      <NumberButton number={0} buttonValue = '0'/> */}