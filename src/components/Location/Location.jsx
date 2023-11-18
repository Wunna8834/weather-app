import { useContext, useEffect, useState } from "react";
import getLocationImage from "../../api/getLocationImage";
import { LocationContext } from "../../context/LocationContext";
import { Box, Typography } from "@mui/material";
import { capitalizeFirstWord } from "../../utils/letter/capitalizeFirstWord";

export default function Location() {
  const { state } = useContext(LocationContext);
  const [locationImg, setLocationImg] = useState(null);
  useEffect(() => {
    async function getImg() {
      try {
        const photos = await getLocationImage(state.location);
        setLocationImg(photos);
      } catch (error) {
        console.error("Error fetching photos:", error);
      }
    }
    getImg();
  }, [state.location]);

  return (
    <Box
      sx={{
        position: "relative",
        width: "100%", // Use 100% width for responsiveness
        paddingTop: "56.25%", // Maintain aspect ratio for a 16:9 box
        borderRadius: "7px",
        overflow: "hidden",
      }}
    >
      {locationImg && (
        <Box
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundImage: `url(${locationImg})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            filter: "blur(3px)", // Add a blur effect to the background image
          }}
        />
      )}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "#FFF6F6", // Set text color
          fontSize: ["14px", "16px", "18px"], // Responsive font size using an array
          textAlign: "center",
          fontWeight: 600,
          zIndex: 1,
        }}
      >
        <Typography variant="subtitle2">{capitalizeFirstWord(state.location)}</Typography>
      </Box>
    </Box>
  );
}
