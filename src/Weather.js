import React, { useState } from "react";
import HandleDate from "./HandleDate";
import "./index.css";

export default function Weather(props) {
  const [imperial, setImperial] = useState(false);

  function changeToFahrenheit(event) {
    event.preventDefault();
    setImperial(true);
  }
  function changeToCelsius(event) {
    event.preventDefault();
    setImperial(false);
  }
if (!imperial){
  return (
    <section className="weather-city">
        <div className="row">
          <div className="col-4 city-item">
            <h1 className="city-name">
              {props.data.city},{' '}
              <span id="country">{props.data.country}</span>
            </h1>
            <HandleDate date={props.data.date} />
          </div>
          <div className="col-4">
            <img className="img-fluid city-img" id="icon" src={props.data.icon} alt={props.data.description} />
            <p className="weather" id="description">
              {props.data.description}
            </p>
          </div>
          <div className="col-4 block-temperatur">
            <div className="temperatur">
              <div className="temperatur-item1">
                <strong className="temperatur-strong" id="strong-temp">
                  {Math.round(props.data.temperature)}
                </strong>
                <span className="temperature-link">/</span>
                <span className="min-temp" id="min-temp">
                  {Math.round(props.data.minTemperature)}
                </span>
                <div className="meaning">
                  <a href="/" onClick={changeToCelsius} id="celcius" className="unit">C°</a>
                  <p className="temp-text">/</p>
                  <a href="/" onClick={changeToFahrenheit} id="fahrenheit" className="imperial text-primary">F°</a>
                </div>
              </div>
            </div>
            <strong className="humidity">
              Humidity:{" "}
              <span className="humidity-meaning" id="humidity">
                {Math.round(props.data.humidity)}
              </span>
              %
            </strong>
            <br />
            <strong className="wind">
              Wind: <span className="wind-meaning" id="wind"></span>
              {Math.round(props.data.wind)} m/s
            </strong>
          </div>
        </div>
      </section>
  );
} else {
  return (
    <section className="weather-city">
        <div className="row">
          <div className="col-4 city-item">
            <h1 className="city-name">
              {props.data.city},{' '}
              <span id="country">{props.data.country}</span>
            </h1>
            <HandleDate date={props.data.date} />
          </div>
          <div className="col-4">
            <img className="img-fluid city-img" id="icon" src={props.data.icon} alt={props.data.description} />
            <p className="weather" id="description">
              {props.data.description}
            </p>
          </div>
          <div className="col-4 block-temperatur">
            <div className="temperatur">
              <div className="temperatur-item1">
                <strong className="temperatur-strong" id="strong-temp">
                  {Math.round(props.data.temperature * 9/5 + 32)}
                </strong>
                <span className="temperature-link">/</span>
                <span className="min-temp" id="min-temp">
                  {Math.round(props.data.minTemperature * 9/5 + 32)}
                </span>
                <div className="meaning">
                  <a href="/" onClick={changeToCelsius} id="celcius" className="unit text-primary">C°</a>
                  <p className="temp-text">/</p>
                  <a href="/" onClick={changeToFahrenheit} id="fahrenheit" className="imperial">F°</a>
                </div>
              </div>
            </div>
            <strong className="humidity">
              Humidity:{" "}
              <span className="humidity-meaning" id="humidity">
                {Math.round(props.data.humidity)}
              </span>
              %
            </strong>
            <br />
            <strong className="wind">
              Wind: <span className="wind-meaning" id="wind"></span>
              {Math.round(props.data.wind)} km/h
            </strong>
          </div>
        </div>
      </section>
  );
}
}