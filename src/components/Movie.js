import React from "react";
import propTypes from "prop-types";
import { Link } from "react-router-dom";
import "./css/Movie.css";

function Movie({id, release_date, title, overview, poster, genres}){
        const idList = [
      {"id":28,"name":"Action"},
      {"id":12,"name":"Adventure"},
      {"id":16,"name":"Animation"},
      {"id":35,"name":"Comedy"},
      {"id":80,"name":"Crime"},
      {"id":99,"name":"Documentary"},
      {"id":18,"name":"Drama"},
      {"id":10751,"name":"Family"},
      {"id":14,"name":"Fantasy"},
      {"id":36,"name":"History"},
      {"id":27,"name":"Horror"},
      {"id":10402,"name":"Music"},
      {"id":9648,"name":"Mystery"},
      {"id":10749,"name":"Romance"},
      {"id":878,"name":"Science Fiction"},
      {"id":10770,"name":"TV Movie"},
      {"id":53,"name":"Thriller"},
      {"id":10752,"name":"War"},
      {"id":37,"name":"Western"}
    ];
    
    function findGenreName(num){
        var result;
        idList.forEach(function(item){
            if(item.id===num){
            result = item.name;
            }
        }
        );
        return result;
    }

    return (
        <Link to={{
            pathname: `/movie/${id}`,
            state: {
                release_date,
                title,
                overview,
                poster,
                genres
            }
        }}>
            <div className="movie">
                <img src={`https://image.tmdb.org/t/p/original/${poster}`} alt={title} title={title} />
                <div className="movie_data">
                    <h3 className="movie_title">{title}</h3>
                    <ul className="movie__genres">
                        {genres.map((genre, index) =>
                            <li key={index} className="genres_genre">{findGenreName(genre)}</li>
                        )}
                    </ul>
                    <h5 className="movie_year">{release_date}</h5>
                    <p className="summary">{overview.slice(0, 180)} ...</p>
                </div>
            </div>
        </Link>
    );
}

Movie.propTypes = {
    id: propTypes.number.isRequired,
    release_date: propTypes.string.isRequired,
    title: propTypes.string.isRequired,
    overview: propTypes.string.isRequired,
    poster: propTypes.string.isRequired,
    //genres: propTypes.arrayOf(propTypes.string).isRequired
}

export default Movie;