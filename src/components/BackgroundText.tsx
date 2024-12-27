import React from "react";
import { motion } from "framer-motion";
import "../styles/BackgroundText.css";

function BackgroundText({ texto }) {
  return (
    <div>
      <div className="background_projetos">
        <motion.p
          initial={{ opacity: 0.4 }}
          whileInView={{
            opacity: [0.4, 1, 0.4],
          }}
          transition={{
            duration: 3,
            ease: "easeInOut",
            delay: 2,
            repeat: Infinity,
          }}
          className="brilhante"
        >
          {texto}
        </motion.p>
        {/* array 150 */}
        {Array(250).fill().map((_, index) => ( //repete 150x o texto
          <React.Fragment key={index}>
            <p>{texto}</p>
              {index % 5 === 0 ? ( //se o index for divisivel por 5 ele pisca
              <motion.p
                initial={{ opacity: 0.4 }}
                whileInView={{
                  opacity: [0.4, 1, 0.4],
                }}
                transition={{
                  duration: 3,
                  ease: "easeInOut",
                  delay: 2,
                  repeat: Infinity,
                }}
                className="brilhante"
              >
                {texto}
              </motion.p>
            ) : (
              <p>{texto}</p>
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}

export default BackgroundText;
