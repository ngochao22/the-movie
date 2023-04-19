import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { apiKey } from "../../utils/config";

export const fetchMovies = createAsyncThunk(
    "movies/fetchMovies",
    async (type) => {
        const response = await axios.get(
            `https://api.themoviedb.org/3/trending/all/${type}?api_key=${apiKey}`
        );
        return response?.data?.results;
    }
);

const initialState = {
    listMovies: [],
    isLoading: false,
    isError: false,
};

export const movieSlice = createSlice({
    name: "fetchMovies",
    initialState,
    reducer: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchMovies.pending, (state) => {
                state.isLoading = true;
                state.isError = false;
            })
            .addCase(fetchMovies.fulfilled, (state, action) => {
                state.listMovies = action.payload;
                state.isLoading = false;
                state.isError = false;
            })
            .addCase(fetchMovies.rejected, (state) => {
                state.isError = true;
                state.isLoading = false;
            });
    },
});

export default movieSlice.reducer;
