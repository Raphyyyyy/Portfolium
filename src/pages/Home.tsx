import React from "react";
import { Helmet } from "react-helmet-async";

import "../App.css";
import Header from "../components/Header.tsx";
import Projetos from "../components/Projetos.tsx";
import BurgerMenu from "../components/BurgerMenu.tsx";
import Profile from "../components/Profile.tsx";
import Skill from "../components/Skill.tsx";
import FundoDandelion from "../components/FundoDandelion.tsx";
import HeaderPetalas from "../components/HeaderPetalas";
import FadeWrapper from "../components/FadeWrapper.tsx";
import Whatsapp from "../components/Whatsapp.tsx";

function Home() {
  return (
    <>
      {/* SEO invisível */}
      <Helmet>
        <title>Rafael Nunes | Desenvolvedor React TypeScript</title>

        <meta
          name="description"
          content="Portfólio de Rafael Nunes, Desenvolvedor Front-End especializado em Web Design, React, TypeScript, Vite e interfaces modernas com foco em performance e experiência do usuário."
        />

        <meta
          name="keywords"
          content="Desenvolvedor React, Desenvolvedor Front-End, Portfólio React, TypeScript, Vite, Framer Motion, UI UX"
        />

        <meta property="og:title" content="Rafael Nunes | Desenvolvedor React e Web Designer" />
        <meta
          property="og:description"
          content="Projetos modernos em React + TypeScript com foco em mobile first, performance e design ."
        />

        <meta property="og:type" content="website" />

        <link
          rel="canonical"
          href="https://raphyyyyy.github.io/Portfolium/"
        />
      </Helmet>

      {/* SEU SITE VISUAL */}
      <div className="containerPai" style={{ position: "relative", zIndex: 1 }}>
        <div className="home-pai">
          <BurgerMenu />

          <div className="divPai">
            <FadeWrapper>
              <Header />
              <HeaderPetalas />
              <div className="fundo">
                <FundoDandelion />
              </div>
            </FadeWrapper>
          </div>

          <Whatsapp />
          <div className="divPai"><Profile /></div>
          <div className="divPai"><Skill /></div>
          <div className="divPai"><Projetos /></div>
        </div>
      </div>
    </>
  );
}

export default Home;