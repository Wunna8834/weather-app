import cities from "./time_zones.json";
import { capitalizeFirstWord } from "../letter/capitalizeFirstWord";
export function getCityTimeZone(location) {
  const city_name = capitalizeFirstWord(location)
  const cityLookUp = cities.find(city => city.city === city_name)
  return cityLookUp;
}

export const getTimeFromTimeZone = (time_zone) => {
  const options = {
    timeZone: time_zone,
    hour12: true,
    hour: "numeric",
    minute: "numeric",
  };
  const formatter = new Intl.DateTimeFormat([], options);
  const currentTime = formatter.format(new Date());
  return currentTime

};
