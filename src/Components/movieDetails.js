import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import movieList from "../movieList";
import NavBar from "./NavBar";
import EditForm from "./editForm";

const MovieDetails = ({ movies, updateMovie }) => {
  const { id } = useParams();
  const movie = movieList.movies.find((movie) => movie.id.toString() === id);
  const [isEditing, setIsEditing] = useState(false);
  const navigate = useNavigate();
  if (!movie) {
    return <div>Movie not found</div>;
  }

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleDelete = () => {
    const remainingMovies = movieList.movies.filter(
      (mov) => mov.id !== movie.id
    );
    movieList.movies = remainingMovies;
    navigate("/");
  };

  return (
    <div>
      {" "}
      <NavBar />
      <div className="movie-details-card" >
        <h2>{movie.title}</h2>
        <p>Year: {movie.year}</p>
        <p>Runtime: {movie.runtime}</p>
        <p>Cast: {movie.cast.join(", ")}</p>
        <p>Director: {movie.director}</p>
        <p>Plot: {movie.plot}</p>
        <div>
          {isEditing ? (
            <EditForm
              movie={movie}
              setIsEditing={setIsEditing}
              updateMovie={updateMovie}
            />
          ) : (
            <div>
              <button onClick={handleEdit}>Edit</button>
              <button onClick={handleDelete}>Delete</button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;
