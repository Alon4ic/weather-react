import React, { useState } from "react";
import HandleDate from "./HandleDate";
import axios from "axios";
import "./index.css";
import image from "../src/images/01d.png";


export default function Show(props) {
   const [weatherData, setWeatherData] = useState({ready: false});
  function handleEvent(response) {
    setWeatherData({
      ready: true,
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

  if(weatherData.ready) {
    return (
     <><div className="search-inner">
      <form className="form-inner" id="search-form">
        <div>
          <input
            className="form-item"
            id="form-item"
            type="search"
            placeholder="City name..."
            autoFocus="on" />
        </div>
        <button className="form-btn" type="submit" autoComplete="off">
          <span className="span-search">Search</span>
          <img className="search-img" src={image} alt="search" />
        </button>
      </form>
    </div><section className="weather-city">
        <div className="row">
          <div className="col-4 city-item">
            <h1 className="city-name">
              {weatherData.city},{' '}
              <span id="country">{weatherData.country}</span>
            </h1>
            <HandleDate date={weatherData.date}/>
          </div>
          <div className="col-4">
            <img className="img-fluid city-img" id="icon" src={weatherData.icon} alt="" />
            <p className="weather" id="description">
              {weatherData.description}
            </p>
          </div>
          <div className="col-4 block-temperatur">
            <div className="temperatur">
              <div className="temperatur-item1">
                <strong className="temperatur-strong" id="strong-temp">
                 {Math.round(weatherData.temperature)}
                </strong>
                <span className="temperature-link">/</span>
                <span className="min-temp" id="min-temp">
                  {Math.round(weatherData.minTemperature)}
                </span>
                <div className="meaning">
                  <a href="/" id="celcius" className="temperature-link-c">C°</a>
                  <p className="temp-text">/</p>
                  <a href="/" id="fahrenheit" className="temperature-link-f">F°</a>
                </div>
              </div>
            </div>

            <strong className="humidity">
              Humidity:{" "}
              <span className="humidity-meaning" id="humidity">
                {Math.round(weatherData.humidity)}
              </span>
              %
            </strong>
            <br />
            <strong className="wind">
              Wind: <span className="wind-meaning" id="wind"></span>
              {Math.round(weatherData.wind)} km/h
            </strong>
          </div>
        </div>
      </section></>
  );
  } else {
  const myKey = "7db589669794c40edb745ea0a4fe919c";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${myKey}&units=metric`;
  axios.get(apiUrl).then(handleEvent);

  return "Loading...";
  }
}