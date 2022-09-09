import { useState } from "react";
import useForm from "../hooks/use-form";

const validateEmail = (value) => {
  return String(value)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};

const BasicForm = (props) => {
  const [successMessage, setSuccessMessage] = useState(null);

  const {
    value: firstName,
    valueIsValid: firstNameIsValid,
    valueIsInvalid: firstNameIsInvalid,
    onValueChangeHandler: onFirstNameChangeHandler,
    onValueBlurHandler: onFirstNameBlurHandler,
    reset: firstNameResetHandler
  } = useForm((value) => value.trim() !== "");

  const {
    value: lastName,
    valueIsValid: lastNameIsValid,
    valueIsInvalid: lastNameIsInvalid,
    onValueChangeHandler: onLastNameChangeHandler,
    onValueBlurHandler: onLastNameBlurHandler,
    reset: lastNameResetHandler
  } = useForm((value) => value.trim() !== "");

  const {
    value: email,
    valueIsValid: emailIsValid,
    valueIsInvalid: emailIsInvalid,
    onValueChangeHandler: onEmailChangeHandler,
    onValueBlurHandler: onEmailBlurHandler,
    reset: emailResetHandler
  } = useForm(validateEmail);

  let formIsvalid = false;
  if (firstNameIsValid && lastNameIsValid && emailIsValid) {
    formIsvalid = true;
  }

  const onSubmitHandler = (event) => {
    event.preventDefault();
    if (!formIsvalid) {
      return;
    }
    console.log(firstName, lastName, email);
    setSuccessMessage("Succesfully Submitted.");
    firstNameResetHandler();
    lastNameResetHandler();
    emailResetHandler();
  }

  const firstNameClasses = firstNameIsInvalid ? "form-control invalid" : "form-control";
  const lastNameClasses = lastNameIsInvalid ? "form-control invalid" : "form-control";
  const emailClasses = emailIsInvalid ? "form-control invalid" : "form-control";

  return (
    <form onSubmit={onSubmitHandler}>
      {successMessage}
      <div className='control-group'>
        <div className={firstNameClasses}>
          <label htmlFor='name'>First Name</label>
          <input
            type='text'
            id='name'
            onChange={onFirstNameChangeHandler}
            onBlur={onFirstNameBlurHandler}
            value={firstName}
          />
          {firstNameIsInvalid && <p className="error-text">Please enter valid first name.</p>}
        </div>
        <div className={lastNameClasses}>
          <label htmlFor='name'>Last Name</label>
          <input
            type='text'
            id='last_name'
            onChange={onLastNameChangeHandler}
            onBlur={onLastNameBlurHandler}
            value={lastName}
          />
          {lastNameIsInvalid && <p className="error-text">Please enter valid last name.</p>}
        </div>
      </div>
      <div className={emailClasses}>
        <label htmlFor='name'>E-Mail Address</label>
        <input
          type='email'
          id='name'
          onChange={onEmailChangeHandler}
          onBlur={onEmailBlurHandler}
          value={email}
        />
        {emailIsInvalid && <p className="error-text">Please enter valid Email Address.</p>}
      </div>
      <div className='form-actions'>
        <button disabled={!formIsvalid}>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
