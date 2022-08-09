import React from "react";
import axios from "axios";
import { Puff } from  "react-loader-spinner";

export default function Weather() {
	let city = "New York";
	function handleResponse(response) {
		alert(`The weather in ${city} is ${response.data.main.temp}`);
	}
	let apiKey = "7db589669794c40edb745ea0a4fe919c";
	let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
	axios.get(url).then(handleResponse);
	return (
		<Puff
		color="#ccc"
		height={100}
		width={100}
		timeout={5000}
  />
	)
};
