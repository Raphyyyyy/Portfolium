import React, { useEffect, useState } from "react";
import "../styles/ProfileBox.css";
import github from "../assets/icones/github-logo.png";
import linkedin from "../assets/icones/linkedin_logo_icon_147268.png";
import curriculum from "../assets/icones/CVlogo.png";
import { motion } from "framer-motion";
import useIsMobile from "./IsMobile";

function ProfileBox() {
  const [fade, setFade] = useState(false);
  const isMobile = useIsMobile(); 

  useEffect(() => {
    const timer = setTimeout(() => {
      setFade(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="container">

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{
            opacity: [0, 1],
            rotate: [0, 30],
        }}
        transition={{
          duration: 1.5,
          ease: "easeInOut",
          delay: 0.5,
        }}
        className="background"
      ></motion.div>

      <motion.div
        className="backMargem"
        initial={{ opacity: 0 }}
        whileInView={{
          opacity: [0, 1],
          rotate: !isMobile ? 58 : 188,
        }}
        transition={{
          duration: 1.5,
          ease: "easeInOut",
          delay: 0.5,
        }}

      ></motion.div>

    
      
      <motion.div
        className="texto2"
        initial={{ opacity: 0 }}
        whileInView={{
          opacity: [0, 1],
        }}
        transition={{
          duration: 2,
          ease: "easeInOut",
          delay: 0.7,
        }}
      >
        Criativo e entusiasta de soluções inovadoras, desenvolvi de forma
        autodidata competências em programação e design, acredito que um bom
        design é aquele que deixa claro seu objetivo assim como uma programação,
        organizada e fácil de ler.
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
          href="https://github.com/Raphyyyyy/Portfolium/raw/main/CV_Rafael_Alexandre_Nunes_.docx"
          download="Rafael_Alexandre_Nunes_CV.docx"
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
            className="iconeRedondo"
          />
        </a>
      </div>
    </div>
  );
}

export default ProfileBox;
