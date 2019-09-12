import React, {useState} from "react";
import SpecialButton from './SpecialButton';
import {specials} from '../../../data';


const Specials = props => {
  const [specialState] = useState(specials);

  return (
    <div className='specials_container'>
        {specialState.map((special, index)=> {
          return <SpecialButton key={index} special = {special}/>
  })}
    </div>
  );
};

export default Specials;
