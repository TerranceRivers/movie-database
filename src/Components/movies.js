import React from "react";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import MovieCard from "../Component/MovieCard";
import movieList from "../moviesList";

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const { subject } = useParams();

  useEffect(() => {
   
    const filteredMovies = movieList.movies.filter(
      (movie) => movie.title.toLowerCase().includes(subject.toLowerCase())
    );
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
