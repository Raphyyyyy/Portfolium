import { motion } from "framer-motion";
import { useState } from "react";
import "../styles/Galeria.css";

type CardItem = {
  tipo: "mobile" | "desktop";
  ordem: number;
};

type GaleriaProps = {
  imagens?: string[];
};

const cards: CardItem[] = [
  { tipo: "desktop", ordem: 1 },
  { tipo: "mobile", ordem: 2 },
  { tipo: "mobile", ordem: 3 },
  { tipo: "desktop", ordem: 4 },
  { tipo: "desktop", ordem: 5 },
  { tipo: "mobile", ordem: 6 },
  { tipo: "mobile", ordem: 7 },
  { tipo: "desktop", ordem: 8 },
];

const variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const getSrc = (src: string) => `${import.meta.env.BASE_URL}${src}`;

const isVideo = (src: string) => src.toLowerCase().endsWith(".mp4");

function Media({ src, ordem }: { src: string; ordem: number }) {
  const finalSrc = getSrc(src);

  return isVideo(src) ? (
    <video
      src={finalSrc}
      className="galeria-img"
      autoPlay
      muted
      loop
      playsInline
    />
  ) : (
    <img
      src={finalSrc}
      alt={`Imagem ${ordem}`}
      className="galeria-img"
    />
  );
}

export default function Galeria({ imagens = [] }: GaleriaProps) {
  const [iniciou, setIniciou] = useState(false);
  const primeiroIndex = imagens.findIndex((img) => img?.trim());

  return (
    <section className="galeria">
      {cards.map((item, index) => {
        const imagem = imagens[index]?.trim();

        if (!imagem) return null;

        const primeiroVisivel = index === primeiroIndex;

        return (
          <motion.div
            key={item.ordem}
            className={`card ${item.tipo}`}
            variants={variants}
            initial="hidden"
            animate={iniciou ? "visible" : "hidden"}
            whileInView={primeiroVisivel ? "visible" : undefined}
            viewport={primeiroVisivel ? { once: true, amount: 0.15 } : undefined}
            onViewportEnter={primeiroVisivel ? () => setIniciou(true) : undefined}
            transition={{
              duration: 0.3,
              delay: (item.ordem - 1) * 0.3,
              ease: "easeOut",
            }}
          >

            <Media src={imagem} ordem={item.ordem} />
          </motion.div>
        );
      })}
    </section>
  );
}