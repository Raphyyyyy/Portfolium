import React, { useEffect, useState } from "react";
import "../styles/ProfileBox.css";
import foto from "../assets/foto2.png";
import github from "../assets/icones/github-logo.png";
import linkedin from "../assets/icones/linkedin_logo_icon_147268.png";
import curriculum from "../assets/icones/curriculum1.png";
import { motion } from "framer-motion";
import ImageWrapper from "./ImageWrapper";

function ProfileBox() {
  const [fade, setFade] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    window.addEventListener("resize", handleResize);

    const timer = setTimeout(() => {
      setFade(true);
    }, 100);

    return () => {
      clearTimeout(timer);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="container">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{
          scale: [0.5, 1.3, 1],
          opacity: [0, 1],
        }}
        transition={{
          duration: 1.5,
          ease: "easeInOut",
          delay: 0.5,
        }}
        className="background"
      ></motion.div>
      {/* Fundo azul */}

        
      <ImageWrapper style={{ borderRadius: '50%', width: isMobile ? '70%' : 'auto' }}>
        {/* Imagem do perfil */}
        <img
          src={foto}
          alt="foto de desenvolvedor front end"
          className="foto-perfil"
        />
      </ImageWrapper>

      <motion.div
        className="texto1"
        initial={{ opacity: 0 }}
        whileInView={{
          opacity: [0, 1],
        }}
        transition={{
          duration: 2,
          ease: "easeInOut",
          delay: 0.7, // Atraso antes de começar
        }}
      >
        <h1>
          <br />
          Rafael Nunes
        </h1>
        <hr />
        <h2>Desenvolvedor Front-end</h2>
      </motion.div>

      <motion.div
        className="texto2"
        initial={{ opacity: 0 }}
        whileInView={{
          opacity: [0, 1],
        }}
        transition={{
          duration: 2,
          ease: "easeInOut",
          delay: 0.7, // Atraso antes de começar
        }}
      >
        Criativo e entusiasta de soluções inovadoras , desenvolvi de forma autodidata competências em programação e design, acredito que um bom design é aquele que deixa claro seu objetivo assim como uma programação, organizada e fácil de ler.
        <br />
        <br />
        Sou comprometido com o aprendizado contínuo e a busca por novos desafios.
      </motion.div>
      <div className="icone">
        <a
          href="https://github.com/Raphyyyyy"
          target="_blank"
          rel="noopener noreferrer"
        >
          <motion.img
            initial={{ opacity: 0 }}
            whileInView={{
              opacity: [0, 1],
              scale: [0.5, 1.3, 1],
              y: [0, 20, -4],
            }}
            exit={{ opacity: 0 }}
            transition={{
              duration: 2,
              ease: "easeInOut",
              delay: 1.2,
            }}
            src={github}
            alt="github"
            className="iconeRedondo"
          />
        </a>

        <a
          href="https://linkedin.com/in/rafael-nunes-a078ba158"
          target="_blank"
          rel="noopener noreferrer"
        >
          <motion.img
            initial={{ opacity: 0 }}
            whileInView={{
              opacity: [0, 1],
              scale: [0.5, 1.3, 1],
              y: [0, 20, 0],
            }}
            transition={{
              duration: 2,
              ease: "easeInOut",
              delay: 1.4,
            }}
            src={linkedin}
            alt="linkedin"
            className="iconeRedondo"
          />
        </a>

        <a
          href="https://github.com/Raphyyyyy/Portfolium/raw/refs/heads/main/Rafael%20Alexandre%20Nunes.docx"
          target="_blank"
          rel="noopener noreferrer"
        >
          <motion.img
            initial={{ opacity: 0 }}
            whileInView={{
              opacity: [0, 1],
              scale: [0.5, 1.3, 1],
              y: [0, 20, 0],
            }}
            transition={{
              duration: 2,
              ease: "easeInOut",
              delay: 1.6,
            }}
            src={curriculum}
            alt="curriculum"
            className="iconeComprido"
          />
        </a>
      </div>
    </div>
  );
}

export default ProfileBox;
