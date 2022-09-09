import React, { useRef, useState } from "react";

import classes from "./Checkout.module.css";

const isEmpty = value => value.trim() === "";
const isFiveChars = value => value.trim().length === 5;

const CheckoutForm = (props) => {
    const [formInputValidity, setFormInputValidity] = useState({
        name: true,
        address: true,
        postal: true,
        city: true
    });

    const nameInputRef = useRef();
    const addressInputRef = useRef();
    const postalCodeInputRef = useRef();
    const cityInputRef = useRef();   
    

    const confirmHandler = (event) => {
        event.preventDefault();

        const nameValue = nameInputRef.current.value;
        const addressValue = addressInputRef.current.value;
        const postalValue = postalCodeInputRef.current.value;
        const cityValue = cityInputRef.current.value;

        const nameIsValid = !isEmpty(nameValue);
        const addressIsValid = !isEmpty(addressValue);
        const cityIsValid = !isEmpty(cityValue);
        const postalIsValid = isFiveChars(postalValue);

        const formIsValid = nameIsValid && addressIsValid && cityIsValid && postalIsValid;
        
        setFormInputValidity({
            name: nameIsValid,
            address: addressIsValid,
            city: cityIsValid,
            postal: postalIsValid
        });

        if (!formIsValid) {
            return;
        }
        else{
            console.log("user data submitted");
            props.onConfirm({
                name: nameValue,
                address: addressValue,
                postal: postalValue,
                city: cityValue
            })
        }
    }

    const nameInputValidityClasses = `${classes.control} ${formInputValidity.name? "": classes.invalid}`;
    const addressInputValidityClasses = `${classes.control} ${formInputValidity.address? "": classes.invalid}`;
    const cityInputValidityClasses = `${classes.control} ${formInputValidity.city? "": classes.invalid}`;
    const postalInputValidityClasses = `${classes.control} ${formInputValidity.postal? "": classes.invalid}`;
    return (
        <form className={classes.form} onSubmit={confirmHandler}>
            <div className={nameInputValidityClasses}>
                <label htmlFor="name">Your Name</label>
                <input type="text" id="name" ref={nameInputRef}/>
                {!formInputValidity.name && <p className={classes.error_text}>Please enter valid name.</p>}
            </div>
            <div className={addressInputValidityClasses}>
                <label htmlFor="address">Your Address</label>
                <input type="text" id="address" ref={addressInputRef} />
                {!formInputValidity.address && <p>Please enter valid address.</p>}
            </div>
            <div className={cityInputValidityClasses}>
                <label htmlFor="postal">Postal Code</label>
                <input type="text" id="postal" ref={postalCodeInputRef} />
                {!formInputValidity.postal && <p>Please enter valid postal code.</p>}
            </div>
            <div className={postalInputValidityClasses}>
                <label htmlFor="city">City</label>
                <input type="text" id="city" ref={cityInputRef} />
                {!formInputValidity.city && <p>Please enter valid city.</p>}
            </div>
            <div className={classes.actions}>
                <button type="button" onClick={props.onCancel}>Cancel</button>
                <button className={classes.submit}>Confirm</button>
            </div>
        </form>
    )
};

export default CheckoutForm;