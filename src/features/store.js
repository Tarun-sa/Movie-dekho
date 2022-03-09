import { configureStore } from "@reduxjs/toolkit";
import movieReducer from './movies/movieSlice';

export const store = configureStore({
    reducer: {
        movies: movieReducer
    }
});