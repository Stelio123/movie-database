// Page - Favourite
import { useState } from 'react';
//import { Link } from 'react-router-dom';
//import {isItemInStorage, setStorage, removeFromStorage} from '../features/Storage';
import noPoster from '../images/no-movie-poster.jpg';
import { useSelector } from 'react-redux';
import MovieCard from '../components/MovieCard';




function PageFavourites() {

    const favs = useSelector((state) => state.favs.favourite);

    return (
        <div className="movie-container">
            {favs.length < 1 ? 
                <p>No Favs</p>: 
                favs.map(movie => <MovieCard key={movie.id} movie={movie} /> )
            }
        </div>
    );

    

}


export default PageFavourites

