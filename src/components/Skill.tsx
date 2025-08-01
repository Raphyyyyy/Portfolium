import React from "react";
import SkillCard from "./SkillCard";
import habilidades from "../data/Habilidades";
import "../styles/Skill.css";
import { motion } from "framer-motion";
import ImageWrapper from "./ImageWrapper";
import FadeWrapper from "./FadeWrapper";
import BackgroundText from "./BackgroundText";
import Slider from "./Slider";

function Skill() {
  return (
    <div className="SkillDiv" id="skill">

      <BackgroundText texto="HABILIDADES"/>
{/* 
      <h1>HABILIDADES</h1> */}
      <Slider />
      {/* <div className="UlDiv">
        <ul>
          {habilidades.map((skill, index) => (
           <ImageWrapper key={skill.nome} style={{ borderRadius: '10%' }} delay={(index+1)*0.2}>
            <li key={skill.nome}>
              <SkillCard name={skill.nome} icon={skill.icone} />
            </li>
            </ImageWrapper>
          ))}
        </ul>
      </div> */}
    </div>
  );
}

export default Skill;
