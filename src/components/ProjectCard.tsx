import React from "react";
import { Link } from "react-router-dom";
import "../styles/ProjectCard.css";

type CardsProps = {
  projectName: string;
  tags: string[];
  slug: string;
  image: string;
  linkSite: string; // Este será passado para a página Projeto
};

function ProjectCard({ projectName, tags, slug, image, linkSite }: CardsProps) {

  console.log("linkSite recebido:", linkSite , "slug", slug);

  return (

   <Link to={`/projeto/${slug}`} state={{ linkSite, slug }}>
    
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
    </Link>
  );
}

export default ProjectCard;
