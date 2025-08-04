import React, { useEffect, useState } from "react";
import "../styles/Header.css";

function Header() {
  const [fade, setFade] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  //se a tela for pequena ele quebra a linha
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    window.addEventListener("resize", handleResize);

    const timer = setTimeout(() => {
      setFade(true);
    }, 100);

    return () => {
      clearTimeout(timer);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="titulo-pai" id="home">
      <h1 className={`header-title ${fade ? "fade-in" : ""}`}>Portfólio</h1>
      <br /> <hr /> <br />
      <h2 className={`header-subtitle ${fade ? "fade-in" : ""}`}>
        Portfólio front end 
        {isMobile ? 
        <><br />{/*&nbsp;&nbsp;&nbsp; */} </> 
        : " de"} Rafael Nunes
      </h2>
    </div>
  );
}

export default Header;
