import { Box, Card, CardContent, Grid, Typography } from "@mui/material";


export default function HighlightCard({weather_status, component}) {
    return (
        <Grid item xs={4}>
            <Card variant="elevation" sx={{borderRadius: "8px", paddingX: 1}}>
                <CardContent>
                    <Typography variant="body1" color="#b9b5b5" fontFamily="Poppins" fontWeight={400}>{weather_status}</Typography>
                    <Box>
                        {component}
                    </Box>
                </CardContent>
            </Card>
        </Grid>
    )
} 