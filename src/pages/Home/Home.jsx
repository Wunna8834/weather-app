import { Container, Grid, Paper, Typography } from "@mui/material";
import MainWeather from "../../components/Main/MainWeather";
import HighlightWeather from "../../components/Highlights/HighlightWeather";
import { useEffect } from "react";
import { getWeather } from "../../api/getWeather";
import getLocationImage from "../../api/getLocationImage";

export default function Home() {
  getLocationImage("Yangon");

  return (
    <>
      <Container>
        <Paper elevation={12} square={false} sx={{ borderRadius: "20px" }}>
          <Grid container spacing={0} sx={{ padding: 5 }}>
            <MainWeather />
            <HighlightWeather />
          </Grid>
        </Paper>
      </Container>
    </>
  );
}
