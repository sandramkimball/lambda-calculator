import React from "react";


const SpecialButton = props => {
  console.log('SpecialButton: ', props);
  return (
    <button  className='specials_button' >
    <span role= 'button' aria-label="ignoreNonDom: true"> 
      {props.specials}
    </span>
  </button>
  );
};

export default SpecialButton;


