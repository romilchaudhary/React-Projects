import { useState, useRef, useEffect } from "react";
import useInput from "../hooks/use-input";

const SimpleInput = (props) => {
  const {
    value: name, 
    valueIsValid:nameInputIsValid, 
    valueIsTouched: nameIsTouched,
    hasError: nameHasError,
    onValueChangeHandler: onNameChangeHandler,
    onValueBlurHandler: onNameBlurHandler,
    reset: resetHandler
  } = useInput((value) => value.trim() !== "");
  // const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  // const [error, setError] = useState(false);
  // const [nameIsTouched, setNameIsTouched] = useState(false);
  const [emailIsTouched, setEmailIsTouched] = useState(false);
  // const [formIsValid, setFormIsValid] = useState(false);
  const nameRef = useRef();

  const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };

  // const nameInputIsValid = ( name.toLowerCase() === "romil" && name !== "");
  const emailInputIsValid = validateEmail(email);

  let formIsValid = false;
  if (nameInputIsValid && emailInputIsValid){
    formIsValid = true;
  }
  // useEffect(() => {
  //   if (nameInputIsValid) {
  //     setFormIsValid(true);
  //   }
  //   else{
  //     setFormIsValid(false);
  //   }
  // }, [nameInputIsValid]); // we can do this for multiple form fields

  // const onNameChangeHandler = (event) => {
  //   setName(event.target.value);
  //   setNameIsTouched(true);

    // we used event.target.value instead of name here? 
    //because after setting a state it goes to scheduling state and we can't use this updated state instantly
    // if (event.target.value.toLowerCase() === "romil") {
    //   setError(false);
    //   return;
    // }
    // setError(true);
  // }

  const onEmailChnageHandler = (event) => {
    setEmail(event.target.value);
    setEmailIsTouched(true);
  }

  // const onNameBlurHandler = () => {
  //   setNameIsTouched(true);
    // if (name.toLowerCase() !== "romil" || name.trim() === "") {
    //   setError(true);
    //   return;
    // }
  // }

  const onEmailBlurHandler = () => {
    setEmailIsTouched(true);
  }

  const onSubmitHandler = (event) => {
    event.preventDefault();
    // setNameIsTouched(true);
    // const nameFromRef = nameRef.current.value;
    // if (nameFromRef.toLowerCase() !== "romil" || nameFromRef.trim() === "") {
    //   setError(true);
    //   return;
    // }
    if (nameInputIsValid){
      alert(name);
      
      // setError(false);
      // setName("") // better approach for reseting input values
      // nameRef.current.value = ''; // not ideal, can't manipulate the dom let react do this own

      // setNameIsTouched(false);
      resetHandler();
    }
    setEmail("");
    setEmailIsTouched(false);   
  }

  // const nameIsInvalid = error && nameIsTouched;
  // const nameIsInvalid = !nameInputIsValid && nameIsTouched;
  const emailIsInvalid = !emailInputIsValid && emailIsTouched;
  const inputFormClasses = nameHasError ? "form-control invalid" : "form-control";
  const emailFormClasses = emailIsInvalid ? "form-control invalid" : "form-control";

  return (
    <form onSubmit={onSubmitHandler}>
      <div className={inputFormClasses}>
        <label htmlFor='name'>Your Name</label>
        <input
          type='text'
          id='name'
          onChange={onNameChangeHandler}
          onBlur={onNameBlurHandler}
          ref={nameRef}
          value={name}
        />
        {nameHasError && <p className="error-text">Name is not Correct.</p>}
      </div>
      <div className={emailFormClasses}>
        <label htmlFor='email'>Your Email</label>
        <input
          type='text'
          id='email' 
          onChange={onEmailChnageHandler}   
          onBlur={onEmailBlurHandler}
          value={email}      
        />
        {emailIsInvalid && <p className="error-text">Email is not Correct.</p>}
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
