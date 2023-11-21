import { Box, Grid, Typography } from "@mui/material";
import HighlightCard from "../HighlightCard/HighlightCard";
import UnitBtn from "../UnitButton/UnitBtn";
import WindStatus from "../Wind/WindStatus";
import HumidityStatus from "../Humidity/HumidityStatus";
import Visibility from "../Visibility/Visibility";
import Sunset from "../Sunset/Sunset";
import PressureStatus from "../Pressure/PressureStatus";

export default function HighlightWeather() {
  return (
    <Grid xs={8} item sx={{ paddingX: 3 }}>
      <UnitBtn />
      {/* <Box>
        <Typography variant="h5" fontWeight={400} fontFamily="Poppins">
          Focus for the next 7 days
        </Typography>
        <Grid container spacing={2} marginTop={1}>
          <FocusCard day="Wed" icon="Icon" temp={12} />
          <FocusCard day="Wed" icon="Icon" temp={12} />
          <FocusCard day="Wed" icon="Icon" temp={12} />
          <FocusCard day="Wed" icon="Icon" temp={12} />
          <FocusCard day="Wed" icon="Icon" temp={12} />
          <FocusCard day="Wed" icon="Icon" temp={12} />
        </Grid>
      </Box> */}
      <Box>
        <Typography variant="h5" fontWeight={400} fontFamily="Poppins">
          Today's Highlights
        </Typography>
        <Grid container spacing={2} marginTop={1}>
          <HighlightCard
            weather_status="Wind Status"
            component=<WindStatus />
          />
          <HighlightCard
            weather_status="Humidity"
            component=<HumidityStatus />
          />
          <HighlightCard
            weather_status="Visibility"
            component= <Visibility />
          />
          <HighlightCard
            weather_status="Sunrise & Sunset"
            component= <Sunset />
          />
          <HighlightCard
            weather_status="Pressure"
            component= <PressureStatus />
          />
        </Grid>
      </Box>
    </Grid>
  );
}
