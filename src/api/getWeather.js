import axios from "axios";

export async function getWeather(location) {
  try {
    const res = await axios.get(
      `https://openweather13.p.rapidapi.com/city/${location}`,
      {
        headers: {
          "X-RapidAPI-Key": import.meta.env.VITE_WEATHER_API_KEY,
          "X-RapidAPI-Host": "open-weather13.p.rapidapi.com",
        },
        
      }
      
    );
    return res.data;
  } catch (error) {
    console.error(error);
  }
}