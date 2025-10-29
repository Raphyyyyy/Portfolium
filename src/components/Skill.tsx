import React from "react";
import { motion } from "framer-motion";
import Habilidades from "../data/Habilidades";
import BackgroundText from "./BackgroundText";
import { useIsMobile } from "../Hooks/IsMobile"; 
import "../styles/Skill.css";

function Skill() {
  const isMobile = useIsMobile(); 
  const hardSkills = Habilidades.find((cat) => cat.categoria === "Hard Skills");
  const softSkills = Habilidades.find((cat) => cat.categoria === "Soft Skills");

  return (
    <>
      <BackgroundText texto="HABILIDADES" />
      <div className="SkillDiv" id="skill">
        <div className="skillCategorias">

          {/* HARD SKILLS */}
          <motion.div
            className="hardSkills"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2>{hardSkills?.categoria}</h2>
            <div className="skillGrid">
              {hardSkills?.items.map((item) => {
                const Icon = item.icone;
                return (
                  <motion.div
                    key={item.nome}
                    className="skillItem"
                    whileHover={{ scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 200 }}
                  >
                    <span className="icone"><Icon /></span>
                    <p>{item.nome}</p>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          {/* SOFT SKILLS ismobile*/}
          {!isMobile && (
            <motion.div
              className="softSkills"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1 }}
            >
              <h2>{softSkills?.categoria}</h2>
              <p className="softText">{softSkills?.descricao}</p>
            </motion.div>
          )}

        </div>
      </div>
    </>
  );
}

export default Skill;
