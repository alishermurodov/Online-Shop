import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

const api = 'http://localhost:3000/api/products'
console.log(api);

// getProduct
export const getProduct = createAsyncThunk(
    "Products/getProduct",
    async () => {
        try {
            const { data } = await axios.get(api)
            // console.log(data);
            return data
        } catch (error) {
            console.error(error);
        }
    }
)

export const onlineShop = createSlice({
    name: 'Products',
    initialState: {
        Products: [],
        isLoading: false
    },
    reducers: {

    },
    extraReducers: (builder) => {
        builder.addCase(getProduct.pending, (state, action) => { })
        builder.addCase(getProduct.fulfilled, (state, action) => {
            state.Products = action.payload
        })
    }
})

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount } = onlineShop.actions

export default onlineShop.reducer