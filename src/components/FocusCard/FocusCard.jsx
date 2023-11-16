import { Box, Card, CardContent, Grid, Typography } from "@mui/material";

export default function FocusCard({ day, icon, temp }) {
  return (
    <Grid item xs={2}>
      <Card variant="elevation" sx={{borderRadius: "8px"}}>
        <CardContent sx={{textAlign: "center"}}>
          <Typography variant="subtitle1" fontWeight={600} fontFamily="Poppins">
            {day}
          </Typography>
          <Typography variant="body2">{icon}</Typography>
          <Typography variant="subtitle2">{temp}</Typography>
        </CardContent>
      </Card>
    </Grid>
  );
}
