import React from "react";
import { Link } from "react-router-dom";

const MovieCard = ({ movie }) => {
  return (
    <div className="movie-card">
      <Link to={`/movies/${movie.id}`}>
        <h2 className="movie-title">{movie.title}</h2>
      </Link>
      <div className="movie-info">
        <p>
          <strong>Year:</strong> {movie.year}
        </p>
        <p>
          <strong>Runtime:</strong> {movie.runtime}
        </p>
        <p>
          <strong>Cast:</strong> {movie.cast.join(", ")}
        </p>
        <p>
          <strong>Director:</strong> {movie.director}
        </p>
      </div>
      <p className="movie-plot">{movie.plot}</p>
    </div>
  );
};

export default MovieCard;
