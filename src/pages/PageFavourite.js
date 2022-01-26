// Page - Favourite
import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import {isItemInStorage, setStorage, removeFromStorage} from '../features/Storage';
import noPoster from '../images/no-movie-poster.jpg';



function PageFavourites() {

    let movie     = localStorage.getItem('your-fav-movies');
    const faveArray = JSON.parse(movie);
    const [isLiked, setIsLiked] = useState(false);

    
     function formatDate(string){
        let options = { year: 'numeric', month: 'long', day: 'numeric' };
        return new Date(string).toLocaleDateString([],options);
    }


    const addMovie = () => {
        if(!isItemInStorage(movie)){
            setStorage(movie);
        setIsLiked(true);

        }else{
        setIsLiked(false);
        }
        
    }
    const removeMovie = () => {
        removeFromStorage(movie);
        setIsLiked(false);
    }

    function likeDivs() {
        return faveArray.map((movie, i) => {
            return (
                <div className={`movie movie-0${i}`} key={i}>
                    <div className="card">
                        { movie.img == null ?
                            <div className="unavailable-poster">
                                <img src={noPoster} alt="No Poster" />
                            </div>
                            : 
                            <div className="available-poster">
                                <Link><img className="poster-img" src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt={`${movie.title} poster`} /></Link>
                            </div>
                        }
                        <div className="content">
                            <h2>{movie.title}</h2>
                            <h4>{formatDate(movie.date)}</h4>
                            <div className="rating"><h3>{movie.rating}</h3></div>
                            <p className="movie-description">{movie.summary}</p>
                            <div className="button-container">
                           <div className='heart' onClick ={() => setIsLiked(!isLiked)}>{isLiked ? <LikeHeart/>:<UnLikeHeart/>}</div>
                                
                            </div>

                        {isItemInStorage(movie) ? <button className="unfave-button" onClick={removeMovie}>Remove from Favourites</button> : 
                        <button className="unfave-button" onClick={addMovie}>Add to Favourites</button>}
                        </div>
                    </div>
                </div>      
            ); 
        });
    }

    function LikedHeart() {
        return (
            <div className="movie-cards-favourites">
                {likeDivs()}
            </div>
        )
    }

    function UnLikedHeart() {
        return (
            <div className="text-box">
                <h2>No movies have been added to favourites.</h2>
                <div className="instructions-box">
                    <p>To add a movie to your favourites, click on the Movie Title or hover over a movie poster to go to that specific movie's description page.</p>
                </div>
            </div>
        )
    }
    
    return (
        <main>
            <section>
                {faveArray && faveArray.length ? <LikedHeart /> : <UnLikedHeart />}
            </section>
        </main>
    )
}


function LikeHeart() {
    return(
        <svg id="like" xmlns="http://www.w3.org/2000/svg" width="20.363" height="18.633" viewBox="0 0 20.363 18.633">
            <g id="like" transform="translate(0 0)" fill="#FF0000">
                <path d="M10.182,18.633C4.707,14.913,1.836,11.528.658,8.7-2.5,1.1,6.514-2.526,10.182,1.955,13.849-2.526,22.859,1.1,19.7,8.7,18.527,11.528,15.656,14.913,10.182,18.633Z" stroke="none"/>
                <path d="M 10.18156433105469 17.41847038269043 C 14.62470436096191 14.31258678436279 17.59219741821289 11.17234897613525 18.78139495849609 8.311599731445312 C 19.8266544342041 5.796229362487793 19.27469444274902 4.112359523773193 18.62759399414062 3.142709493637085 C 17.74557495117188 1.821049571037292 16.14027404785156 1.000009536743164 14.43814468383789 1.000009536743164 C 13.03060436248779 1.000009536743164 11.79375457763672 1.564119577407837 10.95542430877686 2.58842945098877 L 10.18156433105469 3.533979654312134 L 9.407693862915039 2.58842945098877 C 8.569384574890137 1.564119577407837 7.332524299621582 1.000009536743164 5.924984455108643 1.000009536743164 C 4.2230544090271 1.000009536743164 2.61782431602478 1.821099519729614 1.73574435710907 3.14285945892334 C 1.088604331016541 4.112569332122803 0.5365743041038513 5.796459674835205 1.581694364547729 8.311489105224609 C 2.770930051803589 11.17234516143799 5.738424301147461 14.31258678436279 10.18156433105469 17.41847038269043 M 10.18156433105469 18.6329288482666 C 4.707004547119141 14.91254997253418 1.835814356803894 11.52799987792969 0.6582943201065063 8.695339202880859 C -2.496205568313599 1.104180216789246 6.514002799987793 -2.526150703430176 10.18156433105469 1.955079555511475 C 13.8491268157959 -2.52615213394165 22.85933303833008 1.104181051254272 19.704833984375 8.695339202880859 C 18.52731513977051 11.52799987792969 15.65612411499023 14.91254997253418 10.18156433105469 18.6329288482666 Z" stroke="none" fill="#fff"/>
            </g>
        </svg>
    )
  }
  function UnLikeHeart() {
    return(
        <svg id="unlike" xmlns="http://www.w3.org/2000/svg" width="20.363" height="18.633" viewBox="0 0 20.363 18.633">
            <g id="unlike" transform="translate(0 0)" fill="none">
                <path d="M10.182,18.633C4.707,14.913,1.836,11.528.658,8.7-2.5,1.1,6.514-2.526,10.182,1.955,13.849-2.526,22.859,1.1,19.7,8.7,18.527,11.528,15.656,14.913,10.182,18.633Z" stroke="none"/>
                <path d="M 10.18156433105469 17.41847038269043 C 14.62470436096191 14.31258678436279 17.59219741821289 11.17234897613525 18.78139495849609 8.311599731445312 C 19.8266544342041 5.796229362487793 19.27469444274902 4.112359523773193 18.62759399414062 3.142709493637085 C 17.74557495117188 1.821049571037292 16.14027404785156 1.000009536743164 14.43814468383789 1.000009536743164 C 13.03060436248779 1.000009536743164 11.79375457763672 1.564119577407837 10.95542430877686 2.58842945098877 L 10.18156433105469 3.533979654312134 L 9.407693862915039 2.58842945098877 C 8.569384574890137 1.564119577407837 7.332524299621582 1.000009536743164 5.924984455108643 1.000009536743164 C 4.2230544090271 1.000009536743164 2.61782431602478 1.821099519729614 1.73574435710907 3.14285945892334 C 1.088604331016541 4.112569332122803 0.5365743041038513 5.796459674835205 1.581694364547729 8.311489105224609 C 2.770930051803589 11.17234516143799 5.738424301147461 14.31258678436279 10.18156433105469 17.41847038269043 M 10.18156433105469 18.6329288482666 C 4.707004547119141 14.91254997253418 1.835814356803894 11.52799987792969 0.6582943201065063 8.695339202880859 C -2.496205568313599 1.104180216789246 6.514002799987793 -2.526150703430176 10.18156433105469 1.955079555511475 C 13.8491268157959 -2.52615213394165 22.85933303833008 1.104181051254272 19.704833984375 8.695339202880859 C 18.52731513977051 11.52799987792969 15.65612411499023 14.91254997253418 10.18156433105469 18.6329288482666 Z" stroke="none" fill="#fff"/>
            </g>
        </svg>
    )
  }

export default PageFavourites

