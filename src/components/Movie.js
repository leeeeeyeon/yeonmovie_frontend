import React from "react";
import propTypes from "prop-types";
import { Link } from "react-router-dom";
import "./Movie.css";

function Movie({id, year, title, summary, poster, genres}){
    return (
        <Link to={{
            pathname: `/movie/${id}`,
            state: {
                year,
                title,
                summary,
                poster,
                genres
            }
        }}>
            <div className="movie">
                <img src={poster} alt={title} title={title} />
                <div className="movie_data">
                    <h3 className="movie_title">{title}</h3>
                    <ul className="movie__genres">
                        {genres.map((genre, index) =>
                            <li key={index} className="genres_genre">{genre}</li>
                        )}
                    </ul>
                    <h5 className="movie_year">{year}</h5>
                    <p className="summary">{summary.slice(0, 180)} ...</p>
                </div>
            </div>
        </Link>
    );
}

Movie.propTypes = {
    id: propTypes.number.isRequired,
    year: propTypes.number.isRequired,
    title: propTypes.string.isRequired,
    summary: propTypes.string.isRequired,
    poster: propTypes.string.isRequired,
    genres: propTypes.arrayOf(propTypes.string).isRequired
}

export default Movie;