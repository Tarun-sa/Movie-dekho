import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { APIKEY } from '../../common/API/MovieApiKey';
import movieAPI from '../../common/API/movieAPI';

// asyncthunkfor movies-This is an async action creator
export const fetchAsyncMovies = createAsyncThunk('movies/fetchAsyncMovies', async (term) => {
    const response = await movieAPI.get(`?apikey=${APIKEY}&s=${term}&type=movie`)
    return response.data;
});
// asyncthunk for shows-This is an async action creator
export const fetchAsyncShows = createAsyncThunk('movies/fetchAsyncShows', async (term) => {
    const response = await movieAPI.get(`?apikey=${APIKEY}&s=${term}&type=series`)
    return response.data;
});
// asyncthunk for show and movie details-This is an async action creator
export const fetchAsyncMovieOrShowDetail = createAsyncThunk('movies/fetchAsyncMovieOrShowDetail', async (id) => {
    const response = await movieAPI.get(`?apikey=${APIKEY}&i=${id}&plot=full`)
    return response.data;
});
// states
const initialState = {
    movies: {},
    shows: {},
    details: {}
}
// slice
const movieSlice = createSlice({
    name: "movies",
    initialState,
    reducers: {
        removeMovieOrShow: (state) => {
            state.details = {}
        }
    },
    extraReducers: {
        [fetchAsyncMovies.pending]: () => {
            console.log('pending');
        },
        [fetchAsyncMovies.fulfilled]: (state, { payload }) => {
            console.log('fullfiled successfully');
            return { ...state, movies: payload }
        },
        [fetchAsyncMovies.rejected]: () => {
            console.log('rejected');
        },
        // for shows
        [fetchAsyncShows.fulfilled]: (state, { payload }) => {
            console.log('fullfiled successfully');
            return { ...state, shows: payload }
        },
        // for show/movie details
        [fetchAsyncMovieOrShowDetail.fulfilled]: (state, { payload }) => {
            console.log('fullfiled successfully');
            return { ...state, details: payload }
        },
    }
})

export default movieSlice.reducer;
export const getAllMovies = (redu) => redu.movies.movies;
export const getAllShows = (redu) => redu.movies.shows;
export const movieOrShowDetails = (redu) => redu.movies.details;
export const { removeMovieOrShow } = movieSlice.actions;