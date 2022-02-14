import { createSlice, PayloadAction } from "@reduxjs/toolkit";
interface CartItemState {
    id: string
    category: string,
    amount: number
}
const initState: CartItemState[] = []

const cartSlice = createSlice({
    name: 'cart',
    initialState: initState,
    reducers: {
        addItem: (state, { payload }: PayloadAction<CartItemState>) => {
            state.push(payload)
        },
        removeItem: (state, { payload }: PayloadAction<string>) => {
            return state.filter(item => item.id !== payload)
        },
        increaseAmount: (state, { payload }: PayloadAction<{ id: string }>) => {
            const product = state.find(item => item.id === payload.id)
            if(product) {
                product.amount = product.amount + 1
            }
        },
        decreaseAmount: (state, { payload }: PayloadAction<{ id: string }>) => {

            const product = state.find(item => item.id === payload.id)
            if(product) {
                if(product.amount > 1) {
                    product.amount = product.amount - 1
                } else {
                    return state.filter(item => item.id !== payload.id)
                }
            }
        }
    }
})

export const { addItem, removeItem ,decreaseAmount, increaseAmount } = cartSlice.actions

export default cartSlice.reducer