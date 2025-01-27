import React from 'react';
import { weatherCodes } from '../constants';

const HourleyWeather = ({ hourleyWeather }) => {
	const temperature = Math.floor(hourleyWeather.temp_c);
	const time = hourleyWeather.time.split(' ')[1].substring(0, 5);
	const weatherIcon = Object.keys(weatherCodes).find((icon) =>
		weatherCodes[icon].includes(hourleyWeather.condition.code),
	);
	return (
		<li className='flex flex-col gap-[7px]  items-center mb-3'>
			<p>{time}</p>
			<img
				src={`/icons/${weatherIcon}.svg`}
				alt='clouds'
				className='w-7'
			/>
			<p>{temperature}°C</p>
		</li>
	);
};

export default HourleyWeather;
