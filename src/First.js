import React from "react";
import "./index.css";

import imagehumidity from "../src/images/humidity.png";
import imagewind from "../src/images/wind.png";
import imageprecipitation from "../src/images/precipitation.png";
import imagebarometer from "../src/images/barometer.png";

export default function First(props) {
  function maxTemp() {
    let temperature = Math.round(props.data.temp.max);
    return `${temperature}`;
  }
  function minTemp() {
    let temperature = Math.round(props.data.temp.min);
    return `${temperature}`;
  }
  function humidity() {
    let currentHumidity  = Math.round(props.data.humidity);
    return `${currentHumidity}`;
  }
  function wind() {
    let currentWind  = Math.round(props.data.wind_speed);
    return `${currentWind}`;
  }
  function precipitation() {
    let pop = Math.round(props.data.pop * 100);
    return `${pop}`
  }
  function day() {
    let date = new Date(props.data.dt * 1000);
    let day = date.getDay();
    let days = [
  		"Sun",
  		"Mon",
  		"Tue",
  		"Wed",
  		"Thu",
  		"Fri",
  		"Sat"
	];
  return days[day];
  }
  let icon = `icons/${props.data.weather[0].icon}.png`
  return (
    <div className="row forecast-item">
      <div className="col-2">
        <h3 id="day1" className="accordion-day1">
          {day()}
        </h3>
        <h3 id="month1" className="accordion-month1">
          {props.data.weather[0].main}
        </h3>
      </div>
      <div className="col-2">
        <img className="accordion-img img-fluid" src={icon} alt={props.data.weather[0].main} />
        <p className="accordion-content">
          <strong className="temperature-forecast1-max">
            {maxTemp()}/
          </strong>
          <span className="temperature-forecast1-min">
            {minTemp()}
          </span>
        </p>
      </div>
      <div className="col-2">
        <img
          className="accordion-img img-fluid"
          src={imagehumidity}
          alt="Humidity"
        />
        <p className="accordion-content">{humidity()} %</p>
      </div>
      <div className="col-2">
        <img className="accordion-img img-fluid" src={imagewind} alt="wind" />
        <p className="accordion-content">{wind()} m/s</p>
      </div>
      <div className="col-2">
        <img
          className="accordion-img img-fluid"
          src={imageprecipitation}
          alt="precipitation"
        />
        <p className="accordion-content">{precipitation()} %</p>
      </div>
      <div className="col-2">
        <img
          className="accordion-img img-fluid"
          src={imagebarometer}
          alt="barometer"
        />
        <p className="accordion-content">{props.data.pressure}</p>
      </div>
    </div>
  );
}
