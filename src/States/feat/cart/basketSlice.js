import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  basket: [ ],
}

export const basketSlice = createSlice({
  name: 'basket',
  initialState,
  reducers: {
    
    addToBasket: (state, action) => {
        state.basket.push(action.payload);
    },
    removeFromBasket: (state, action) => {
        state.basket = state.basket.filter(item => item.id !== action.payload.id);
    },
    returnBasket:(state)=>{
        return state.basket;
    }
  },
})

// Action creators are generated for each case reducer function
export const {  removeFromBasket,addToBasket  ,  returnBasket } = basketSlice.actions

export default basketSlice.reducer