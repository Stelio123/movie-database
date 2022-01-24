// import { Link } from "react-router-dom";
//! RE COMMENT IF DOESNT WORK
import noPoster from "../images/no-movie-poster.jpg";
function IndividualMovieCard({ movie }) {

    const dateFormat = (string) => {
        let options = {year:'numeric', month: 'long', day:'numeric'};
        return new Date(string).toLocaleDateString([],options);
    }


  if (!movie) {
    return null;
  } else {
    // is a movie
    return (
      <>
        <div className="indiv-poster-container">
          {movie.poster_path === null ? (
            <img src={noPoster} alt="No Poster" />
          ) : (
            <img
              className="mass-poster"
              src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
              alt={movie.title}
            />
          )}
          <p className="indiv-movie-title">{movie.title}</p>
          <div className="indiv-movie-info-container">
            <p className="indiv-movie-descrip">{movie.overview}</p>
            <p className="indiv-release-date">{dateFormat(movie.release_date)}</p>
            <p className="indiv-run-time"></p>
            <p className="indiv-view-rating">{movie.vote_average}</p>
            <p className="indiv-movie-genre"></p>
          </div>
        </div>
      </>
    );
  }
}
export default IndividualMovieCard;
