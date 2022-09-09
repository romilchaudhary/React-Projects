import { useState } from "react";

const useInput = (validateValue) => {
    const [value, setValue] = useState('');
    const [valueIsTouched, setValueIsTouched] = useState(false);    

    const valueIsValid = validateValue(value);
    const hasError = !valueIsValid && valueIsTouched;

    const onValueChangeHandler = (event) => {
        setValue(event.target.value);
        setValueIsTouched(true);
    };

    const onValueBlurHandler = () => {
        setValueIsTouched(true);
    }

    const reset = () => {
        setValue("");
        setValueIsTouched(false);
    }

    return {
        value,
        valueIsValid,
        valueIsTouched,
        hasError,
        onValueChangeHandler,
        onValueBlurHandler,
        reset
    }
};

export default useInput;