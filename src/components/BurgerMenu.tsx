// src/components/BurgerMenu.js
import React, { useState } from "react";
import { motion } from "framer-motion";
import "../styles/BurgerMenu.css";

const BurgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="menu-pai">
      <motion.div
        className="burger-icon"
        onClick={toggleMenu}
        animate={{ rotate: isOpen ? 180 : -180 }} // Rotação de 180 graus
        transition={{ type: "spring", duration: 1 }}
      >
        <div className={`line ${isOpen ? "open" : ""}`}></div>
        <div className={`line ${isOpen ? "open" : ""}`}></div>
        <div className={`line ${isOpen ? "open" : ""}`}></div>
      </motion.div>

      {isOpen && (
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            y: [10, 20, 0],
          }}
          transition={{
            duration: 1,
            ease: "easeInOut",
          }}
          className="menu"
        >
          <ul>
            <li className="menu_titulo">Menu</li>
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#profile">Sobre Mim</a>
            </li>
            <li>
              <a href="#skill">Habilidades</a>
            </li>
            <li>
              <a href="#projects">Projetos</a>
            </li>
            <li>
              <a
                href="https://github.com/Raphyyyyy/Portfolium/raw/refs/heads/main/Rafael%20Alexandre%20Nunes.docx"
                target="_blank"
                rel="noopener noreferrer"
              >
                Curriculum
              </a>
            </li>
          </ul>
        </motion.div>
      )}
    </div>
  );
};

export default BurgerMenu;
