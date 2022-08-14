import React from "react";
import "./index.css";
import Axios from "axios";
import First from "./First";
import Second from "./Second";
import Three from "./Three";
import Fourth from "./Fourth";
import Fifth from "./Fifth";

export default function Forecast() {
  function handleEvent(response) {
    console.log(response.data);
  }
  let longitude = 40.7;
  let latitude = 74;
  let myKey = "7db589669794c40edb745ea0a4fe919c";
  let apiUrl = `https://api.openweathermap.org/data/3.0/onecall?lat=${latitude}&lon=${longitude}&appid=${myKey}`;
  Axios.get(apiUrl).then(handleEvent);
  let forecastShow = {
    firstDay: "Fri",
    secondDay: "Sat",
    threeDay: "Sun",
    fourthDay: "Mon",
    fifthDay: "True",
    firstWeather: "Clouds",
    secondWeather: "Rain",
    threeWeather: "Warm",
    fourthWeather: "Mon",
    fifthWeather: "True",
    firstMinTemp: "17",
    firstMaxTemp: "24",
    firstHumidity: "65",
    firstWind: "12",
    firstPrecipitation: "0",
    firstBarometer: "749",
    secondMinTemp: "15",
    secondMaxTemp: "28",
    secondHumidity: "48",
    secondWind: "7",
    secondPrecipitation: "56",
    secondBarometer: "1015",
    threeMinTemp: "17",
    threeMaxTemp: "21",
    threeHumidity: "89",
    threeWind: "7",
    threePrecipitation: "100",
    threeBarometer: "1011",
    fourthMinTemp: "14",
    fourthMaxTemp: "18",
    fourthHumidity: "83",
    fourthWind: "4",
    fourthPrecipitation: "88",
    fourthBarometer: "1012",
    fifthMinTemp: "14",
    fifthMaxTemp: "21",
    fifthHumidity: "76",
    fifthWind: "6",
    fifthPrecipitation: "99",
    fifthBarometer: "1014"
  };
  return (
    <div className="container">
    <div className="forecast" id="forecast">
      <First value={forecastShow} />
      <Second value={forecastShow} />
      <Three value={forecastShow} />
      <Fourth value={forecastShow} />
      <Fifth value={forecastShow} />
    </div>
    </div>
  );
}
