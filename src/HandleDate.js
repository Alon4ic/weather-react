import React from "react";
import "./index.css";

export default function HandleDate(props) {
	let days = [
  		"Sun",
  		"Mon",
  		"Tue",
  		"Wed",
  		"Thu",
  		"Fri",
  		"Sat"
	];
	let day = days[props.date.getDay()];
	let hours = props.date.getHours();
	if (hours < 10) {
		hours =`0${hours}`;
	}
	let minutes = props.date.getMinutes();
	if (minutes < 10) {
		minutes = `0${minutes}`;
	}
	let months  = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
	let month = months[props.date.getMonth()];
	let newDate = props.date.getDate();
	return (
		<><div className="times-box">
			<h2 id="day" className="day-name">
				{day},{" "}
				<span id="times" className="times">
					{hours}
					{" "}:
					{" "}
					{minutes}
				</span>
			</h2>
		</div><div>
				<h3 className="month-item">
					{" "}
					<span id="month" className="month">
						{month}
					</span>
					, <span id="number">{newDate}</span>
				</h3>
			</div></>
	)
}