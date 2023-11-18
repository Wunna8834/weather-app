import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { LocationProvider } from "./context/LocationContext.jsx";
import { WeatherProvider } from "./context/WeatherContext.jsx";
import { UnitProvider } from "./context/UnitContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <LocationProvider>
      <WeatherProvider>
        <UnitProvider>
          <App />
        </UnitProvider>
      </WeatherProvider>
    </LocationProvider>
  </React.StrictMode>
);
