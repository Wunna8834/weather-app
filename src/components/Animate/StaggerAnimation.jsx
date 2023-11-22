import { motion, AnimatePresence } from "framer-motion";
export default function StaggerAnimation({ children }) {
  const staggerAnimation = {
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
    hidden: { opacity: 0 },
  };
  return (
    <motion.div variants={staggerAnimation} initial="hidden" animate="visible">
      <AnimatePresence>{children}</AnimatePresence>
    </motion.div>
  );
}
