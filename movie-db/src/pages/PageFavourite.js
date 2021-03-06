// Page - Favourite
import { useSelector } from 'react-redux';
import MovieCard from '../components/MovieCard';




function PageFavourites() {

    const favs = useSelector((state) => state.favs.favourite);

    return (
        <div className="fav-movie-container">
            {favs.length < 1 ? 
                <h3 className="fav-text">Sorry you have no favourited movies. Return to the home page to add a movie to your favourites.</h3>: 
                favs.map(movie => <MovieCard key={movie.id} movie={movie} /> )
            }
        </div>
        
    );

    

}


export default PageFavourites

