import { createSlice } from "@reduxjs/toolkit";

const cartOverLaySlice = createSlice({
    name : 'cartOverLay',
    initialState : {openOverLay : false},
    reducers : {
        toggleOverLay : (state) => {
            state.openOverLay = !state.openOverLay
        }
    }
})

export const {toggleOverLay} = cartOverLaySlice.actions

export default cartOverLaySlice.reducer