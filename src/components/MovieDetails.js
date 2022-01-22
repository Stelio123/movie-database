import {useState, useEffect} from 'react';
import { API_KEY } from '../globals/globals';



function MovieDetails ({sort}) {

    const [movieRating, setMovieRating] = useState(null);

    useEffect(() => {

        const fetchRating = async () =>{
            const res = await fetch (`https://api.themoviedb.org/3/movie/${sort}/reviews?api_key=${API_KEY}&language=en-US&page=1`);
            let movieRatingFromAPI = await res.json();
            movieRatingFromAPI = movieRatingFromAPI.results.splice(0, 12);
            setMovieRating(movieRatingFromAPI);
        }
        
        fetchRating();

    },[sort]);

    return (
        <section>
            {movieRating}
        </section>
    )
}

export default MovieDetails;
