import {Link} from 'react-router-dom';
import noPoster from '../images/no-movie-poster.jpg';

function MovieCard({movie}) {


    const dateFormat = (string) => {
        let options = {year:'numeric', month: 'long', day:'numeric'};
        return new Date(string).toLocaleDateString([],options);
    }

    // const movieRating = (string) => {
    //     let 
    // }


    return (
        <div className="movie-box">
            <div className="movie-card">
                {movie.poster_path === null ?
                <img src={noPoster} alt="No Poster" /> :
                <img src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`} alt={movie.title} />
                }
            </div>
            <div className="info-container">
                <h3 className="movie-title">{movie.title}</h3>
                <h4 className="movie-date">{dateFormat(movie.release_date)}</h4>
                <h4 className="movie-rating">{movie.vote_average *10}%</h4>
                <p className='movie-description'>{movie.overview}</p>
               <button className="movie-btn"><Link to={`/movie/${movie.id}`}>More Info</Link></button>
            </div>
        </div>
    )
}

export default MovieCard
