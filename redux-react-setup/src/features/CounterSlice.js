import { createSlice } from "@reduxjs/toolkit";
import { PayloadAction } from "@reduxjs/toolkit";

const initialCounterState = {
    value: 0,
    show: true
};

const counterSlice = createSlice({
    name: 'counter',
    initialState: initialCounterState,
    reducers: {
        increment(state) {
            state.value++;
        },
        decrement(state) {
             state.value--;
        },
        increase(state, action){
            state.value += action.payload
        },
        toggle(state){
            state.show = !state.show
        }
    }
});

export const { increase, increment, decrement, toggle} = counterSlice.actions;

export default counterSlice.reducer;