import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { apiKey } from "../../utils/config";

export const fetchDataGenres = createAsyncThunk(
    "genres/fetchDataGenres",
    async (type) => {
        const response = await axios.get(`
        https://api.themoviedb.org/3/genre/${type}/list?api_key=${apiKey}`);
        return response?.data?.genres;
    }
);

const initialState = {
    listGenres: [],
};

const genresSlice = createSlice({
    name: "fetchDataGenres",
    initialState,
    reducer: {},
    extraReducers: (builder) => {
        builder.addCase(fetchDataGenres.fulfilled, (state, action) => {
            state.listGenres = action.payload;
        });
    },
});

export default genresSlice.reducer;
