import { useContext } from "react";
import { WeatherContext } from "../../context/WeatherContext";
import { Box, Typography } from "@mui/material";
import RainIcon from "../../assets/rainy.svg";
export default function RainCondition() {
  const { humidity, clouds, cloud_status } = useContext(WeatherContext);
  const cloudCoverThreshold = 30;
  const humidityThreshold = 60;

  let likelihoodOfRain = 0;

  if (
    cloud_status === "Clouds" &&
    clouds > cloudCoverThreshold &&
    humidity > humidityThreshold
  ) {
    likelihoodOfRain =
      Math.min(
        ((clouds - cloudCoverThreshold) / (100 - cloudCoverThreshold)) * 0.5,
        ((humidity - humidityThreshold) / (100 - humidityThreshold)) * 0.5
      ) * 100;

    likelihoodOfRain = Math.max(0, Math.min(100, likelihoodOfRain));
  }

  return (
    <Box display="flex" alignItems="center" sx={{ fontFamily: "Poppins" }}>
      <img src={RainIcon}/>
      <Typography marginRight={1} fontWeight={500}>Rain -</Typography>
      {likelihoodOfRain.toFixed(2)}%
    </Box>
  );
}
