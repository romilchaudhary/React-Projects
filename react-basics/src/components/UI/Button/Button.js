import React from 'react';

import classes from './Button.module.css';

const Button = (props) => {
  console.log("Button Running")
  return (
    <button
      type={props.type || 'button'}
      className={`${classes.button} ${props.className}`}
      onClick={props.onClick}
      disabled={props.disabled}
    >
      {props.children}
    </button>
  );
};

export default React.memo(Button);

// it's always revaluated after using memo()?  in button onlick we are using a function which will executes every time parent component reevaluated and this function always rereated in memory(with different address).
// and memo checks props.onClick !== props.previous.onClick (it's not premitive type so this is false every time)


// to work React.memo() with functions, objects and arrays we need to use "useCallback" which gurantes that this function is never recreated in memory and react will always use the same function object