// Projetos.tsx
import React from "react";
import ProjectCard from "./ProjectCard";
import ImageWrapper from "./ImageWrapper";
import "../styles/Projetos.css";
import BackgroundText from "./BackgroundText";
import { useProjects } from "../context/ProjectContext";

function Projetos() {
  const projectData = useProjects();

  // Debug para ver os dados e estrutura exata
  React.useEffect(() => {
    console.log("projectData completo:", projectData);
    projectData.forEach((projeto, index) => {
      console.log(`Projeto ${index} metadata:`, projeto.metadata);
    });
  }, [projectData]);

  return (
    <div className="projetos-pai" id="projects">
      <BackgroundText texto="PROJETOS" />
      <div>
        <ul>
          {projectData.map((projeto, index) => {
            // Segurança para evitar erros caso metadata seja undefined
            const metadata = projeto.metadata || {};
            const tags = metadata.techs ? metadata.techs.split(",").map((t: string) => t.trim()) : [];

            return (
              <ImageWrapper
                key={projeto.slug}
                style={{ borderRadius: "10%" }}
                delay={(index + 1) * 0.2}
              >
                <li>
                  <ProjectCard
                    projectName={projeto.title || "Sem título"}
                    tags={tags}
                    image={metadata.iconimage || ""}
                    linksite={metadata.linksite || ""}
                    slug={projeto.slug}
                  />
                </li>
              </ImageWrapper>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default Projetos;
