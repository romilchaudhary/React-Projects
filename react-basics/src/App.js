import React, { useState, useCallback, useMemo } from 'react';
import Button from './components/UI/Button/Button';
import Para from './components/Demo/Para';

import './App.css';

function App() {
  const [showParagraph, steShowParaGraph] = useState(false);
  const [allowToggle, setAllowToggle] = useState(false);

  const [count, setCount] = useState(0);

  console.log("App Running")
  const TogglePara = useCallback(() => {
    console.log(allowToggle) // useCallback stores the initial value of varibale in memory, if need to pass the dependencies to allow the updated value of variable
    if (allowToggle) {
      steShowParaGraph((prevParaState) => !prevParaState);
    }
  }, [allowToggle]); // we passed allowtoggle as dependencies bcoz we want to use the updated value of allowtoggle inside usecallback

  const allowToggleHandler = useCallback(() => {
    setAllowToggle(true);
  }, []);

  const setCountHandler = () => {
    setCount(count + 1);
  }
 
  const isEven = useMemo(() => {
    console.log("isEven Running");
    let i = 0;
    while(i<2000000000) {
      i++;
    }
    return count%2===0;
  }, [count]);

  return (
    <div className="app">
      <h1>Hi there! {count}</h1>
      {isEven ? "Even": "odd"}
      <Para showPara={showParagraph} />
      <Button onClick={allowToggleHandler}>Allow Toggle</Button>
      <Button onClick={TogglePara}>Toggle</Button>
      <Button onClick={setCountHandler}>Update Count</Button>
    </div>
  );
}

export default App;
