import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        items: [],
        totalQuantity: 0
    },
    reducers:{
        addItemToCarts(state, action){
            const newItem = action.payload;
            const existingItem = state.items.find( item => item.id === newItem.id);
            state.totalQuantity++;
            if(!existingItem){
                state.items.push({
                    id: newItem.id,
                    title: newItem.name,
                    price: newItem.price,
                    quantity: 1,
                    totalPrice: newItem.price
                });
            } else{
                existingItem.quantity++;
                existingItem.totalPrice = existingItem.totalPrice + existingItem.price;
            }
        },
        removeItemFromCart(state, action){
            const id = action.payload;
            const existingItems = state.items.find(item => item.id === id);
            if (existingItems.quantity === 1){
                state.items = state.items.filter(item => item.id !== id);
            }
            else{
                existingItems.quantity--;
            } 
            existingItems.totalPrice = existingItems.totalPrice - existingItems.price;
            state.totalQuantity--;
        }
    }
})

export const {addItemToCarts, removeItemFromCart} = cartSlice.actions;

export default cartSlice;