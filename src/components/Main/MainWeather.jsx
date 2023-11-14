import { Grid, TextField, Typography, Box, Divider } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import Sunny from "../../assets/Sunny.gif";
import "./style.css";
export default function MainWeather() {
  function getDayName(date = new Date(), locale = "en-US") {
    return date.toLocaleDateString(locale, { weekday: "long" });
  }
  return (
    <Grid xs={4} item sx={{ borderRight: "2px solid #F5F5F5" }}>
      <Box>
        <Box sx={{ display: "flex", alignItems: "flex-end" }}>
          <SearchIcon sx={{ color: "#DDE6ED" }} />
          <TextField label="Search for places..." variant="standard" />
        </Box>
        <Box sx={{ marginTop: 4 }}>
          <img className="img" src={Sunny} alt="sunny-img-gif" />
        </Box>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Typography variant="h2" component="p">
            <span style={{ fontWeight: "300" }}>12</span>
            <sup>&deg;C</sup>
          </Typography>
        </Box>
        <Box display="flex" alignItems="baseline" gap={1}>
          <Typography variant="h6" component="p">
            {getDayName()},
          </Typography>
          <Typography
            variant="h6"
            component="p"
            sx={{ fontWeight: 200, color: "#9BA4B5" }}
          >
            {new Date().getHours()}:{new Date().getMinutes()}
          </Typography>
        </Box>
        <Divider sx={{width: "300px", marginY: 3}}/>
        <Box>
            <Typography variant="subtitle2">Mostly Cloudy</Typography>
            <Typography variant="subtitle2">Rain - 30%</Typography>
            <Typography marginY={4}>User Location</Typography>
        </Box>
      </Box>
    </Grid>
  );
}
