import React from 'react';
import { Link } from 'react-router-dom';
import { Outlet } from 'react-router-dom';
const NavBar = () => {
  return (
    <div>
      <Link to="/">Home</Link>

      <Link to="/movies/add">Add Movie</Link>
    </div>
  );
};

export default NavBar;