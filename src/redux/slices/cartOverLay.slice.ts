import { createSlice } from "@reduxjs/toolkit";

const cartOverLaySlice = createSlice({
    name : 'cartOverLay',
    initialState : {openOverLay : false},
    reducers : {
        toggleOverLay : (state) => {
            state.openOverLay = !state.openOverLay
        },
        closeOverlay : (state) => {
            state.openOverLay = false
        }
    }
})

export const {toggleOverLay, closeOverlay} = cartOverLaySlice.actions

export default cartOverLaySlice.reducer