import React, { useState } from "react";
import Weather from "./Weather";
import Forecast from "./Forecast";
import imageSearch from "../src/images/search.png";
import axios from "axios";
import "./index.css";


export default function Show(props) {
   const [weatherData, setWeatherData] = useState({ready: false});
   const [city, setCity] = useState(props.defaultCity);

  function handleEvent(response) {
    console.log(response.data);
    setWeatherData({
      ready: true,
      lat: response.data.coord.lat,
      lon: response.data.coord.lon,
      temperature: response.data.main.temp,
      minTemperature: response.data.main.temp_min,
      city: response.data.name,
      country: response.data.sys.country,
      description: response.data.weather[0].description,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      icon: `icons/${response.data.weather[0].icon}.png`,
      date: new Date(response.data.dt * 1000),
    });
  }

  function search() {
    const myKey = "7db589669794c40edb745ea0a4fe919c";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${myKey}&units=metric`;
  axios.get(apiUrl).then(handleEvent);

  }

  function handleSubmit(event) {
    event.preventDefault()
    search();
  }

  function handleCityChange(event) {
    setCity(event.target.value);
  }

  if (weatherData.ready) {
    return (
      <div className="search-inner">
        <form className="form-inner" id="search-form" onSubmit={handleSubmit}>
          <div>
            <input
              className="form-item"
              id="form-item"
              type="search"
              placeholder="City name..."
              autoFocus="on"
              onChange={handleCityChange} />
          </div>
          <button className="form-btn" type="submit" autoComplete="off">
            <span className="span-search">Search</span>
            <img className="search-img" src={imageSearch} alt="search" />
          </button>
        </form>
        <Weather data={weatherData} /><Forecast data={weatherData} />
      </div>
  );
  } else {
  search();
  return "Loading...";
  }
}