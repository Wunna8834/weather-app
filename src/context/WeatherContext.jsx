import { createContext, useContext, useEffect, useState } from "react";
import { LocationContext } from "./LocationContext";
import { getWeather } from "../api/getWeather";

const INITIAL_STATE = {
  temperature: 85,
  humidity: 74,
  clouds: 40,
  cloud_status: "Clouds",
  wind_status: 3.44,
  wind_direction: 310,
  visibility: 7000,
  pressure: 1012,
  sunrise: 1700223835,
  sunset: 1700261942,
};

export const WeatherContext = createContext(INITIAL_STATE);

export const WeatherProvider = ({ children }) => {
  const { state } = useContext(LocationContext);
  const [weatherConditions, setWeatherConditions] = useState(INITIAL_STATE);
  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const conditions = await getWeather(state.location);
        setWeatherConditions({
          ...weatherConditions,
          temperature: conditions.main?.temp,
          humidity: conditions.main?.humidity,
          clouds: conditions.clouds?.all,
          cloud_status: conditions.weather[0]?.main,
          wind_status: conditions.wind?.speed,
          wind_direction: conditions.wind?.deg,
          pressure: conditions.main?.pressure,
          sunrise: conditions.sys?.sunset,
          sunset: conditions.sys?.sunrise,
        });
      } catch (error) {
        console.error("Error fetching weater data", error);
      }
    };

    // fetchWeather()
  }, [state]);
  return (
    <WeatherContext.Provider value={weatherConditions}>
      {children}
    </WeatherContext.Provider>
  );
};
