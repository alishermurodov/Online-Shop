import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cartItems: [],
    cartTotalQuantity: 0,
    cartTotalAmount: 0,
}

// addToCart 

const CartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart(state, action){
            state.cartItems.push(action.payload);
        },
    },
});

export const {addToCart} = CartSlice.actions;

export default CartSlice.reducer;