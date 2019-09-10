import React, {useState} from "react";
import SpecialButton from './SpecialButton';
import {specials} from '../../../data';


const Specials = () => {
  const [specialState] = useState(specials);
  
  return (
    <div className='specials_container'>
      <span className="button_container">
        {specialState.map((specials, index)=> (
          <SpecialButton key={index} specials = {specials}/>
        ))}
      </span>
    </div>
  );
};

export default Specials;

// 

//   const clear = () =>{
//     setSpecialState(specialState => specialState * 0)
//   };
//   const plusMinus = () =>{
//     setSpecialState(specialState => '+/-')
//   };
//   const percentage = () =>{
//     setSpecialState(specialState => '%')
//   };

{/* <SpecialButton special={C} buttonValue = 'C'/>
      <SpecialButton special={'+/-'} buttonValue = '+/-'/>
      <SpecialButton special={'%'} buttonValue = '%'/> */}