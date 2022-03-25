// Home Page

import {useState, useEffect} from 'react';
import {API_KEY, appTitle} from '../globals/globals';
import Movies from '../components/Movies';
// import MovieDetails from '../components/MovieDetails';

function PageHome({sort}) {

    useEffect(()=> {
        document.title = `${appTitle} - Home`;
    },[]);

    // Good Known Endpoint - Popular Movies
    // https://api.themoviedb.org/3/movie/popular?api_key=333cb9b6a654afe173fed9c0305cc79c&language=en-US&page=1

    const [moviesData, setMoviesData] = useState(null);
    
    
    useEffect(() => {

        const fetchMovies = async () => {
            const res = await fetch (`https://api.themoviedb.org/3/movie/${sort}?api_key=${API_KEY}&language=en-US&page=1`);
            let moviesDataFromAPI = await res.json();
            moviesDataFromAPI = moviesDataFromAPI.results.splice(0, 12);
            setMoviesData(moviesDataFromAPI);
        }

        fetchMovies();

    },[sort]);



    return (
        <section>
            {moviesData != null && <Movies movies={moviesData} /> }
            {/* <MovieDetails movieRatings = {moviesData} /> */}
        </section>
    )
}

export default PageHome
