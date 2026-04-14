import { motion } from "framer-motion";
import { useState } from "react";
import "../styles/Galeria.css";

type CardItem = {
  tipo: "mobile" | "desktop";
  ordem: number;
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

export default function Galeria() {
  const [iniciou, setIniciou] = useState(false);

  return (
    <section className="galeria">
      {cards.map((item) => {
        const primeiro = item.ordem === 1;

        return (
          <motion.div
            key={item.ordem}
            className={`card ${item.tipo}`}
            variants={variants}
            initial="hidden"
            animate={iniciou ? "visible" : "hidden"}
            whileInView={primeiro ? "visible" : undefined}
            viewport={primeiro ? { once: true, amount: 0.15 } : undefined}
            onViewportEnter={primeiro ? () => setIniciou(true) : undefined}
            transition={{
              duration: 0.3,
              delay: (item.ordem - 1) * 0.3,
              ease: "easeOut",
            }}
          >
            <span
              className={`icone ${
                item.tipo === "mobile"
                  ? "icone-mobile"
                  : "icone-desktop"
              }`}
            >
              <i
                className={`bi ${
                  item.tipo === "mobile"
                    ? "bi-phone-fill"
                    : "bi-display"
                }`}
              ></i>
            </span>
          </motion.div>
        );
      })}
    </section>
  );
}