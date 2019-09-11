import React from "react";
import "./App.css";

import Numbers from "./components/ButtonComponents/NumberButtons/NumberButton";
import Operators from './components/ButtonComponents/OperatorButtons/OperatorButton';
import Specials from './components/ButtonComponents/SpecialButtons/SpecialButton';
import Display from './components/DisplayComponents/Display';

import Logo from "./components/DisplayComponents/Logo";

// STEP 4 - import the button and display components
// STEP 5 - After you get the components displaying using the provided data file, write your state hooks here. Once the state hooks are in place, write some functions:
// Your functions should accept a parameter of the the item data being displayed to the DOM if they click one of those buttons and then call your setter function to update state.
// Don't forget to pass the functions to the components as props.

function App() {

  return (
    <div className="container">
      <Logo />
      <Display/>
      <div className="App">
        <Numbers/>
        <Operators/>
        <Specials/>
      </div>
    </div>
  );
}

export default App;
