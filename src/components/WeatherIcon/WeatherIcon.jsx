import { useContext } from "react";
import { WeatherContext } from "../../context/WeatherContext";
import Cloudy from '../../assets/Cloudy.png'
import Sunny from '../../assets/sunny.png'
import Rainy from '../../assets/rainy.png'
import Snowy from '../../assets/snowy.png'
import Default from '../../assets/default_weather.png'
import './style.css'
export default function WeatherIcon() {
  const { cloud_status } = useContext(WeatherContext);
  let weather_img;
  console.log("cloud status is ", cloud_status)
  switch (cloud_status) {
    case "Clouds":
      weather_img = <img className="img" src={Cloudy}/>
      break;
    case "Clear":
      weather_img = <img className="img" src={Sunny}/>;
      break;
    case "Rain":
      weather_img = <img className="img" src={Rainy}/>
      break;
    case "Snow":
      weather_img = <img className="img" src={Snowy}/>
      break;
    default:
      weather_img = <img className="img" src={Default}/>;
  }
  return (
    <>
      {weather_img}
    </>
  );
}
