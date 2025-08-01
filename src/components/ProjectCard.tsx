import React from "react";
import { Link } from "react-router-dom";
import "../styles/ProjectCard.css";

type CardsProps = {
  projectName: string;
  tags: string[];
  slug: string;
  image: string;
  linkSite: string;
};

function ProjectCard({ projectName, tags, slug, image, linksite }: CardsProps) {

  {console.log("🔗 linkSite recebido:", linksite , "slug", slug);}
  return (
    <a href={linksite} target="_blank" rel="noopener noreferrer">
      
      <div className="conteiner-card" name="conteiner-card">
        <img src={image} name="thumb-projeto" alt={projectName} />
        <div name="div-tags" className="div-tags">
          <h2>{projectName}</h2>
          <p>
            {tags.map((tag) => (
              <span key={tag}>{tag}</span>
            ))}
          </p>
        </div>
      </div>
    </a>
  );
}

export default ProjectCard;
