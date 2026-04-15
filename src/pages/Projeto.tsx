import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useProjects } from "../context/ProjectContext";
import { motion } from "framer-motion";
import SeoProjeto from "../SEO/SeoProjeto";

import BarraTagsExpansivel from "../components/BarraTagsExpansivel";
import BotaoVoltar from "../Hooks/BotaoVoltar";

import "../styles/Projeto.css";
import dandelionIcon from "../../public/assets/illustration-plant/8608.jpg";
import BackgroundText from "../components/BackgroundText";
import Galeria from "../components/Galeria";

function Projeto() {
  const { slug } = useParams();
  const projetos = useProjects();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    function handleScroll() {
      const scrollY = window.scrollY;
      const triggerPoint = window.innerHeight * 0.3;
      setScrolled(scrollY > triggerPoint);
    }

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const projeto = projetos.find((p) => p.slug === slug);

  if (!projeto) return <p>Projeto não encontrado</p>;

  const { title, metadata } = projeto;

  const tags =
    metadata.techs?.split(",").map((tag) => tag.trim()).filter(Boolean) || [];

  const fulltags =
    metadata.fulltechs?.split(",").map((tag) => tag.trim()).filter(Boolean) || [];

  const baseSet = new Set(tags.map((t) => t.toLowerCase()));
  const extraTags = fulltags.filter((t) => !baseSet.has(t.toLowerCase()));

  const isVideo = /\.(mp4|webm|ogg)$/i.test(metadata.videoprojeto || "");
  const isGif = /\.gif$/i.test(metadata.videoprojeto || "");

  // ✅ AQUI ESTÁ A GALERIA CORRETA (SEM DUPLICAÇÃO)
  const imagensGaleria = [
    metadata?.image1 || "",
    metadata?.image2 || "",
    metadata?.image3 || "",
    metadata?.image4 || "",
    metadata?.image5 || "",
    metadata?.image6 || "",
    metadata?.image7 || "",
    metadata?.image8 || "",
  ];

  return (
    <>
      <SeoProjeto
        slug={slug}
        title={title}
        tagsPrincipais={tags}
        tagsExtras={extraTags}
        metadata={metadata}
      />

      <div className={`botoes-links ${scrolled ? "scrolled" : ""}`}>
        <BotaoVoltar />

        <a
          href={metadata.linksite}
          target="_blank"
          rel="noopener noreferrer"
          className="linkProjeto"
        >
          IR PARA O SITE
        </a>

        {metadata.linkcode && (
          <a
            href={metadata.linkcode}
            target="_blank"
            rel="noopener noreferrer"
            className="linkProjeto"
          >
            VER O CÓDIGO
          </a>
        )}
      </div>

      <div
        className="projetoPai"
        style={
          {
            "--cor1": metadata.cor1 || "rgba(0, 195, 255, 0.4)",
            "--cor2": metadata.cor2 || "rgba(109, 83, 255, 0.52)",
            "--cor3": metadata.cor3 || "rgba(0, 17, 253, 0.52)",
          } as React.CSSProperties
        }
      >
        <BackgroundText texto={title.replace(/\s+/g, "").toUpperCase()} />

        <motion.div
          className="iconeProjeto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <img src={dandelionIcon} alt="Ícone" className="dandelionIcon" />
        </motion.div>

        <div className="projetoHead">
          <div className="sobrepor" />
          <img
            src={`${import.meta.env.BASE_URL}${metadata.iconimage}`}
            alt={title}
            className="imgProjetoHead"
          />
          <h1 className="projetoTitulo">{title.toUpperCase()}</h1>
        </div>

        {tags.length > 0 && (
          <div className="tags">
            {tags.map((tag) => (
              <motion.span
                key={tag}
                className="tag"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 2.2, ease: "easeOut" }}
              >
                {tag}
              </motion.span>
            ))}
          </div>
        )}

        {metadata.videoprojeto && (
          <div className="projVideo">
            {isVideo ? (
              <motion.video
                src={`${import.meta.env.BASE_URL}${metadata.videoprojeto}`}
                autoPlay
                loop
                muted
                playsInline
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 2.2 }}
              />
            ) : isGif ? (
              <motion.img
                src={`${import.meta.env.BASE_URL}${metadata.videoprojeto}`}
                alt={title}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 2.2 }}
              />
            ) : null}
          </div>
        )}

        <BarraTagsExpansivel
          tags={extraTags}
          corDoMais={metadata.cor1 || "rgba(0, 195, 255, 0.4)"}
          alturaMaximaArrasto={240}
          limiteParaAbrir={100}
        />

        <motion.div
          className="projetoGrupo"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 1.2 }}
        >
          <div className="ProjTxt">
            <h2>{metadata.titulo1}</h2>
            <p dangerouslySetInnerHTML={{ __html: metadata.texto1 }} />
          </div>
        </motion.div>

        {/* ✅ GALERIA FINAL */}
        <Galeria imagens={imagensGaleria} />
        {console.log("Renderizando galeria: " + imagensGaleria)}
      </div>
    </>
  );
}

export default Projeto;