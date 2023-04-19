import { configureStore } from "@reduxjs/toolkit";
import movieReducer from "./slices/movieSlice";
import toggleReducer from "./slices/toggleSlice";
import trailerReducer from "./slices/trailerSlice";
import tvReducer from "./slices/tvSlice";

export const store = configureStore({
    reducer: {
        movie: movieReducer,
        toggle: toggleReducer,
        trailer: trailerReducer,
        tv: tvReducer,
    },
});
