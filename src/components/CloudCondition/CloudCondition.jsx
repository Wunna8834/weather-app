import { useContext } from "react";
import { WeatherContext } from "../../context/WeatherContext";
import CloudIcon from '@mui/icons-material/Cloud';
import CloudQueueIcon from '@mui/icons-material/CloudQueue';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import PartlyCloudy from "../../assets/partly-cloudy.svg"
import ClearSky from "../../assets/clear_sky.svg"
import Cloudy from "../../assets/cloudy.svg"
import { Box } from "@mui/material";
export default function CloudCondition() {
  const { clouds } = useContext(WeatherContext);
  let cloudCondition;
  let icon;
  if (clouds < 20) {
    cloudCondition = "Clear Sky, No clouds.";
    icon = <img src={ClearSky}/>
  } else if (clouds <= 50) {
    cloudCondition = "Partly Cloudy.";
    icon = <img src={PartlyCloudy}/>
  } else {
    cloudCondition = "Very Cloudy.";
    icon = <img src={Cloudy}/>
  }
  return (
    <Box display="flex" alignItems="center">
      {icon}{cloudCondition}
    </Box>
  );
}
