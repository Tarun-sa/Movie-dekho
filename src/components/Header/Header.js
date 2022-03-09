import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { Link } from "react-router-dom";
import { fetchAsyncMovies, fetchAsyncShows } from '../../features/movies/movieSlice';
import user from '../../images/user.png';
import './Header.scss';


const Header = () => {

    const [term, setTerm] = useState("");
    const dispatch = useDispatch();

    const handleChange = (event) => {
        const { value } = event.target;
        setTerm(value);
    }
    const submitHandler = (event) => {
        if (term === "")
            alert("Please enter text")
        else {
            dispatch(fetchAsyncMovies(term))
            dispatch(fetchAsyncShows(term))
        }
        event.preventDefault();

    }
    return (
        <div className='header'>
            <div className="logo"><Link to='/'>Movie Dekho</Link></div>
            <div className="search-bar">
                <form onSubmit={submitHandler}>
                    <input type="text" value={term} placeholder='Search movie or show' name="search" onChange={handleChange} />
                    <button type='submit'> <i className="fa fa-search"></i> </button>
                </form>
            </div>
            <div className="user-img">
                <img src={user} alt="user-img" />
            </div>
        </div>
    )
}

export default Header