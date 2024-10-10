import React from "react";
import { useParams } from "react-router-dom";
import ProjectData from "../data/ProjectData";
import degrade from "../assets/Projetos/Degrade.png";
import { useNavigate } from 'react-router-dom';
import "../styles/Projeto.css";


import "../App.css";
import FadeWrapper from "../components/FadeWrapper.tsx";


function Projeto() {
  const { id } = useParams();
  const projeto = ProjectData.find((projeto) => projeto.id === id); // Pega o projeto certo

const navigate = useNavigate();
const voltar = () => {
  navigate(-1); // Volta para a página anterior
};

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  // isso faz com que a pagina comece no topo e não em baixo

  const image1 = projeto?.image1;
  const image2 = projeto?.image2;
  const image3 = projeto?.image3;
  const image4 = projeto?.image4;

  return (
    <div className="ProjetoIndPai">
      <i className="fa-solid fa-arrow-left" onClick={voltar}></i>

      <div className="HeaderImageWrapper">
        <img src={degrade} className="Degrade" />
        {projeto?.headerImage && (
          <img
            src={projeto.headerImage}
            className="HeaderImage"
            alt={projeto.title}
          />
        )}
      </div>
      <FadeWrapper>
      <h1>{projeto?.title}</h1>
      <h2>{projeto?.title}</h2>
</FadeWrapper>
      <p className="ProjDescricao">{projeto?.description}</p>

      <div name="Proj-div-tags" className="Proj-div-tags">
        <p>
          {projeto?.techs.map((tag) => (
            <span key={tag}>{tag}</span>
          ))}
        </p>
      </div>

      <div
        className="ProjDescricaoFull"
        dangerouslySetInnerHTML={{ __html: projeto?.fullDescription || "" }}
      />
      {/* dangerouslySetInnerHTML faz com que o HTML apareça ex <br> */}

      <div className="Projeto-Botao">
        <a href={projeto?.linkSite} target="_blank" rel="noopener noreferrer">
          <button>Ver site</button>
        </a>
        <a href={projeto?.linkCode} target="_blank" rel="noopener noreferrer">
          <button>Ver código</button>
        </a>
      </div>

      <div className="grid-pai">
        <div className="grid-container">
          {image1 && <img src={image1} alt="Imagem 1 do projeto" />}
          {image2 && <img src={image2} alt="Imagem 2 do projeto" />}
          {image3 && <img src={image3} alt="Imagem 3 do projeto" />}
          {image4 && <img src={image4} alt="Imagem 4 do projeto" />}
        </div>
      </div>
    </div>
  );
}

export default Projeto;
