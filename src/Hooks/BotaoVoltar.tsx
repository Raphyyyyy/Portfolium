import React from "react";
import { useNavigate } from "react-router-dom";

function BotaoVoltar() {
  const navigate = useNavigate();

  const handleVoltar = () => {
    // Se há histórico, volta uma página
    if (window.history.length > 1) {
      navigate(-1);

      // Espera o React Router carregar e a animação inicial terminar
      setTimeout(() => {
        // Força a navegação para o hook "#projects"
        if (!window.location.hash || window.location.hash !== "#projects") {
          window.location.hash = "#projects";
        }

        // Scroll suave até o hook (caso o navegador não role automaticamente)
        setTimeout(() => {
          const target = document.querySelector("#projects");
          if (target) target.scrollIntoView({ behavior: "smooth" });
        }, 800); // ⏳ tempo pra animação do header acabar
      }, 600);
    } else {
      // Se não tiver histórico (acesso direto ao projeto)
      window.location.href = "/#projects";
    }
  };

  return (
    <button onClick={handleVoltar} className="linkProjeto botaoVoltar">
      VOLTAR
    </button>
  );
}

export default BotaoVoltar;
