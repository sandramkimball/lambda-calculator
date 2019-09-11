import React, {useState} from "react";

const Display = props=> {
  const [count, setCount] = useState(0);
  
  return <div className="display">
     {setCount}
    </div>;
};

export default Display;