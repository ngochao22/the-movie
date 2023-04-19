import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    onLeft: true,
    onRight: false,
};

export const toggleSlice = createSlice({
    name: "toggle",
    initialState,
    reducers: {
        handleLeft: (state) => {
            (state.onLeft = true), (state.onRight = false);
        },
        handleRight: (state) => {
            (state.onRight = true), (state.onLeft = false);
        },
    },
});

export const { handleLeft, handleRight } = toggleSlice.actions;

export default toggleSlice.reducer;
