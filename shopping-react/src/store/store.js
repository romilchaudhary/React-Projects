import { configureStore } from '@reduxjs/toolkit';
import uiSlice from '../features/uiSlice';
import cartSlice from '../features/CartSlice';

const store = configureStore({
    reducer:
    {
        ui: uiSlice.reducer,
        cart: cartSlice.reducer
    }
});

export default store;