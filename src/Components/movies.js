import React from "react";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import MovieCard from "./MovieCard";
import movieList from "../movieList";
import NavBar from "../Components/NavBar";

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

  return (<div>
    <NavBar />
    <div className="movie-container">
      
      {movies.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </div></div>
  );
};

export default Movies;
