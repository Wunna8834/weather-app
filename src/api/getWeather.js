import axios from "axios";

// const options = {
//   method: "GET",
//   url: "https://open-weather13.p.rapidapi.com/city/landon",
//   headers: {
//     "X-RapidAPI-Key": import.meta.env.VITE_WEATHER_API_KEY,
//     "X-RapidAPI-Host": "open-weather13.p.rapidapi.com",
//   },
// };

export async function getWeather(location = "yangon") {
  try {
    const res = await axios.get(
      `https://open-weather13.p.rapidapi.com/city/${location}`,
      {
        headers: {
          "X-RapidAPI-Key": import.meta.env.VITE_WEATHER_API_KEY,
          "X-RapidAPI-Host": "open-weather13.p.rapidapi.com",
        },
      }
    );
    console.log(res.data)
  } catch (error) {
    console.error(error);
  }
}
