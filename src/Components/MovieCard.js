import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
const MovieCard = ({ movie }) => {
    const navigate = useNavigate();
  return (
    <div className="movie-card">
      <Link  to={`/movies/${movie.id}`}>
        <h2 className="movie-title">{movie.title}</h2>
     
      <div className="movie-info">
    
      
        <p>
          <strong>Director:</strong> {movie.director}
        </p>
      </div>
       </Link>
    </div>
  );
};

export default MovieCard;