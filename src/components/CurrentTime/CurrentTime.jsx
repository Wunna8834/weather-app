import { useContext, useEffect, useState } from "react";
import { Typography } from "@mui/material";
import {
  getCityTimeZone,
  getTimeFromTimeZone,
} from "../../utils/date_time/getTimeZone";
import { LocationContext } from "../../context/LocationContext";
export default function CurretnTime() {
  const { state } = useContext(LocationContext);
  const [currTimeZone, setCurrTimeZone] = useState("Asia/Rangoon");

  useEffect(() => {
    function fetchTimeZone() {
      const time_zone = getCityTimeZone(state.location);
      setCurrTimeZone(time_zone?.timezone);
    }
    fetchTimeZone();
  }, [state.location]);

  return (
    <Typography
      variant="h6"
      component="p"
      sx={{ fontWeight: 200, color: "#9BA4B5" }}
    >
      {getTimeFromTimeZone(currTimeZone)}
    </Typography>
  );
}
