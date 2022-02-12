import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Currency } from "../../commons/interfaces/Currency";
const initState : Currency = {
    label : 'USD',
    symbol : '$'
}
const currencySlice = createSlice({
    name : 'currency',
    initialState : initState,
    reducers : {
        changeCurrency : (state, {payload} : PayloadAction <Currency>) => {
            state.label = payload.label
            state.symbol = payload.symbol
        }
    }
    
})

export const {changeCurrency} = currencySlice.actions
export default currencySlice.reducer