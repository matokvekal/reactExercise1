import React from 'react';
import './Weather.css';

function Weather() {
	return (
		<div className="Weather">
			<p>
				Use the following API to display the hottest and coldest days:<br />
				<code>/weather.json</code>
			</p>
			<div className="Weather__stats">
				<strong>Hottest day is:</strong>
			</div>
			<div className="Weather__stats">
				<strong>Coldest day is:</strong>
			</div>
		</div>
	);
}

export default Weather;
