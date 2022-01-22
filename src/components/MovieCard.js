import {Link} from 'react-router-dom';
import noPoster from '../images/no-movie-poster.jpg';

function MovieCard({movie}) {


    const dateFormat = (string) => {
        let options = {year:'numeric', month: 'long', day:'numeric'};
        return new Date(string).toLocaleDateString([],options);
    }


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
                <h4>{dateFormat(movie.release_date)}</h4>
                <h4>{movie.vote_avergae}</h4>
                <Link to={`/movie/${movie.id}`}>More Info</Link>
            </div>
        </div>
    )
}

export default MovieCard
