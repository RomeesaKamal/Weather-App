import { useEffect, useRef, useState, useCallback } from "react";
import CurrentWeather from "./Components/CurrentWeather";
import HourleyWeather from "./Components/HourleyWeather";
import SearchSection from "./Components/SearchSection";
import NoResultLDiv from "./Components/NoResultLDiv";
import { weatherCodes } from "./constants";

function App() {
  const API_KEY = process.env.REACT_APP_API_KEY;
  const [currentWeather, setCurrentWeather] = useState({});
  const [hourlyForecast, setHourlyForecast] = useState([]);
  const [hasNoResult, setHasNoResult] = useState(false);
  const searcValueRef = useRef(null);
  const filterHourlyForecast = useCallback((HourelyData) => {
    const currentHour = new Date().setMinutes(0, 0, 0);
    const next24Hours = currentHour + 24 * 60 * 60 * 1000;
    // filter the data for the next 24 hours
    const next24HoursData = HourelyData.filter(({ time }) => {
      const forecastTime = new Date(time).getTime();
      return forecastTime >= currentHour && forecastTime <= next24Hours;
    });
    setHourlyForecast(next24HoursData);
  }, []);
  const getWeatherData = useCallback(async (API_Url) => {
    setHasNoResult(false);
    window.innerWidth <= 768 && searcValueRef.current.focus();

    try {
      const response = await fetch(API_Url);
      if (!response.ok) throw new Error();
      const data = await response.json();
      // Extract current data from the API response
      const temperature = Math.floor(data.current.temp_c);
      const description = data.current.condition.text;
      const weatherIcon = Object.keys(weatherCodes).find((icon) =>
        weatherCodes[icon].includes(data.current.condition.code)
      );
      //  Combine hourly data from both forecast days
      setCurrentWeather({ temperature, description, weatherIcon });
      const combineHourelyData = [
        ...data.forecast.forecastday[0].hour,
        ...data.forecast.forecastday[1].hour,
      ];
      searcValueRef.current.value = data.location.name;

      filterHourlyForecast(combineHourelyData);
    } catch {
      // Set setHasNoResult to true there is an error
      setHasNoResult(true);
    }
  }, [ filterHourlyForecast]);
//  Fetches default city (Swabi, Pakistan) weather data on intial render
  useEffect(() => {
    const defaultCity = "Swabi, Pakistan";
    const API_URL = ` http://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=${defaultCity}&days=5`;
    getWeatherData(API_URL); //Fetches weather details for enter city
  }, [API_KEY, getWeatherData]);

  return (
    <div className="py-4 bg-gradient-to-t from-[#352163] to-[#33143C] max-w-[410px] mx-auto my-0 shadow-lg rounded-[10px] container-style">
      {/* Search Section */}
      <SearchSection
        getWeatherData={getWeatherData}
        searcValueRef={searcValueRef}
      />
      {/* Conditionally render based on hasNoResult state */}
      {hasNoResult ? (
        <NoResultLDiv />
      ) : (
        <div className="text-white">
          {/* Weather Section */}
          <CurrentWeather currentWeather={currentWeather} />

          {/* Hourley Weather */}

          <div className="py-4 px-4">
            <ul className="flex md:gap-8 gap-5 overflow-x-auto border-t-[1px] px-[25px] mb-[-16px] scrollbar-thin scrollbar-style pt-4 pb-3">
              {hourlyForecast.map((hourleyWeather) => (
                <HourleyWeather
                  key={hourleyWeather.time_epoch}
                  hourleyWeather={hourleyWeather}
                />
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
