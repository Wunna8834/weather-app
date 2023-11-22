import { useContext } from "react";
import { WeatherContext } from "../../context/WeatherContext";
import { Box } from "@mui/material";
import ArrowCircleUpIcon from "@mui/icons-material/ArrowCircleUp";
import ArrowCircleDownIcon from "@mui/icons-material/ArrowCircleDown";

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
      <Box display={"flex"} alignItems={"center"}>
        <ArrowCircleUpIcon color="warning" fontSize="large" />
        <p> {formatTime(sunsetTime)}</p>
      </Box>
      <Box display={"flex"} alignItems={"center"}>
        <ArrowCircleDownIcon color="warning" fontSize="large" />{" "}
        <p>{formatTime(sunriseTime)}</p>
      </Box>

      
    </>
  );
}
