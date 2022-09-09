import classes from './Counter.module.css';

import { useSelector, useDispatch } from 'react-redux';
import { useState } from 'react';

const Counter = () => {

  const counter = useSelector(state => state.counter);
  const isShow = useSelector(state => state.show);

  const dispatch = useDispatch(); // this is a function

  
  const toggleCounterHandler = () => {    
    dispatch({type: "toggle"})
  };

  const onIncrementHandler = () => {
    dispatch({type: "increment"});
  }

  const onIncreaseHandler = () => {
    dispatch({type:"increase", value:5});
  };

  const onDecrementHandler = () => {
    dispatch({type: "decrement"});
  }

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {isShow && <div className={classes.value}>{counter}</div>}
      <button onClick={onIncrementHandler}>Increment</button>
      <button onClick={onDecrementHandler}>Decrement</button>
      <button onClick={onIncreaseHandler}>Increment By 5</button>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
