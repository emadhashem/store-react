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

            return state.filter(item => {
                if (item.id === payload.id) {
                    if (item.amount > 1) {
                        return {
                            ...item,
                            amount: item.amount - 1
                        }
                    }
                }
                return item
            })
        }
    }
})

export const { addItem, removeItem } = cartSlice.actions

export default cartSlice.reducer