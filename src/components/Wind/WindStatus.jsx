import { useContext } from "react";
import { WeatherContext } from "../../context/WeatherContext";
import { Box, Typography } from "@mui/material";

export default function WindStatus() {
  const { wind_status, wind_direction } = useContext(WeatherContext);
  let direction_text;

  if (wind_direction >= 337.5 || wind_direction < 22.5) {
    direction_text = "North";
  } else if (wind_direction >= 22.5 && wind_direction < 67.5) {
    direction_text = "Northeast";
  } else if (wind_direction >= 67.5 && wind_direction < 112.5) {
    direction_text = "East";
  } else if (wind_direction >= 112.5 && wind_direction < 157.5) {
    direction_text = "Southeast";
  } else if (wind_direction >= 157.5 && wind_direction < 202.5) {
    direction_text = "South";
  } else if (wind_direction >= 202.5 && wind_direction < 247.5) {
    direction_text = "Southwest";
  } else if (wind_direction >= 247.5 && wind_direction < 292.5) {
    direction_text = "West";
  } else if (wind_direction >= 292.5 && wind_direction < 337.5) {
    direction_text = "Northwest";
  }
  return (
    <>
      <Box display={"flex"} alignItems={"baseline"} gap={1}>
        <Typography fontSize={30} variant="subtitle1" component="h2">
          {wind_status}
        </Typography>
        <Typography fontWeight={300} variant="subtitle2" component="p">
          km/h
        </Typography>
      </Box>
      <Box display={"flex"} alignItems={"baseline"} gap={1}>
        <Typography
          fontSize={15}
          variant="subtitle1"
          component="h2"
          fontWeight={300}
        >
          Direction -
        </Typography>
        <Typography
          fontSize={15}
          variant="subtilte1"
          component="h2"
          fontWeight={300}
        >
          {direction_text}
        </Typography>
      </Box>
    </>
  );
}
