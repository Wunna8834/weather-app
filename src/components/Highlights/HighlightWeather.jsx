import { Box, Grid, Typography, useTheme } from "@mui/material";
import HighlightCard from "../HighlightCard/HighlightCard";
import UnitBtn from "../UnitButton/UnitBtn";
import WindStatus from "../Wind/WindStatus";
import HumidityStatus from "../Humidity/HumidityStatus";
import Visibility from "../Visibility/Visibility";
import Sunset from "../Sunset/Sunset";
import PressureStatus from "../Pressure/PressureStatus";
import StaggerAnimation from "../Animate/StaggerAnimation";

export default function HighlightWeather() {
  const theme = useTheme();
  return (
    <Grid
      md={8}
      sm={6}
      xs={12}
      item
      sx={{
        paddingX: 1,
        [theme.breakpoints.up("md")]: {
          paddingX: 3,
        },
      }}
    >
      <Box
        sx={{
          opacity: 1,
          [theme.breakpoints.down("sm")]: {
            opacity: 0,
          },
        }}
      >
        <UnitBtn />
      </Box>
      <Box>
        <Typography variant="h5" fontWeight={400} fontFamily="Poppins">
          Today's Highlights
        </Typography>

        <Grid container spacing={2} marginTop={1}>
          <HighlightCard
            weather_status="Wind Status"
            component=<WindStatus />
            delay= {1}
          />
          <HighlightCard
            weather_status="Humidity"
            component=<HumidityStatus />
            delay={2}
          />
          <HighlightCard
            weather_status="Visibility"
            component=<Visibility />
            delay={3}
          />
          <HighlightCard
            weather_status="Sunrise & Sunset"
            component=<Sunset />
            delay={4}
          />
          {/* <HighlightCard
            weather_status="Pressure"
            component=<PressureStatus />
            delay={5}
          /> */}
        </Grid>
      </Box>
    </Grid>
  );
}
