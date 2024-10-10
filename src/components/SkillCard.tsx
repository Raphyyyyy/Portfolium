import React from 'react'
import '../styles/SkillCard.css'

type SkillProps = {
  name: string;
  icon: string;
};

function SkillCard({name,icon}: SkillProps) {
  return (
    <div className='SkillCard' id='SkillCard'>
      <i className={icon}></i> 
      <h2>{name}</h2> 
    </div>
  )
}

export default SkillCard
