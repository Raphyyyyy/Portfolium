import React from "react";
import { Link } from "react-router-dom";
import "../styles/ProjectCard.css";
import useIsMobile from "../components/IsMobile";


type CardsProps = {
  projectName: string;
  tags: string[];
  slug: string;
  image: string;
};

function ProjectCard({ projectName, tags, slug, image }: CardsProps) {
  const isMobile = useIsMobile();

  const conteudoCard = (
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
      <div name="botao-card" className="botao-card">
        {!isMobile && (
          <Link to={`projeto/${slug}`}>
            <button>Ver mais</button>
          </Link>
        )}
      </div>
    </div>
  );

  return (
    <>
      {isMobile ? (
        <Link to={`projeto/${slug}`}>{conteudoCard}</Link>
      ) : (
        <div>{conteudoCard}</div>
      )}
    </>
  );
}

export default ProjectCard;
