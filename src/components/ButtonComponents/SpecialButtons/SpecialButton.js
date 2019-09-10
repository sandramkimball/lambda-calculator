import React from "react";
import specials from '../../../data';

const SpecialButton = props => {
  console.log('SpecialButton: ', props);
  return (
    <div>
    <button className='specials_button'> 
      {props.specials}
    </button>
  </div>
  );
};

export default SpecialButton;

//<button  onClick={()=> props.specials(props.count)} className='specials_button'> {props.specials.value}</button>