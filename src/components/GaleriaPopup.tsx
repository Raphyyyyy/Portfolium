// src/components/GaleriaPopup.tsx
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import "../styles/GaleriaPopup.css";

type GaleriaPopupProps = {
  aberto: boolean;
  imagem: string | null;
  aoFechar: () => void;
};

export default function GaleriaPopup({ aberto, imagem, aoFechar }: GaleriaPopupProps) {
  const [zoom, setZoom] = useState(1);

  useEffect(() => {
    if (aberto) setZoom(1);
  }, [aberto]);

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") aoFechar();
    }
    if (aberto) window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [aberto, aoFechar]);

  function alternarZoom() {
    setZoom((z) => (z === 1 ? 1.8 : 1));
  }

  return (
    <AnimatePresence>
      {aberto && imagem && (
        <motion.div
          className="galeriaPopupOverlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onMouseDown={(e) => {
            // clicou fora do card
            if (e.target === e.currentTarget) aoFechar();
          }}
        >
          <motion.div
            className="galeriaPopupCard"
            initial={{ opacity: 0, y: 20, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.98 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
          >
            <div className="galeriaPopupTopo">
              <button className="galeriaPopupBtn" onClick={alternarZoom} type="button">
                {zoom === 1 ? "Zoom +" : "Zoom -"}
              </button>
              <button className="galeriaPopupBtn" onClick={aoFechar} type="button">
                Fechar
              </button>
            </div>

            <div className="galeriaPopupConteudo">
              <motion.img
                src={imagem}
                alt="Imagem ampliada"
                animate={{ scale: zoom }}
                transition={{ duration: 0.25, ease: "easeOut" }}
                className="galeriaPopupImagem"
                draggable={false}
              />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}