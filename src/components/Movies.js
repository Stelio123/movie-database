import MovieCard from "./MovieCard"

function Movies({movies}) {
    return (
        <div className="movie-box">
            {movies.map(movie => <MovieCard key={movie.id} movie={movie} />)}
        </div>
    )
}

export default Movies
