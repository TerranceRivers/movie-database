import React from "react";
import { useParams } from "react-router-dom";
import movieList from "../movieList";
import NavBar from "./NavBar";

const MovieDetails = () => {
  const { id } = useParams();
  const movie = movieList.movies.find((movie) => movie.id === Number(id));

  if (!movie) {
    return <div>Movie not found</div>;
  }

  return (
    <div>
        <NavBar/>
      <h2>{movie.title}</h2>
      <p>Year: {movie.year}</p>
      <p>Runtime: {movie.runtime}</p>
      <p>Cast: {movie.cast.join(", ")}</p>
      <p>Director: {movie.director}</p>
      <p>Plot: {movie.plot}</p>
    </div>
  );
};

export default MovieDetails;
