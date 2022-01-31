import { useEffect, useState } from "react";
import { useParams } from "react-router";
import IndividualMovieCard from "../components/IndividualMovieCard";
import { API_KEY, appTitle } from '../globals/globals';

function PageSingleMovie() {


    useEffect(() => {
        document.title = `${appTitle} - Single`
    },[]);

    const {id} = useParams();
    const [movieData, setMovieData] = useState(false);

    // https://api.themoviedb.org/3/movie/438695?api_key=333cb9b6a654afe173fed9c0305cc79c&language=en-US

    useEffect(()=>{

        const getMovie = async () => {
            const res = await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&language=en-U`);
            const movieDataFromAPI = await res.json();
            setMovieData(movieDataFromAPI);
        }

        getMovie();

    },[id]);

    return (
        <section>
            {movieData !== false && <IndividualMovieCard movie={movieData} /> }
        </section>
    );
}

export default PageSingleMovie
