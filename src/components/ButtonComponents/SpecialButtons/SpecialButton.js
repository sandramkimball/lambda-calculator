import React from "react";


const SpecialButton = props => {
  console.log('SpecialButton: ', props);
  return (
    <div>
      <button className='specials_button' onClick= {()=> props.fnc(props.special)}> 
        {props.specials}
      </button>
    </div>
  );
};

export default SpecialButton;


