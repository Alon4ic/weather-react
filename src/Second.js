import React from "react";
import "./index.css";
import imagesecond from "../src/images/03d.png";
import imagehumidity from "../src/images/humidity.png";
import imagewind from "../src/images/wind.png";
import imageprecipitation from "../src/images/precipitation.png";
import imagebarometer from "../src/images/barometer.png";

export default function Second(props) {
  return (
    <div className="row forecast-item">
      <div className="col-2">
        <h3 id="day1" className="accordion-day1">
          {props.value.secondDay}
        </h3>
        <h3 id="month1" className="accordion-month1">
          {props.value.firstWeather}
        </h3>
      </div>
      <div className="col-2">
        <img
          className="accordion-img img-fluid"
          src={imagesecond}
          alt="sunny"
        />
        <p className="accordion-content">
          <strong className="temperature-forecast1-max">20/</strong>
          <span className="temperature-forecast1-min">17</span>
        </p>
      </div>
      <div className="col-2">
        <img
          className="accordion-img img-fluid"
          src={imagehumidity}
          alt="Humidity"
        />
        <p className="accordion-content">{props.value.secondHumidity} %</p>
      </div>
      <div className="col-2">
        <img className="accordion-img img-fluid" src={imagewind} alt="wind" />
        <p className="accordion-content">{props.value.secondWind} mph</p>
      </div>
      <div className="col-2">
        <img
          className="accordion-img img-fluid"
          src={imageprecipitation}
          alt="precipitation"
        />
        <p className="accordion-content">{props.value.secondPrecipitation} %</p>
      </div>
      <div className="col-2">
        <img
          className="accordion-img img-fluid"
          src={imagebarometer}
          alt="barometer"
        />
        <p className="accordion-content">{props.value.secondBarometer}</p>
      </div>
    </div>
  );
}
