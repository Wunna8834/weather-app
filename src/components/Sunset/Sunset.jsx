import { useContext } from "react";
import { WeatherContext } from "../../context/WeatherContext";
import { Box } from "@mui/material";

export default function Sunset() {
  const { sunrise, sunset } = useContext(WeatherContext);
  const sunriseTime = new Date(sunrise * 1000);
  const sunsetTime = new Date(sunset * 1000);
  console.log(sunriseTime);
  const formatTime = (time) => {
    return time.toLocaleTimeString("en-US", {
      hour: "numeric",
      minute: "2-digit",
      hour12: true,
    });
  };
  return (
    <>
      <p>Sunrise: {formatTime(sunsetTime)}</p>
      <p>Sunset: {formatTime(sunriseTime)}</p>
    </>
  );
}
