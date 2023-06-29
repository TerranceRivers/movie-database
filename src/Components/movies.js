import React from "react";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import MovieCard from "./MovieCard";
import movieList from "../movieList";

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const { subject } = useParams();

  useEffect(() => {
    const filteredMovies = subject
      ? movieList.movies.filter((movie) =>
          movie.title.toLowerCase().includes(subject.toLowerCase())
        )
      : movieList.movies;
    setMovies(filteredMovies);
  }, [subject]);

  return (
    <div>
      {movies.map((movie) => (
        <MovieCard key={movie.title} movie={movie} />
      ))}
    </div>
  );
};

export default Movies;
