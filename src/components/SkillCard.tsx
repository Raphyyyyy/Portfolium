import React from 'react'
import '../styles/SkillCard.css'
import { div } from 'framer-motion/client';


type SkillProps = {
  title: string;
  items: string[];
};

function SkillCard({ title, items }: SkillProps) {
  return (

    <div className="SkillCardList" id='SkillCard'>

      <div className="SkillGrid">
        <div className="skillTitulo">
          <h2>{title}</h2>
        </div>
        <div className="skillTexto">
          {items.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </div>
      </div>

    </div>

  )
}

export default SkillCard
