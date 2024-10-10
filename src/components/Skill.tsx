import React from "react";
import SkillCard from "./SkillCard";
import habilidades from "../data/Habilidades";
import "../styles/Skill.css";

function Skill() {
  return (
    <div className="SkillDiv" id='skill'>
      <h1>HABILIDADES</h1>
      <div className="UlDiv">
        <ul>
          {habilidades.map((skill) => (
            <li key={skill.nome}>
              <SkillCard name={skill.nome} icon={skill.icone} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Skill;
