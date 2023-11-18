import { Button, IconButton, Box } from "@mui/material";
import { styled } from "@mui/material/styles";
import { useState, useContext } from "react";
import { UnitContext } from "../../context/UnitContext";

const BootstrapButton = styled(IconButton)({
  borderRadius: "50%",
  width: "40px",
  height: "40px",
  fontSize: "18px",
});

export default function UnitBtn() {
  const [isActive, setActive] = useState("button1");
  const { setCelsius } = useContext(UnitContext);

  function handleCesiusChange() {
    setActive("button1");
    setCelsius(true);
  }

  function handleFahrenheitChange() {
    setActive("button2");
    setCelsius(false);
  }
  return (
    <Box display="flex" justifyContent="flex-end" gap={1}>
      <BootstrapButton
        variant="contained"
        sx={{
          backgroundColor: isActive === "button1" ? "#272829" : "#F5F7F8",
          color: isActive === "button1" ? "white" : "#272829",
        }}
        onClick={handleCesiusChange}
      >
        &deg;C
      </BootstrapButton>
      <BootstrapButton
        variant="contained"
        sx={{
          backgroundColor: isActive === "button2" ? "#272829" : "#F5F7F8",
          color: isActive === "button2" ? "white" : "#272829",
        }}
        onClick={handleFahrenheitChange}
      >
        &deg;F
      </BootstrapButton>
    </Box>
  );
}
