// File: src/components/TestMotion.jsx

import { motion } from 'framer-motion';
import React from 'react';

const TestMotion = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="p-4 bg-green-500 rounded-lg"
    >
      Framer Motion is working!
    </motion.div>
  );
};

export default TestMotion;