import React, { useState, useEffect } from "react";
import "./index.css";

import axios from "axios";
import First from "./First";

export default function Forecast(props) {
  let [loaded, setLoaded] = useState(false);
  let [forecast, setForecast] = useState(null);

  useEffect(() => {
    setLoaded(false)
  }, [props.data]);

  function handleEvent(response) {
    setForecast(response.data.daily);
    setLoaded(true);
    
  }
 
  if (loaded) {
    console.log(forecast);
  
     
  return (
    <div className="container">
    <div className="forecast" id="forecast">
      {forecast.map(function (dailyForecast, index) {
        if (index < 5) {
        return (
          <div key={index}>
            <First data={dailyForecast} />
          </div>
        )
        }
      })}
     
    </div>
    </div>
    );

 
  } else {
 let latitude = props.data.lat;
 let longitude = props.data.lon;
  let apiKey = "7db589669794c40edb745ea0a4fe919c";
  let apiUrl = `https://api.openweathermap.org/data/3.0/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(handleEvent);
  axios.get('/user/12345')
  .catch(function (error) {
    // console.log(error.toJSON());
  });

  return null;
  
  
  }
}
