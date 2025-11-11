import Tradutor from "../Hooks/Tradutor";
import { useEffect, useState } from "react"; // 🟦 ADIÇÃO
import { useParams } from "react-router-dom";
import { useProjects } from "../context/ProjectContext";
import { motion } from "framer-motion";
import BotaoVoltar from "../Hooks/BotaoVoltar";
import "../styles/Projeto.css";
import dandelionIcon from "../../public/assets/illustration-plant/8608.jpg";
import BackgroundText from "../components/BackgroundText";
import macBook from "../../public/assets/pc.png";

function Projeto() {
  const { slug } = useParams();
  const projetos = useProjects();

  const projeto = projetos.find((p) => p.slug === slug);

  if (!projeto) return <p>Projeto não encontrado</p>;

  const { title, metadata } = projeto;
  const tags = metadata.fulltechs?.split(",").map((tag) => tag.trim()) || [];

  // Estado que controla se o menu ganhou fundo ao rolar
  const [scrolled, setScrolled] = useState(false);

  // Verifica o scroll e aplica a classe "scrolled" quando passa 30% do viewport
  useEffect(() => {
    function handleScroll() {
      const scrollY = window.scrollY;
      const triggerPoint = window.innerHeight * 0.3; // 30% do viewport
      setScrolled(scrollY > triggerPoint);
    }

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* menu */}

      <div className={`botoes-links ${scrolled ? "scrolled" : ""}`}>
        <BotaoVoltar />
        <a href={metadata.linksite} target="_blank" rel="noopener noreferrer" className="linkProjeto">
          IR PARA O SITE
        </a>
        {metadata.linkcode && (
          <a href={metadata.linkcode} target="_blank" rel="noopener noreferrer" className="linkProjeto">
            VER O CÓDIGO
          </a>
        )}
      </div>

      <div
        className="projetoPai"
        style={{
          "--cor1": metadata.cor1 || "rgba(0, 195, 255, 0.4)",
          "--cor2": metadata.cor2 || "rgba(109, 83, 255, 0.52)",
          "--cor3": metadata.cor3 || "rgba(0, 17, 253, 0.52)",
        }}
      >

        <BackgroundText texto={title.replace(/\s+/g, "").toUpperCase()} />

        {/* ícone central */}
        <motion.div
          className="iconeProjeto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <img src={dandelionIcon} alt="Ícone Dandelion" className="dandelionIcon" />
        </motion.div>

        <div className="projetoHead">
          <div className="sobrepor" />
          <img src={`${import.meta.env.BASE_URL}${metadata.iconimage}`} alt={title} className="imgProjetoHead" />

          <h1 className="projetoTitulo">
            {title.toUpperCase()}
          </h1>
        </div>

        <div className="tags">
          {tags.map((tag) => (
            <motion.span
              key={tag}
              className="tag"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{
                duration: 2.2,
                ease: "easeOut",
              }}
            >
              {tag}
            </motion.span>
          ))}
        </div>

        {/* BLOCO 1 */}
        <motion.div
          className="projetoGrupo"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        >
          <div className="ProjTxt">
            <div className="projTitulo">
              <h2>{metadata.titulo1}</h2>
            </div>
            <p dangerouslySetInnerHTML={{ __html: metadata.texto1 }} />
          </div>
          <div className="ProjImg ProjImgComPC">
            <img
              src={`${import.meta.env.BASE_URL}${metadata.image1}`}
              alt={title}
              className="imagemGrupo imagemTela"
            />
            <img src={macBook} className="imagemPC" />
          </div>
        </motion.div>

        {/* BLOCO 2 */}
        <motion.div
          className="projetoGrupo"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        >
          <div className="ProjImg">
            <img
              src={`${import.meta.env.BASE_URL}${metadata.image2}`}
              alt={title}
              className="imagemGrupo"
            />
          </div>
          <div className="ProjTxt">
            <div className="projTitulo">
              <h2>{metadata.titulo2}</h2>
            </div>
            <p dangerouslySetInnerHTML={{ __html: metadata.texto2 }} />
          </div>
        </motion.div>

        {/* BLOCO 3 */}
        <motion.div
          className="projetoGrupo"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        >
          <div className="ProjTxt">
            <div className="projTitulo">
              <h2>{metadata.titulo3}</h2>
            </div>
            <p dangerouslySetInnerHTML={{ __html: metadata.texto3 }} />
          </div>
          <div className="ProjImg">
            <img
              src={`${import.meta.env.BASE_URL}${metadata.image3}`}
              alt={title}
              className="imagemGrupo"
            />
          </div>
        </motion.div>

        {/* BLOCO 4 */}
        <motion.div
          className="projetoGrupo"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        >
          <div className="ProjImg">
            <img
              src={`${import.meta.env.BASE_URL}${metadata.image4}`}
              alt={title}
              className="imagemGrupo"
            />
          </div>
          <div className="ProjTxt">
            <div className="projTitulo">
              <h2>{metadata.titulo4}</h2>
            </div>
            <p dangerouslySetInnerHTML={{ __html: metadata.texto4 }} />
          </div>
        </motion.div>

      </div>
    </>
  );
}

export default Projeto;
