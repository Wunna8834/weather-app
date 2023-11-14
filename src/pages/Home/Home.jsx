import { Container, Grid, Paper, Typography } from "@mui/material";
import MainWeather from "../../components/Main/MainWeather";
import HighlightWeather from "../../components/Highlights/HighlightWeather";

export default function Home() {
  return (
    <>
      <Container sx={{ marginY: 4 }}>
        <Paper elevation={12} square={false} sx={{padding: 4, borderRadius: '20px'}}>
          <Grid container spacing={0}>
            <MainWeather />
            <HighlightWeather />
          </Grid>
        </Paper>
      </Container>
    </>
  );
}
