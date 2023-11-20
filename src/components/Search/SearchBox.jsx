import { Box, TextField } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { useContext, useState } from "react";
import { LocationContext } from "../../context/LocationContext";

export default function SearchBox() {
  const [location, setLocation] = useState("");
  const { dispatch } = useContext(LocationContext);

  const handleSearch = () => {
    dispatch({ type: "NEW_SEARCH", payload: { location } });
  };
  const handleKeyDown = (e) => {
    if(e.key === "Enter") {
        handleSearch()
        setLocation("")
    }
  }
  return (
    <Box sx={{ display: "flex", alignItems: "flex-end" }}>
      <SearchIcon sx={{ color: "#DDE6ED" }} />
      <TextField
        value={location}
        onChange={(e) => setLocation(e.target.value)}
        onKeyDown={handleKeyDown}
        label="Search for places..."
        variant="standard"
      />
    </Box>
  );
}
