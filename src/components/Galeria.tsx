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

export default function Galeria({ imagens = [] }: GaleriaProps) {
  const [iniciou, setIniciou] = useState(false);

  return (
    <section className="galeria">
      {cards.map((item, index) => {
        const imagem = imagens[index];

        if (!imagem || !imagem.trim()) {
          return null;
        }

        const primeiroVisivel = index === imagens.findIndex((img) => img?.trim());

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
            <>
              <span
                className={`icone ${
                  item.tipo === "mobile" ? "icone-mobile" : "icone-desktop"
                }`}
              >
                <i
                  className={`bi ${
                    item.tipo === "mobile" ? "bi-phone-fill" : "bi-display"
                  }`}
                ></i>
              </span>

              <img
                src={`${import.meta.env.BASE_URL}${imagem}`}
                alt={`Imagem ${item.ordem}`}
                className="galeria-img"
              />
            </>
          </motion.div>
        );
      })}
    </section>
  );
}