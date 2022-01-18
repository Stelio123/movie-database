import MovieCard from "./MovieCard"

function Movies({movies}) {
    return (
        <div >
            {movies.map(movie => <MovieCard key={movie.id} movie={movie} />)}
        </div>
    )
}

export default Movies
