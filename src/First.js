import React from "react";
import "./index.css";
import imagefirst from "../src/images/01d.png";
import imagehumidity from "../src/images/humidity.png";
import imagewind from "../src/images/wind.png";
import imageprecipitation from "../src/images/precipitation.png";
import imagebarometer from "../src/images/barometer.png";

export default function First(props) {
  return (
    <div className="row forecast-item">
      <div className="col-2">
        <h3 id="day1" className="accordion-day1">
          {props.value.firstDay}
        </h3>
        <h3 id="month1" className="accordion-month1">
          {props.value.threeWeather}
        </h3>
      </div>
      <div className="col-2">
        <img className="accordion-img img-fluid" src={imagefirst} alt="sunny" />
        <p className="accordion-content">
          <strong className="temperature-forecast1-max">
            {props.value.firstMaxTemp}/
          </strong>
          <span className="temperature-forecast1-min">
            {props.value.firstMinTemp}
          </span>
        </p>
      </div>
      <div className="col-2">
        <img
          className="accordion-img img-fluid"
          src={imagehumidity}
          alt="Humidity"
        />
        <p className="accordion-content">{props.value.firstHumidity} %</p>
      </div>
      <div className="col-2">
        <img className="accordion-img img-fluid" src={imagewind} alt="wind" />
        <p className="accordion-content">{props.value.firstWind} mph</p>
      </div>
      <div className="col-2">
        <img
          className="accordion-img img-fluid"
          src={imageprecipitation}
          alt="precipitation"
        />
        <p className="accordion-content">{props.value.firstPrecipitation} %</p>
      </div>
      <div className="col-2">
        <img
          className="accordion-img img-fluid"
          src={imagebarometer}
          alt="barometer"
        />
        <p className="accordion-content">{props.value.firstBarometer}</p>
      </div>
    </div>
  );
}
