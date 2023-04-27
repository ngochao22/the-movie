import { configureStore } from "@reduxjs/toolkit";
import movieTrendingReducer from "./slices/movieTrendingSlice";
import toggleReducer from "./slices/toggleSlice";
import trailerReducer from "./slices/trailerSlice";
import tvReducer from "./slices/tvSlice";
import genresReducer from "./slices/genresSlice";
import movieReducer from "./slices/movieSlice";

export const store = configureStore({
    reducer: {
        trending: movieTrendingReducer,
        toggle: toggleReducer,
        trailer: trailerReducer,
        tv: tvReducer,
        genres: genresReducer,
        movie: movieReducer,
    },
});
