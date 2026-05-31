import { useState } from "react";
import SkillTabsDB from "./SkillTabsDB";
import "../styles/SkillTabs.css";

type SkillTabId = "codigo" | "design" | "estrategia";

type SkillTab = {
  id: SkillTabId;
  titulo: string;
  classe: string;
  imagem: string;
  alt: string;
};

const SkillTabs = () => {
  const baseUrl = import.meta.env.BASE_URL;

  const [abaAberta, setAbaAberta] = useState<SkillTabId>("codigo");

  const abas: SkillTab[] = [
    {
      id: "codigo",
      titulo: "Código",
      classe: "codigo",
      imagem: `${baseUrl}assets/Skills/code.png`,
      alt: "Código",
    },
    {
      id: "design",
      titulo: "Design",
      classe: "design",
      imagem: `${baseUrl}assets/Skills/design.png`,
      alt: "Design",
    },
    {
      id: "estrategia",
      titulo: "Estratégia",
      classe: "estrategia",
      imagem: `${baseUrl}assets/Skills/market.png`,
      alt: "Estratégia",
    },
  ];

  function abrirAba(id: SkillTabId) {
    setAbaAberta(id);
  }

  return (
    <div className="SkillTabsPai">
      {abas.map((aba) => {
        const estaAberta = abaAberta === aba.id;

        return (
          <div
            key={aba.id}
            className={`skillTabsFilho ${aba.classe} ${
              estaAberta ? "aberto" : "fechado"
            }`}
            onClick={() => abrirAba(aba.id)}
          >
            <img
              src={aba.imagem}
              alt={aba.alt}
              className="skillImgFundo"
              draggable={false}
            />

            <div className="skillOverlay" />

            <h1 className="titulo">{aba.titulo}</h1>

            {estaAberta && (
              <div className="skillConteudo">
                <SkillTabsDB tipo={aba.id} />
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default SkillTabs;