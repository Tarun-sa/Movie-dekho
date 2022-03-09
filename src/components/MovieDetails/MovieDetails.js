import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'
import { fetchAsyncMovieOrShowDetail } from '../../features/movies/movieSlice'
import { useSelector } from 'react-redux'
import { movieOrShowDetails } from '../../features/movies/movieSlice'
import './MovieDetails.scss';
import { removeMovieOrShow } from '../../features/movies/movieSlice'
import Spinner from '../Spinner/Spinner';


const MovieDetails = () => {



    const { imdbID } = useParams();
    // later callling after useEffect
    const dispatch = useDispatch();
    const details = useSelector(movieOrShowDetails)
    console.log(details)
    // the above part

    useEffect(() => {
        dispatch(fetchAsyncMovieOrShowDetail(imdbID))
        return () => {
            dispatch(removeMovieOrShow())
        }
    }, [dispatch, imdbID])

    return (
        <div className='movie-section'>

            {Object.keys(details) === 0 ? <Spinner />
                : <>

                    <div className="left-section">
                        <div className="movie-title">{details.Title}</div>
                        <div className="movie-rating">
                            <span>IMDB Rating:  <i className="fa fa-star"></i>{details.imdbRating}</span>
                            <span>IMDB Votes: <i className="fa fa-thumbs-up"></i>{details.imdbVotes} </span>
                            <span>IMDB Runtime: <i className="fa fa-film"></i>{details.Runtime} </span>
                            <span>IMDB Year: <i className="fa fa-calendar"></i>{details.Year}</span>
                        </div>
                        <div className="movie-plot">{details.Plot}</div>
                        <div className="movie-info">
                            <div>
                                <span>Director</span>
                                <span>{details.Director}</span>
                            </div>
                            <div>
                                <span>Actors</span>
                                <span>{details.Actors}</span>
                            </div>
                            <div>
                                <span>Genre</span>
                                <span>{details.Genre}</span>
                            </div>
                            <div>
                                <span>Languages</span>
                                <span>{details.Language}</span>
                            </div>
                            <div>
                                <span>Awards</span>
                                <span>{details.Awards}</span>
                            </div>
                        </div>
                    </div>
                    <div className="right-section">
                        <img src={details.Poster} alt={details.Title} />
                    </div>
                </>}

        </div>
    )
}

export default MovieDetails