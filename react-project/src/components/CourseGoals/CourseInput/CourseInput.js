import React, { useState } from 'react';
import styled from 'styled-components';

import Button from '../../UI/Button/Button';
import styles from './CourseInput.module.css';

const ERROR_MESSAGE = "Input is not valid";
const SUCCESS_MESSAGE = "Successfully Added";


// using style components
const FormControl = styled.div`

  margin: 0.5rem 0;


& label {
  font-weight: bold;
  display: block;
  margin-bottom: 0.5rem;
}

& input {
  display: block;
  width: 100%;
  border: 1px solid ${props=> props.invalid? "red": "#ccc"};
  font: inherit;
  line-height: 1.5rem;
  padding: 0 0.25rem;
  background: ${props => props.invalid? "red": "" };
}

& input:focus {
  outline: none;
  background: #fad0ec;
  border-color: #8b005d;
}

& label {
  color: ${props => props.invalid? "red": ""};
}

& span {
  color: ${props => props.invalid? "red": ""};
}

& span.success {
  color: ${props => props.invalid? "": "green"};
}
`;

const CourseInput = props => {
  const [enteredValue, setEnteredValue] = useState('');
  const [isValid, setIsValid] = useState(true);
  const [isAdded, setIsAdded] = useState(false);

  const goalInputChangeHandler = event => {
    if (event.target.value.trim().length !== 0) {
      setIsValid(true);
    }
    setEnteredValue(event.target.value);
  };

  const formSubmitHandler = event => {
    event.preventDefault();
    if (enteredValue.trim().length === 0) {
      setIsValid(false);
      setIsAdded(false);
      return;
    }
    setEnteredValue('');
    setIsAdded(true);
    props.onAddGoal(enteredValue);
  };

  return (
    <form onSubmit={formSubmitHandler}>
      {/* <div className={`form-control ${isValid ? "" : 'invalid'}`}> */}
      <div className={`${styles['form-control']} ${!isValid? styles.invalid: ""}`}>
      {/* <FormControl className={isValid? "": "invalid"}> */}
      {/* <FormControl invalid={!isValid}> */}
        {
          isValid ? "" : <span>{ERROR_MESSAGE}</span>
        }
        {
          !isAdded ? "" : <span className={styles.success}>{SUCCESS_MESSAGE}</span>
        }
        {/* {
          isValid ? "": <span style={{color: "red"}}>{ERROR_MESSAGE}</span>
        }
        <label style={{color: isValid ? 'black': 'red'}}>Course Goal</label>
        <input value={enteredValue} style={{borderColor: isValid ? 'black': 'red', backgroundColor: isValid ? '#ccc': 'red'}} type="text" onChange={goalInputChangeHandler} /> */}
        <label>Course Goal</label>
        <input value={enteredValue} type="text" onChange={goalInputChangeHandler} />
      {/* </FormControl> */}
      </div>
      <Button type="submit">Add Goal</Button>
    </form>
  );
};

export default CourseInput;
