import { createSlice, PayloadAction } from "@reduxjs/toolkit";
const initState = {
    id: 0,
    name: ''
}
const categorySlice = createSlice({
    name: 'category',
    initialState: initState,
    reducers: {
        changeCategory: (state, { payload }: PayloadAction<{ id: number, name: string }>) => {
            state.id = payload.id
            state.name = payload.name
        }
    }
})

export const {changeCategory} = categorySlice.actions

export default categorySlice.reducer