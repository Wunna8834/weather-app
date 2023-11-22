import { Box, Card, CardContent, Grid, Typography } from "@mui/material";
import { motion } from "framer-motion";
export default function HighlightCard({ weather_status, component, delay }) {
  return (
    <Grid item md={4}>
      <motion.div
        initial={{ opacity: 0, translateX: 50 }}
        animate={{ opacity: 1, translateX: 0 }}
        transition={{ duration: 0.3, delay: delay * 0.2 }}
        
      >
        <Card variant="elevation" sx={{ borderRadius: "8px", paddingX: 1 }}>
          <CardContent>
            <Typography
              variant="body1"
              color="#b9b5b5"
              fontFamily="Poppins"
              fontWeight={400}
            >
              {weather_status}
            </Typography>
            <Box>{component}</Box>
          </CardContent>
        </Card>
      </motion.div>
    </Grid>
  );
}
