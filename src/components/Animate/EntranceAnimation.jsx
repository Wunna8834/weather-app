import { motion, useAnimation } from "framer-motion";
import { useContext, useEffect } from "react";
import { WeatherContext } from "../../context/WeatherContext";
import { LocationContext } from "../../context/LocationContext";

export default function EntranceAnimation({ children }) {
  const controls = useAnimation();
  const entranceAnimation = {
    hidden: { x: -20, opacity: 0 },
    visible: { x: 0, opacity: 1 },
  };
  const weather_conditions = useContext(WeatherContext);
  const {state} = useContext(LocationContext)
  useEffect(() => {
    controls.start('visible')
  }, [weather_conditions, controls, state.location])
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={entranceAnimation}
      transition={{ duration: 1, delay: 0.5 }}
    >
      {children}
    </motion.div>
  );
}
