import React from 'react';

const SearchSection = ({ getWeatherData, searcValueRef }) => {
	const API_KEY = process.env.REACT_APP_API_KEY;

	const handleSearchValue = (e) => {
		e.preventDefault();
		const searchValue = e.target.querySelector('#search');
		const API_URL = ` http://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=${searchValue.value}&days=5`;
		getWeatherData(API_URL); //Fetches weather details for enter city
	};

	// Gets user's current location(longitude, latitude)
	const handleLocationSearch = () => {
		navigator.geolocation.getCurrentPosition(
			(position) => {
				const { latitude, longitude } = position.coords;
				const API_URL = ` http://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=${latitude},${longitude}&days=5`;
				getWeatherData(API_URL); //Fetches weather details for user's current location
				window.innerWidth >= 768 && searcValueRef.current.focus();
			},
			() => {
				alert(
					'location access denied. Please enable permission to use this feature.',
				);
			},
		);
	};

	return (
		<div className='flex items-center gap-[10px] md:p-[25px] p-5'>
			<form
				action='#'
				className='h-14 w-full relative'
				onSubmit={handleSearchValue}
			>
				<span>
					<i className='fa-solid fa-magnifying-glass text-white absolute top-[50%] translate-y-[-50%] left-4 text-lg'></i>
				</span>
				<input
					className='w-full h-full border-[1px] border-solid border-[rgba(255,255,255,0.25)] bg-[rgba(255,255,255,0.05)] py-0 pl-11 pr-12 outline-none text-white text-[1rem] uppercase rounded-md placeholder:text-[#ddd] focus:border-[#a38cd9] placeholder:normal-case transition duration-300'
					type='text'
					placeholder='Enter a city name'
					ref={searcValueRef}
					required
					id='search'
				/>
			</form>
			<button onClick={handleLocationSearch}>
				<i className='fa-solid fa-location-crosshairs h-14 w-[54px] border-[1px] border-solid border-[rgba(255,255,255,0.25)] bg-[rgba(255,255,255,0.1)] rounded-md flex-shrink-0 text-white cursor-pointer flex items-center justify-center text-xl hover:text-[#b39fdf] hover:border-[#a38cd9] transition-all duration-[0.2s]'></i>
			</button>
		</div>
	);
};

export default SearchSection;
