import { useReducer } from "react";

const initialState = {
    value: "",
    valueIsTouched: false
};

const reducer = (state, action) => {
    switch (action.type){
        case "INPUT_CHANGE":
            return {
                value: action.value,
                valueIsTouched: state.valueIsTouched
            };
        case "BLUR":
            return {
                value: state.value,
                valueIsTouched: true
            }
        default:
            return initialState;
    }
};

const useForm = (validateValue) => {
    const [inputState, dispatch] = useReducer(reducer, initialState);
    // const [value, setValue] = useState('');
    //const [valueIsTouched, setValueIsTouched] = useState(false);

    const valueIsValid = validateValue(inputState.value);
    const valueIsInvalid = !valueIsValid && inputState.valueIsTouched;

    const onValueChangeHandler = (event) => {
        //setValue(event.target.value);
        dispatch({type: "INPUT_CHANGE", value: event.target.value})
    }

    const onValueBlurHandler = (event) => {
        //setValueIsTouched(true);
        dispatch({type:"BLUR"});
    }

    const reset = () => {
        // setValue("");
        // setValueIsTouched(false);
        dispatch({type:"reset"});
    }

    return {
        value: inputState.value,
        valueIsValid,
        valueIsInvalid,
        onValueChangeHandler,
        onValueBlurHandler,
        reset
    }

};

export default useForm;