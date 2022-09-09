import React, {forwardRef} from "react";

import classes from "./Input.module.css";

const Input = forwardRef((props, ref) => {
    return (
        <div className={classes.input}>
            <label htmlFor={props.input.id}>{props.label}</label>
            {/* spread operator here make sure that all the props.input keys we defined are implemented here using ...props.input */}
            <input ref={ref} {...props.input} />
        </div>
    )
});

export default Input;