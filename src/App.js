import React from "react";
import "./App.css";

import Numbers from "./components/ButtonComponents/NumberButtons/NumberButton";
import Operators from './components/ButtonComponents/OperatorButtons/OperatorButton';
import Specials from './components/ButtonComponents/SpecialButtons/SpecialButton';
import Display from './components/DisplayComponents/Display';

import Logo from "./components/DisplayComponents/Logo";

function App() {

  // const [inputState, setInputState] = useState('');
  // const [dataStorage, setDataStorage] = useState([]);
  // const numberHandler = value => {
  //   setInputState(inputState => {
  //     inputState = inputState + value;
  //     return inputState;
  //   });
  // };

  // const solveEquation = () => {
  //   dataStorage.forEach( (element, index) =>{
  //     if (dataStorage.includes('x')){
  //       console.log(Multiplication);
  //     }
  //     if (dataStorage.includes('/')){
  //       console.log(Division);
  //     }
  //     if (dataStorage.includes('+')){
  //       console.log(Addition);
  //     }
  //     if (dataStorage.includes('-')){
  //       console.log(Subtraction);
  //     }
  //   });
  // };

  // const clear = () => {
  //   setInputState = (inputState = "");
  // }

  // const specialHandler = value => {
  //   if (value === 'C'){
  //     clear();
  //   }
  // };

  // const operatorHandler = value => {
  //   setDataStorage(dataStorage => {
  //     let temp = inputState.split(value);
  //     temp.forEach (element=>{
  //       dataStorage.push(element);
  //     });
  //     dataStorage.push(value);
  //     return dataStorage;
  //   });

  //   clear();
  //   if (value === '='){
  //     solveEquation();
  //   }
  // };

  return (
    <div className="container">
      <Logo />
      <Display/>
      <div className="App">
        <div>
          <Specials/>
          <Numbers/>
        </div>
        <div>
          <Operators/>
        </div>
      </div>
    </div>
  );
}

export default App;
