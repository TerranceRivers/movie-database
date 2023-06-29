import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div>
      <Link>Home</Link>
      <Link to='/movies'>Horror Movie DataBase</Link>
      <Link to='/movies/add'>Add Movies</Link>
    </div>
  );
};

export default NavBar;
