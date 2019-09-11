import React, {useState} from "react";
import SpecialButton from './SpecialButton';
import {specials} from '../../../data';


const Specials = () => {
  const [specialState] = useState(specials);

  return (
    <div className='specials_container'>
        {specialState.map((specials, index)=> (
          <SpecialButton key={index} specials = {specials}/>
        ))}
    </div>
  );
};

export default Specials;
