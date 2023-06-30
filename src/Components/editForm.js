import React, { useState } from "react";
import movieList from "../movieList";

const EditForm = ({ movie, setIsEditing }) => {
  
  const [formData, setFormData] = useState({
    title: movie.title,
    year: movie.year,
    runtime: movie.runtime,
    cast: movie.cast.join(", "),
    director: movie.director,
    plot: movie.plot,
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedMovie = {
      id: movie.id,
      title: formData.title,
      year: formData.year,
      runtime: formData.runtime,
      cast: formData.cast.split(","),
      director: formData.director,
      plot: formData.plot,
    };

   
    const movieIndex = movieList.movies.findIndex(mov => mov.id === movie.id);

  
    if (movieIndex > -1) {
      movieList.movies[movieIndex] = updatedMovie;
    }

    setIsEditing(false);
  };

  const handleCancel = () => {
    setIsEditing(false);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Title:
        <input
          type="text"
          name="title"
          value={formData.title}
          onChange={handleChange}
        />
      </label>
      <label>
        Year:
        <input
          type="number"
          name="year"
          value={formData.year}
          onChange={handleChange}
        />
      </label>
      <label>
        Runtime:
        <input
          type="text"
          name="runtime"
          value={formData.runtime}
          onChange={handleChange}
        />
      </label>
      <label>
        Cast:
        <input
          type="text"
          name="cast"
          value={formData.cast}
          onChange={handleChange}
        />
      </label>
      <label>
        Director:
        <input
          type="text"
          name="director"
          value={formData.director}
          onChange={handleChange}
        />
      </label>
      <label>
        Plot:
        <textarea
          name="plot"
          value={formData.plot}
          onChange={handleChange}
        ></textarea>
      </label>
      <div>
        <button type="submit">Save</button>
        <button type="button" onClick={handleCancel}>
          Cancel
        </button>
      </div>
    </form>
  );
};

export default EditForm;