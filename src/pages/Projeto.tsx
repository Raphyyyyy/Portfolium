import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useProjects } from "../context/ProjectContext";
import degrade from "../assets/Projetos/Degrade.png";
import "../styles/Projeto.css";
import "../App.css";
import Slider from "../components/Slider"; 

function Projeto() {
  const { slug } = useParams(); // Pega o parâmetro slug da URL
  const projectData = useProjects(); // Pega os dados do contexto

  // acessa a estrutura correta dos dados
  const projeto = projectData.find((projeto) => projeto.slug === slug); // Pega o projeto certo
  //console.table(projectData);

  const navigate = useNavigate();
  const voltar = () => {
    navigate(-1); // Volta para a página anterior
  };

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []); // Faz a página começar no topo

  if (!projeto) {
    return <div>Projeto não encontrado</div>; // Mostra mensagem se o projeto não for encontrado
  }

  const image1 = projeto.metadata?.image1;
  const image2 = projeto.metadata?.image2;
  const image3 = projeto.metadata?.image3;
  const image4 = projeto.metadata?.image4;

  const imagens = [image1, image2, image3, image4];

  const baseURL = "https://raphyyyyy.github.io/Portfolium";
  const arrumaURL = (path) => `${baseURL}/${path}`; 
  //isso arruma a url pro gtihub pages


  return (
    <div className="ProjetoIndPai">
      <i className="fa-solid fa-arrow-left" onClick={voltar}></i>

      <div className="HeaderImageWrapper">
        <img src={degrade} className="Degrade" alt="Degrade" />
        {projeto.metadata?.headerimage && (
          <img
            src={arrumaURL(projeto.metadata.headerimage)}
            className="HeaderImage"
            alt={projeto.title}
          />
        )}
      </div>

      <h1>{projeto.title}</h1>
      <h2>{projeto.title}</h2>

      <p className="ProjDescricao"
      dangerouslySetInnerHTML={{ __html: projeto.metadata?.description || "" }}
      />
        


      <div name="Proj-div-tags" className="Proj-div-tags">
        <p>
          {projeto.metadata?.techs ? projeto.metadata.techs.split(',').map((tag) => (
            <span key={tag.trim()}>{tag.trim()}</span>
          )) : <span>Nenhuma tecnologia listada</span>}
        </p>
      </div>

      <div
        className="ProjDescricaoFull"
        dangerouslySetInnerHTML={{ __html: projeto.metadata?.fulldescription || "" }}
      />

      <div className="Projeto-Botao">
        <a href={projeto.metadata?.linkSite} target="_blank" rel="noopener noreferrer">
          <button>Ver site</button>
        </a>
        <a href={projeto.metadata?.linkCode} target="_blank" rel="noopener noreferrer">
          <button>Ver código</button>
        </a>
      </div>

      {/* <div className="grid-pai">
        <div className="grid-container">
          {image1 && <img src={arrumaURL(image1)} alt="Imagem 1 do projeto" />}
          {image2 && <img src={arrumaURL(image2)} alt="Imagem 2 do projeto" />}
          {image3 && <img src={arrumaURL(image3)} alt="Imagem 3 do projeto" />}
          {image4 && <img src={arrumaURL(image4)} alt="Imagem 4 do projeto" />}
        </div>
      </div> */}

      <Slider imagens={imagens}/>
    </div>
  );
}

export default Projeto;
