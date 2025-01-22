import React from "react";



const CurrentWeather = ({ currentWeather }) => {
  return (
    <div className="flex flex-col items-center pt-5 pl-0 pb-[50px]">
       <img
        src={`/icons/${currentWeather.weatherIcon}.svg`} // Dynamic icon path
        alt="weather icon"
        className="w-36"
      />
      <h2 className="my-[18px] mx-0 text-6xl flex">
        {currentWeather.temperature}{" "}
        <span className="text-2xl font-normal mt-[5px] mr-[2px] ">°C</span>
      </h2>
      <p className="text-xl">{currentWeather.description}</p>
    </div>
  );
};

export default CurrentWeather;
