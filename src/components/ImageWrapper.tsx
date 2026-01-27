import React from 'react';
import { motion } from 'framer-motion';
import '../styles/ImageWrapper.css';

const ImageWrapper = ({ children, delay = 0 , style }) => {
  return (
  <div className="image-container">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{
          // scale: [0.5, 1.1, 1],
          opacity: [0, 1],
        }}
        transition={{
          duration: 2,
          ease: "easeInOut",
          delay: delay, 
        }}
      >
        {children}

        <motion.div
          className="mask"
          style={style}
          initial={{ opacity: 0 }}
          whileInView={{
            opacity: [1, 0],
          }}
          transition={{
            duration: 3,
            ease: "easeInOut",
            delay: delay + 0.5, 
          }}
        />
      </motion.div>
    </div>
  );
};

export default ImageWrapper;
