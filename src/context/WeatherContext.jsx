import { createContext, useContext, useEffect, useState } from "react";
import { LocationContext } from "./LocationContext";
import { getWeather } from "../api/getWeather";

const INITIAL_STATE = {
  temperature: 85,
  humidity: 74,
  clouds: 40,
  cloud_status: "Clouds",
  wind: "",
  visibility: ""
};

export const WeatherContext = createContext(INITIAL_STATE);

export const WeatherProvider = ({ children }) => {
  const { state} = useContext(LocationContext);
  const [weatherConditions, setWeatherConditions] = useState(INITIAL_STATE);
  useEffect(() => {
    const fetchWeather = async() => {
        try {
            const conditions = await getWeather(state.location)
            setWeatherConditions({
                ...weatherConditions,
                temperature: conditions.main?.temp,
                humidity: conditions.main?.humidity,
                clouds: conditions.clouds?.all,
                cloud_status: conditions.weather[0]?.main
            })
        } catch (error) {
            console.error("Error fetching weater data", error)
        }
    }

    // fetchWeather()
  }, [state]);
  return (
    <WeatherContext.Provider value={weatherConditions}>
      {children}
    </WeatherContext.Provider>
  );
};
