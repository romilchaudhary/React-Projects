import React, { useState, useEffect, useReducer, useContext } from 'react';

import Card from '../UI/Card/Card';
import classes from './Login.module.css';
import Button from '../UI/Button/Button';
import AuthContext from '../store/auth-context';
import Input from '../UI/Input/Input';


const emailReducer = (state, action) => {
  if (action.type === "USER_INPUT") {
    return {
      val: action.val,
      isValid: action.val.includes('@')
    }
  }
  if (action.type === "INPUT_BLUR") {
    return {
      val: state.val,
      isValid: state.val.includes("@")
    }
  }
  return {
    val: '',
    isValid: false
  }
}


const passwordReducer = (state, action) => {
  if (action.type === "PASS_INPUT") {
    return {
      val: action.val,
      isValid: action.val.trim().length > 6
    }
  }
  if (action.type === "PASS_BLUR") {
    return {
      val: state.val,
      isValid: state.val.trim().length > 6
    }
  }
  return {
    val: "",
    isValid: false
  }
}



const Login = (props) => {
  const authLoginCtx = useContext(AuthContext);
  // const [enteredEmail, setEnteredEmail] = useState('');
  // const [emailIsValid, setEmailIsValid] = useState();
  // const [enteredPassword, setEnteredPassword] = useState('');
  // const [passwordIsValid, setPasswordIsValid] = useState();
  const [formIsValid, setFormIsValid] = useState(false);

  const [emailState, dispatchEmail] = useReducer(emailReducer, {
    val: "",
    isValid: null
  });

  const [passwordState, dispatchPassword] = useReducer(passwordReducer, {
    val: "",
    isValid: null
  })

  // object destructuring
  const { isValid: emailIsValid } = emailState
  const { isValid: passIsValid } = passwordState
  useEffect(() => {
    //console.log("check user validity!")
    const identifier = setTimeout(() => {
      console.log("check user validity! after 500 miliseconds")
      setFormIsValid(
        emailIsValid && passIsValid
      );
    },
      500)

    // effect cleanup
    return () => {
      console.log("cleanup")
      clearTimeout(identifier)
    };
  }, [emailIsValid, passIsValid]);

  const emailChangeHandler = (event) => {
    // setEnteredEmail(event.target.value);    
    dispatchEmail({ type: 'USER_INPUT', val: event.target.value });
  };

  const passwordChangeHandler = (event) => {
    // setEnteredPassword(event.target.value);
    dispatchPassword({ type: "PASS_INPUT", val: event.target.value });
  };

  const validateEmailHandler = () => {
    // setEmailIsValid(enteredEmail.includes('@'));
    dispatchEmail({ type: "INPUT_BLUR" })
  };

  const validatePasswordHandler = () => {
    // setPasswordIsValid(enteredPassword.trim().length > 6);
    dispatchEmail({ type: "PASS_BLUR" });
  };

  const submitHandler = (event) => {
    event.preventDefault();
    authLoginCtx.onLogin(emailState.val, passwordState.val);
  };

  return (
    <Card className={classes.login}>
      <form onSubmit={submitHandler}>
        <Input
          label="E-mail:"
          id="email"
          value={emailState.val}
          isValid={emailState.isValid}
          type="text"
          onChange={emailChangeHandler}
          onBlur= {validateEmailHandler}
        />
        <Input
          label="Password:"
          id="password"
          value={passwordState.val}
          isValid={passwordState.isValid}
          type="password"
          onChange={passwordChangeHandler}
          onBlur= {validatePasswordHandler}
        />        
        <div className={classes.actions}>
          <Button type="submit" className={classes.btn} disabled={!formIsValid}>
            Login
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default Login;
