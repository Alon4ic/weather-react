import React from "react";

import "./index.css";
import image from "../src/images/01d.png";

export default function Show(props) {
  
  return (
    <section className="weather-city">
      <div className="row">
        <div className="col-4 city-item">
          <h1 className="city-name">
            <span id="city">{props.value.cityName}</span>,{" "}
            <span id="country">{props.value.countryName}</span>
          </h1>
          <div className="times-box">
            <h2 id="day" className="day-name">
              {props.value.currentDay},{" "}
              <span id="times" className="times">
                {" "}
                {props.value.currentTime}
              </span>
            </h2>
          </div>
          <h3 className="month-item">
            {" "}
            <span id="month" className="month">
              {props.value.currentMonth}
            </span>
            , <span id="number">{props.value.currentDate}</span>
          </h3>
        </div>
        <div className="col-4">
          <img className="img-fluid city-img" id="icon" src={image} alt="" />
          <p className="weather" id="description">
            {props.value.weather}
          </p>
        </div>
        <div className="col-4 block-temperatur">
          <div className="temperatur">
            <div className="temperatur-item1">
              <strong className="temperatur-strong" id="strong-temp">
                {props.value.maxTemp}
              </strong>
              <span className="temperature-link">°C/</span>
              <span className="min-temp" id="min-temp">
                {props.value.minTemp}
              </span>
              <span className="temp-unit">°C</span>
            </div>
          </div>

          <strong className="humidity">
            Humidity:{" "}
            <span className="humidity-meaning" id="humidity">
              {props.value.humidity}{" "}
            </span>
            %
          </strong>
          <br />
          <strong className="wind">
            Wind: <span className="wind-meaning" id="wind"></span>
            {props.value.wind} km/h
          </strong>
        </div>
      </div>
    </section>
  );
}
