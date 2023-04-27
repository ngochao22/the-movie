import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { apiKey } from "../../utils/config";

export const fetchMovies = createAsyncThunk(
    "movies/fetchMovies",
    async (type) => {
        const response = await axios.get(
            `https://api.themoviedb.org/3/movie/${type}?api_key=${apiKey}`
        );
        return response?.data?.results;
    }
);

const initialState = {
    listMovies: [],
    listMoviesNew: [],
    genreId: null,
    isButton: false,
    value: "descending",
    isLoading: false,
    isError: false,
};

export const movieSlice = createSlice({
    name: "fetchMovies",
    initialState,
    reducers: {
        setValue: (state, action) => {
            state.value = action.payload;
        },
        handleClick: (state, action) => {
            state.genreId = action.payload;
        },
        handleSubmit: (state, action) => {
            state.listMoviesNew = action.payload;
            state.isButton = true;
        },
        handleButton: (state) => {
            state.isButton = false;
        },
    },
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

export const { setValue, handleClick, handleSubmit, isButton, handleButton } =
    movieSlice.actions;

export default movieSlice.reducer;
