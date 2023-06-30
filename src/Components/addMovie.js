import React, { useState } from "react";
import movieList from "../movieList";
import { useNavigate } from "react-router-dom";
import NavBar from "./NavBar";
import { v4 as uuidv4 } from 'uuid';

const AddMovie = () => {
  const [formData, setFormData] = useState({
    id: uuidv4(),
    title: "",
    year: "",
    runtime: "",
    cast: "",
    director: "",
    plot: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newMovie = {
      id: movieList.movies.length + 1,
      title: formData.title,
      year: formData.year,
      runtime: formData.runtime,
      cast: formData.cast.split(","),
      director: formData.director,
      plot: formData.plot,
    };
    movieList.movies.push(newMovie);
    navigate("/");
  };

  return ( <div>
   <div> <NavBar /></div>
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
      <button type="submit">Add Movie</button>
    </form>
    </div>
  );
};

export default AddMovie;
