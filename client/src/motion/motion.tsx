import React from "react";
import { motion } from "framer-motion";

type Props = {
  children?: React.ReactNode;
}

const Motion = ({ children } : Props) => (
    <motion.div 
      initial={{ y: 200, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: 200, opacity: 0 }}
      transition={{
        type: "spring",
        stiffness: 260,
        damping: 20,
      }}
    >
      {children}
    </motion.div>

);
export default Motion;