import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/CounterSlice";
import AuthReducer from "../features/Auth"

const store = configureStore({
    reducer: {
        counter: counterReducer,
        auth: AuthReducer
    }
});

export default store;