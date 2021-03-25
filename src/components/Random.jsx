import React, { useState, useEffect } from "react";
import Axios from "axios";
import "../App.css";

const Random = () => {
  const [random, setRandom] = useState([]);

  const randomBrewery = async () => {
    const response = await Axios.get(
      "https://api.openbrewerydb.org/breweries?per_page=25"
    );
    console.log(response.data);
    setRandom(response.data);
  };

  useEffect(() => {
    randomBrewery();
  }, []);

  const renderBrewery = () => {
    return random.map((brew) => {
      return (
        <ul>
          <li>{brew.name}</li>
          <li>
            {brew.street} {brew.state}, {brew.postal_code}
          </li>
          <li>{brew.phone}</li>
          <li>{brew.website_url}</li>
        </ul>
      );
    });
  };
  return (
    <div>
      <h1>Random Brewery</h1>
      {renderBrewery()}
    </div>
  );
};

export default Random;
