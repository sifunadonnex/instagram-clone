import { createSlice } from "@reduxjs/toolkit"
const initialState = {
    bools: false,
};
const boolSlice = createSlice({
    name: "bool",
    initialState,
    reducers: {
        setBool: (state, action) => {
            state.bools = action.payload.bools;
        },
    },
});

export const { setBool } = boolSlice.actions;
export const selectBoolean = (state) => state.boool.bools;
export default boolSlice.reducer