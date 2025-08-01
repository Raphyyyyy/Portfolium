import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CircleArrowLeft, CircleArrowRight } from "lucide-react";

import "../styles/Slider.css";

import SkillCard from "./SkillCard";
import Habilidades from "../data/Habilidades";


const slides = Habilidades;

export default function Carousel() {
  const [indiceAtual, setIndiceAtual] = useState(0);

  const anterior = () => {
    setIndiceAtual((prev) => (prev - 1 + slides.length) % slides.length);
  };//slides leght é pro indice não ficar negativo

  const proximo = () => {
    setIndiceAtual((prev) => (prev + 1) % slides.length);
  };

  const getPosicaoSlide = (index: number) => {
    if (index === indiceAtual) return "centro";
    if (index === (indiceAtual - 1 + slides.length) % slides.length) return "esquerda";
    if (index === (indiceAtual + 1) % slides.length) return "direita";
    return "oculto";
  };


  return (
    <div className="carousel-container">
      <div className="carousel-wrapper">
        {slides.map((slide, index) => {
          const posicao = getPosicaoSlide(index);

          return (
            <div
              key={slide.id}
              className={`slide ${posicao}`}
              // style={{ backgroundColor: posicao === "centro" ? "red" : posicao === "esquerda" ? "blue" : posicao === "direita" ? "green" : "gray" }}
            >
            <SkillCard title={slide.title} items={slide.items} />

            </div>
          );
        })}

      </div>

      <div className="carousel-botoes">
        <button onClick={anterior}><CircleArrowLeft className="iconeCarrossel"/></button>
        <button onClick={proximo}><CircleArrowRight className="iconeCarrossel"/></button>
      </div>
    </div>
  );
}