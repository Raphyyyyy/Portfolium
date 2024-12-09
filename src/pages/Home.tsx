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
import Whatsapp from "../components/Whatsapp.tsx";

function Home() {

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
        <Whatsapp />
        <Profile />
        <Skill />
      <Projetos />
    </div>
  );
}

export default Home;
