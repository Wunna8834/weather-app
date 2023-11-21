import { useContext } from "react"
import { WeatherContext } from "../../context/WeatherContext"
import { Box, Typography } from "@mui/material"

export default function PressureStatus() {
    const {pressure} = useContext(WeatherContext)
    return(
        <Box marginTop={3}>
            <Typography>
                {pressure.toFixed(1)} hPa
            </Typography>
        </Box>
    )
}