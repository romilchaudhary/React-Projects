import React, { useRef } from "react";
import classes from "./MealItemForm.module.css";
import Input from "../../UI/Input";

const MealItemForm = (props) => {
    const inputRef = useRef();

    const submitHandler = (event) => {
        event.preventDefault();
        
        const amountVal = inputRef.current.value;
        const currentAmountval = +amountVal;
        
        if (currentAmountval < 1 || currentAmountval > 5) {
            return;
        }

        props.onAddCart(currentAmountval);   
    };

    return (
        <form className={classes.form} onSubmit={submitHandler}>
                <Input label="Amount" input={{
                    id: "amount_" + props.id,
                    type: "number",
                    min: 1,
                    max: 5,
                    step: 1,
                    defaultValue: 1,
                    ref: inputRef
                }} />
            <button>Add</button>
        </form>
    )
}

export default MealItemForm;