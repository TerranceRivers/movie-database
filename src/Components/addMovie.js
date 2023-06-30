import React, { useState } from "react";
import movieList from "../movieList";
import { useNavigate } from "react-router-dom";
import NavBar from "./NavBar";
import { v4 as uuidv4 } from "uuid";
const AddMovie = () => {
  const [formData, setFormData] = useState({
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
      id:  uuidv4(),
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

  return (<div>
     <NavBar />
    <div className="form-container">
     
      <form onSubmit={handleSubmit}>
        <h2>Add Movie</h2>
        <div className="form-group">
          <label htmlFor="title">Title:</label>
          <input
            type="text"
            name="title"
            id="title"
            value={formData.title}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="year">Year:</label>
          <input
            type="number"
            name="year"
            id="year"
            value={formData.year}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="runtime">Runtime:</label>
          <input
            type="text"
            name="runtime"
            id="runtime"
            value={formData.runtime}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="cast">Cast:</label>
          <input
            type="text"
            name="cast"
            id="cast"
            value={formData.cast}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="director">Director:</label>
          <input
            type="text"
            name="director"
            id="director"
            value={formData.director}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="plot">Plot:</label>
          <textarea
            name="plot"
            id="plot"
            value={formData.plot}
            onChange={handleChange}
          ></textarea>
        </div>
        <button type="submit">Add Movie</button>
      </form>
    </div>
    </div>
  );
};

export default AddMovie;
