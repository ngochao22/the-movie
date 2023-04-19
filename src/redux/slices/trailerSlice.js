import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { apiKey } from "../../utils/config";

export const fetchTrailers = createAsyncThunk(
    "trailer/fetchTrailer",
    async () => {
        const response = await axios.get(
            `https://api.themoviedb.org/3/tv/airing_today?api_key=${apiKey}`
        );
        return response?.data?.results;
    }
);

const initialState = {
    listTrailer: [],
    isLoading: false,
    isError: true,
};

const trailerSlice = createSlice({
    name: "fetchTrailers",
    initialState,
    reducer: {},
    extraReducers: (builders) => {
        builders
            .addCase(fetchTrailers.pending, (state) => {
                state.isLoading = true;
                state.isError = false;
            })
            .addCase(fetchTrailers.fulfilled, (state, action) => {
                state.listTrailer = action.payload;
                state.isLoading = false;
                state.isError = false;
            })
            .addCase(fetchTrailers.rejected, (state) => {
                (state.isLoading = false), (state.isError = true);
            });
    },
});

export default trailerSlice.reducer;
