import React from "react";
import { Link } from "react-router-dom";
import "../App.css";

const NavBar = () => {
  return (
    <div>
      <Link to="/">
        <img
          className="header-img"
          src="../images/goodtimes.jpg"
          alt="goodtimes"
        />
      </Link>
    </div>
  );
};

export default NavBar;
