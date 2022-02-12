import { configureStore } from "@reduxjs/toolkit";
import cartReducer from './slices/cart.slice'
import categoryReducer from "./slices/category.slice";
import currencyReducer from "./slices/currency.slice";
export const store = configureStore({
    reducer: {
        cart: cartReducer,
        categoty: categoryReducer,
        currency: currencyReducer
    }
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>