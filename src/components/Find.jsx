import React, { useState } from "react";
import { Link } from "react-router-dom";
import Axios from "axios";

const Find = () => {
  const [zip, setZip] = useState("");
  const [brewery, setBrewery] = useState([]);

  const handleChange = (e) => {
    setZip(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await Axios.get(
      `https://api.openbrewerydb.org/breweries?by_postal=${zip}`
    );
    console.log(response.data);
    setBrewery(response.data);
  };

  const renderLocation = () => {
    return brewery.map((brewLoc) => {
      return (
        <ul>
          <li>{brewLoc.name}</li>
          <li>
            {brewLoc.street} {brewLoc.state}, {brewLoc.postal_code}
          </li>
          <li>{brewLoc.phone}</li>
          <li>{brewLoc.website_url}</li>
        </ul>
      );
    });
  };
  return (
    <div>
      <Link to="/">Back</Link>
      <h1>Find a Brewery</h1>
      <form onSubmit={handleSubmit}>
        <input onChange={handleChange} />
      </form>
      {renderLocation()}
    </div>
  );
};

export default Find;
