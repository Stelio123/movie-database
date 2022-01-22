import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { API_KEY, appTitle } from '../globals/globals';

function PageSingleMovie() {

    useEffect(() => {
        document.title = `${appTitle} - Single`
    },[]);

    const {id} = useParams();
    const [movie, setMovie] = useState(null);

    // https://api.themoviedb.org/3/movie/438695?api_key=333cb9b6a654afe173fed9c0305cc79c&language=en-US

    useEffect(()=>{

        const getMovie = async () => {
            const res = await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&language=en-U`);
            const movieDataFromAPI = await res.json();
            setMovie(movieDataFromAPI);
        }

        getMovie();

    },[id]);

    return (
        <section>
            {movie !== null && <h2>{movie.title}</h2>}
        </section>
    )
}

export default PageSingleMovie
