import { useContext } from "react";
import { WeatherContext } from "../../context/WeatherContext";
import { Box, Typography } from "@mui/material";

export default function HumidityStatus() {
  const { humidity } = useContext(WeatherContext);
  const humidityStatus = humidity < 60 ? "Normal" : "Unhealthy";
  const emoji = humidityStatus === "Normal" ? "😊" : "😓";
  return (
    <>
      <Typography fontSize={30} variant="subtitle1" component="h2">
        <span>{humidity}</span>
        <sup>%</sup>
      </Typography>
      <Box display={"flex"} alignItems={"baseline"} gap={1}>
        <Typography
          fontSize={15}
          variant="subtitle1"
          component="h2"
          fontWeight={300}
        >
          {humidityStatus}
        </Typography>
        <Typography
          fontSize={15}
          variant="subtilte1"
          component="h2"
          fontWeight={300}
        >
          {emoji}
        </Typography>
      </Box>
    </>
  );
}
