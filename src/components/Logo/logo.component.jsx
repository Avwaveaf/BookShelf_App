import React from 'react';
import { motion } from 'framer-motion';

const Logo = () => {
  return (
    <motion.div
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ duration: 1 }}
      style={{ display: "flex", alignItems: "center" }}
    >
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200">
        {/* SVG logo goes here */}
      </svg>
      <motion.h1
        initial={{ x: -50 }}
        animate={{ x: 0 }}
        transition={{ duration: 1 }}
        style={{ marginLeft: 10 }}
      >
        foragoodReads
      </motion.h1>
    </motion.div>
  );
};

export default Logo;
