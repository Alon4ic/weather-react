
import React from "react";
import "./index.css";
import Search from "./Search";
import Show from "./Show";
import Forecast from "./Forecast";
import Footer from "./Footer";

export default function App() {
  let weatherShow = {
    cityName: "Rivne",
    countryName: "UA",
    currentDay: "Thu",
    currentTime: "23 : 06",
    currentMonth: "July",
    currentDate: "28",
    weather: "Warm",
    minTemp: "18",
    maxTemp: "20",
    humidity: "70",
    wind: "6"
  };
  return (
    <div className="App">
      <div className="wraper">
        <div className="container">
          <Search />
          <Show value={weatherShow} />
          <Forecast value={weatherShow} />
          <Footer />
        </div>
      </div>
    </div>
  );
}