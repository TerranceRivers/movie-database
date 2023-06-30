import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-brand">Horror Database</div>
      <ul className="navbar-menu">
        <li className="navbar-item">
          <Link to="/" className="navbar-link">Home</Link>
        </li>
        <li className="navbar-item">
          <Link to="/movies/add" className="navbar-link">Add Movie</Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
