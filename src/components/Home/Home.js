import React, { useEffect } from 'react'

import MovieListing from '../MovieListing/MovieListing';

import { useDispatch } from 'react-redux';
import { fetchAsyncMovies, fetchAsyncShows } from '../../features/movies/movieSlice';




const Home = () => {
    const dispatch = useDispatch();
    const defaultMovie = "Dumb";
    const defaultShow = "game"
    useEffect(() => {
        dispatch(fetchAsyncMovies(defaultMovie))
        dispatch(fetchAsyncShows(defaultShow))
    }, [dispatch])

    return (
        <div className='home'>
            <div className='banner-img'>
                <MovieListing />
            </div>
        </div>
    )
}

export default Home