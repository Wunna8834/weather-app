import {
  Grid,
  TextField,
  Typography,
  Box,
  Divider,
  useTheme,
} from "@mui/material";

import Sunny from "../../assets/Sunny.gif";
import "./style.css";
import { useContext, useEffect } from "react";
import { LocationContext } from "../../context/LocationContext";
import { capitalizeFirstWord } from "../../utils/letter/capitalizeFirstWord";
import SearchBox from "../Search/SearchBox";
import { WeatherContext } from "../../context/WeatherContext";
import { UnitContext } from "../../context/UnitContext";
import { convertToCelsius } from "../../utils/unitConversion";
import CloudCondition from "../CloudCondition/CloudCondition";
import RainCondition from "../RainConditon/RainCondition";
import WeatherIcon from "../WeatherIcon/WeatherIcon";
import Location from "../Location/Location";
import { getDayName } from "../../utils/date_time/getDayName";
import CurretnTime from "../CurrentTime/CurrentTime";
import UnitBtn from "../UnitButton/UnitBtn";
import { motion, useAnimation } from "framer-motion";
import EntranceAnimation from "../Animate/EntranceAnimation";
export default function MainWeather() {
  const theme = useTheme();
  const weatherConditions = useContext(WeatherContext);
  const { isCelsius, setCelsius } = useContext(UnitContext);
  const controls = useAnimation();
  const weatherIconAnimation = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  useEffect(() => {
    controls.start("visible");
  }, [controls]);
  return (
    <Grid
      md={4}
      sm={6}
      xs={12}
      item
      sx={{
        borderRight: "2px solid #F5F5F5",
        [theme.breakpoints.down("md")]: {
          border: "none",
        },
      }}
    >
      <Box>
        <Box display={"flex"} alignItems={"center"}>
          <SearchBox />
          <Box
            marginLeft={3}
            sx={{
              [theme.breakpoints.up("sm")]: {
                opacity: 0,
              },
            }}
          >
            <UnitBtn />
          </Box>
        </Box>
        <Box sx={{ marginTop: 4 }}>
          <motion.div
            initial="hidden"
            animate={controls}
            variants={weatherIconAnimation}
            transition={{ delay: 1, type: "spring" }}
          >
            <WeatherIcon />
          </motion.div>
        </Box>
        <EntranceAnimation>
          <Box>
            <Typography variant="h3" component="p">
              <span style={{ fontWeight: "300" }}>
                {isCelsius
                  ? convertToCelsius(weatherConditions.temperature)
                  : weatherConditions.temperature}
              </span>
              <sup>{isCelsius ? "\u00b0C" : "\u00b0F"}</sup>
            </Typography>
          </Box>
        </EntranceAnimation>
        <Box>
          <EntranceAnimation>
            <Box display="flex" alignItems="baseline" gap={1}>
              <Typography variant="h6" component="p">
                {getDayName()},
              </Typography>
              <CurretnTime />
            </Box>
          </EntranceAnimation>
        </Box>
        <Divider
          sx={{
            width: "300px",
            [theme.breakpoints.down("md")]: { width: "250px" },
            marginY: 3,
          }}
        />
        <EntranceAnimation>
          <CloudCondition />
          <RainCondition />
          <Box
            sx={{
              width: "300px",
              [theme.breakpoints.down("md")]: { width: "250px" },
            }}
          >
            <Location />
          </Box>
        </EntranceAnimation>
      </Box>
    </Grid>
  );
}
