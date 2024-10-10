import React from "react";
import PropTypes from "prop-types";
import ProjectCard from "./ProjectCard";
// import projeto1 from "../assets/projeto1.jpg";
import ProjectData from "../data/ProjectData";
import { Link } from "react-router-dom"; 
import "../styles/Projetos.css";

function Projetos(props) {
  return (
    <div className="projetos-pai" id="projects">
      <h1>PROJETOS</h1>
      <div>
        <ul>
          {ProjectData.map((projeto) => (
            <Link key={projeto.id} to={`/projeto/${projeto.id}`}>
            <li>
              <ProjectCard
                projectName={projeto.title}
                tags={projeto.techs}
                image={projeto.iconimage}
                slug={projeto.id}
              />
            </li>
            </Link>
          ))}
        </ul>
      </div>
    </div>
  );
}

Projetos.propTypes = {};

export default Projetos;





// import React, { useEffect, useState } from "react";
// import ProjectCard from "./ProjectCard";
// import { Link } from "react-router-dom";
// import "../styles/Projetos.css";

// interface Projeto {
//   id: string;
//   title: string;
//   techs: string[];
//   iconimage: string;
// }

// Componente principal
// function Projetos() {
  // Estados para a API
  // const [projetos, setProjetos] = useState<Projeto[] | null>(null);
  // const [loading, setLoading] = useState(true);
  // const [error, setError] = useState<string | null>(null);

  // Efeito para buscar dados da API
  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await fetch("http://localhost:5000/projetos");
  //       if (!response.ok) {
  //         throw new Error("Erro ao buscar dados da API");
  //       }
  //       const data = await response.json();
  //       setProjetos(data);
  //     } catch (error: any) {
  //       setError(error.message);
  //     } finally {
  //       setLoading(false);
  //     }
  //   };

  //   fetchData();
  // }, []);

  // Tratamento de estados
//   if (loading) return <p>Carregando...</p>;
//   if (error) return <p>Erro ao carregar... {error}</p>;
//   if (!projetos) return <p>Nenhum projeto encontrado.</p>;

//   return (
//     <div className="projetos-pai" id="projects">
//       <h1>PROJETOS</h1>
//       <div>
//         <ul>
//           {projetos.map((projeto) => (
//             <Link key={projeto.id} to={`/projeto/${projeto.id}`}>
//               <li>
//                 <ProjectCard
//                   projectName={projeto.title}
//                   tags={projeto.techs}
//                   image={projeto.iconimage}
//                   slug={projeto.id}
//                 />
//               </li>
//             </Link>
//           ))}
//         </ul>
//       </div>
//     </div>
//   );
// }

// export default Projetos;
