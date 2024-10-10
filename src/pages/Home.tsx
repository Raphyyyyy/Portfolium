import React, { useEffect, useState } from "react";
import "../App.css";
import Header from "../components/Header.tsx";
import Projetos from "../components/Projetos.tsx";
import BurgerMenu from "../components/BurgerMenu.tsx";
import Profile from "../components/Profile.tsx";
import Skill from "../components/Skill.tsx";
import FundoDandelion from "../components/FundoDandelion.tsx";
import HeaderPetalas from "../components/HeaderPetalas";
import FadeWrapper from "../components/FadeWrapper.tsx";

function Home() {

// Desabilitar o scroll ao carregar e reabilita em 7 segundos
  const [scrollEnabled, setScrollEnabled] = useState(false);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    const timer = setTimeout(() => {
      setScrollEnabled(true);
      document.body.style.overflow = "auto"; // Habilita o scroll
    }, 6000);
    return () => clearTimeout(timer); 
  }, []);
//--------------------------------------------------------------

  return (
    <div className="home-pai">
      <BurgerMenu />
      <FadeWrapper>
        <Header />
        <HeaderPetalas />
        <div className="fundo">
          <FundoDandelion />
        </div>
      </FadeWrapper>

 {/* <FadeWrapper>  */}
        <Profile />
 {/* </FadeWrapper>  */}

      {/* <FadeWrapper> */}
        <Skill />
      {/* </FadeWrapper> */}

      <Projetos />
    </div>
  );
}

export default Home;
