import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { apiKey } from "../../utils/config";

export const fetchDataTv = createAsyncThunk("tv/fetchDataTv", async (type) => {
    const response = await axios.get(
        `https://api.themoviedb.org/3/tv/${type}?api_key=${apiKey}`
    );
    return response?.data?.results;
});

const initialState = {
    listDataTv: [],
    isLoading: false,
    isError: false,
};

export const tvSlice = createSlice({
    name: "fetchDataTv",
    initialState,
    reducer: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchDataTv.pending, (state) => {
                state.isLoading = true;
                state.isError = false;
            })
            .addCase(fetchDataTv.fulfilled, (state, { payload }) => {
                state.listDataTv = payload;
                state.isLoading = false;
                state.isError = false;
            })
            .addCase(fetchDataTv.rejected, (state) => {
                state.isLoading = false;
                state.isError = true;
            });
    },
});

export default tvSlice.reducer;
