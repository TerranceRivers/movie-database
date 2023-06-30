import React, { useState, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import movieList from './movieList';

function App() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    setMovies(movieList.movies);
  }, []);

  const updateMovie = (updatedMovie) => {
    const updatedMovies = movies.map(movie => {
      return movie.id === updatedMovie.id ? updatedMovie : movie;
    });
    setMovies(updatedMovies);
  }

  return (
    <div className="App">
      <Outlet movies={movies} updateMovie={updateMovie} />
    </div>
  );
}

export default App;
