import { configureStore } from '@reduxjs/toolkit'
import onlineShop from '../reducers/online-shop.jsx'
// import CartSlice from '../reducers/CartSlice.js'

export const store = configureStore({
  reducer: {
    onlineShop: onlineShop,
    // addToCart 
    // cart: CartSlice
  },
})