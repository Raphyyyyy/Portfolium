import React from "react";
import { Link } from "react-router-dom";
import "../styles/ProjectCard.css";

type CardsProps = {
  projectName: string;
  tags: string[];
  slug: string;
  image: string;
  linkSite?: string;
  logo?: string;
};

function ProjectCard({ projectName, tags, slug, image, linkSite, logo }: CardsProps) {
  console.log("linkSite recebido:", linkSite, "slug", slug);

  return (
    <Link to={`/projeto/${slug}`} state={{ linkSite, slug }}>
      <div className="conteiner-card" name="conteiner-card">
        <div className="cardImagem">
          {logo && (
            <img src={logo} alt={`${projectName} logo`} className="projLogo" />
          )}

          <img src={image} name="thumb-projeto" alt={projectName} className="projImg"/>
        </div>

        <h2 className="titulo-overlay">{projectName}</h2>
      </div>
    </Link>
  );
}

export default ProjectCard;
