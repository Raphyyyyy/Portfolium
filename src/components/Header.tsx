import React, { useEffect, useState } from "react";
import "../styles/Header.css";


function Header() {
  const [fade, setFade] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setFade(true); //aqui começa dps de 100ms pra dar tempo da pagina carregar
    }, 100);

    return () => clearTimeout(timer); // Limpa o timer se o componente for desmontado
  }, []);



  
  return (
    <div className="titulo-pai" id="home">
      <h1 className={`header-title ${fade ? "fade-in" : ""}`}>Portfólio</h1>
      <br /> <hr /> <br />
      <h2 className={`header-subtitle ${fade ? "fade-in" : ""}`}>
        Portfólio front end de Rafael Nunes
      </h2>
    </div>
  );
}

export default Header;
