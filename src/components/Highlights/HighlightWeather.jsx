import { Box, Grid, Typography } from "@mui/material";
import FocusCard from "../FocusCard/FocusCard";
import HighlightCard from "../HighlightCard/HighlightCard";
import UnitBtn from "../UnitButton/UnitBtn";

export default function HighlightWeather() {
  return (
    <Grid xs={8} item sx={{ paddingX: 3 }}>
      <UnitBtn />
      <Box>
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
      </Box>
      <Box marginTop={4}>
        <Typography variant="h5" fontWeight={400} fontFamily="Poppins">
          Today's Highlights
        </Typography>
        <Grid container spacing={2} marginTop={1}>
          <HighlightCard weather_status="UV Index" component="UV Component" />
          <HighlightCard
            weather_status="Wind Status"
            component="Wind Component"
          />
          <HighlightCard
            weather_status="Sunrise & Sunset"
            component="Sun Component"
          />
          <HighlightCard weather_status="Humidity" component="Humidity" />
          <HighlightCard
            weather_status="Visibility"
            component="Visibility Component"
          />
          <HighlightCard
            weather_status="Air Quality"
            component="Quality Component"
          />
        </Grid>
      </Box>
    </Grid>
  );
}
