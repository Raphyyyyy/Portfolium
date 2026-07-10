import "../styles/ProfileBox.css";
import github from "../assets/icones/github-logo.png";
import linkedin from "../assets/icones/linkedin_logo_icon_147268.png";
import curriculum from "../assets/icones/CVlogo.png";
import { motion } from "framer-motion";

function ProfileBox() {
  const texto =
    "Desenvolvedor Front-End com foco em interfaces modernas, organização de código e experiência do usuário. Unindo programação e design para criar soluções claras, funcionais e visualmente consistentes, sempre priorizando legibilidade, usabilidade e propósito.";

  return (
    <div className="container">
      <div className="background" />

      <div className="texto2 textoDigitando">
        Desenvolvedor Front-End com experiências nacionais e internacionais em React, TypeScript, WordPress, UI/UX, SEO técnico e performance web. 
        Unindo programação e design
        para criar soluções claras, funcionais e visualmente consistentes,
        sempre priorizando legibilidade, usabilidade e propósito.
      </div>

      <div className="icone">
        <a
          href="https://github.com/Raphyyyyy"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={github} alt="GitHub" className="iconeRedondo" />
        </a>

        <a
          href="https://linkedin.com/in/rafael-nunes-a078ba158"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={linkedin} alt="LinkedIn" className="iconeRedondo" />
        </a>

        <a
          href="https://github.com/Raphyyyyy/Portfolium/raw/main/CV_Rafael_Alexandre_Nunes_.pdf"
          download="Rafael_Alexandre_Nunes_CV.pdf"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={curriculum} alt="Currículo" className="iconeRedondo" />
        </a>
      </div>
    </div>
  );
}

export default ProfileBox;