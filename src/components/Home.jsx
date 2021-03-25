import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="links">
      <Link to="/find">Find a Brewery</Link>
      <Link to="/random">Get a Random Brewery</Link>
    </div>
  );
};

export default Home;
