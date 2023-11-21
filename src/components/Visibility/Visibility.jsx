import { useContext } from "react";
import { WeatherContext } from "../../context/WeatherContext";
import { Box, Typography } from "@mui/material";
export default function Visibility() {
  const { visibility } = useContext(WeatherContext);
  const value = (visibility / 1000).toFixed(1);
  const visibilityStatus = value < 5 ? "Low" : "Good";
  const emoji = visibilityStatus === "Low" ? "🌫️" : "😊";
  return (
    <>
      <Box display={"flex"} alignItems={"baseline"} gap={1}>
        <Typography fontSize={30} variant="subtitle1" component="h2">
          {value}
        </Typography>
        <Typography fontWeight={300} variant="subtitle2" component="p">
          km
        </Typography>
      </Box>
      <Box display={"flex"} alignItems={"baseline"} gap={1}>
        <Typography
          fontSize={15}
          variant="subtitle1"
          component="h2"
          fontWeight={300}
        >
          {visibilityStatus}
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
