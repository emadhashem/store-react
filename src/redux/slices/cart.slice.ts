import { createSlice, PayloadAction } from "@reduxjs/toolkit";
interface CartItemState {
    id: string
    category: string,
    amount : number
}
const initState: CartItemState[] = []

const cartSlice = createSlice({
    name: 'cart',
    initialState: initState,
    reducers: {
        addItem: (state, { payload }: PayloadAction<CartItemState>) => {
            state.push(payload)
        },
        removeItem: (state, { payload }: PayloadAction<{ id: string }>) => {
            state = state.filter(item => item.id !== payload.id)
        }
    }
})

export const {addItem, removeItem} = cartSlice.actions

export default cartSlice.reducer