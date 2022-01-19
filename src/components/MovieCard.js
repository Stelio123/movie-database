import {Link} from 'react-router-dom';
import noPoster from '../images/no-movie-poster.jpg';

function MovieCard({movie}) {
    return (
        <div className="movie-box">
            <div className="movie-card">
                {movie.poster_path === null ?
                <img src={noPoster} alt="No Poster" /> :
                <img src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`} alt={movie.title} />
                }
            </div>
            <div>
                <h3>{movie.title}</h3>
                <Link to={`/movie/${movie.id}`}>More Info</Link>
                <span>{movie.rating}</span>
            </div>
        </div>
    )
}

export default MovieCard
