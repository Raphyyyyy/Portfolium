// src/components/BarraTagsExpansivel.tsx

import { useEffect, useMemo, useRef, useState } from "react";
import "../styles/BarraTagsExpansivel.css";
import { AnimatePresence, motion } from "framer-motion";

type BarraTagsExpansivelProps = {
  tags: string[]; // As tags que vão aparecer quando abrir
  alturaMaximaArrasto?: number; // Quão longe o usuário pode "puxar" pra baixo (em px)
  limiteParaAbrir?: number; // Quanto precisa puxar pra confirmar abertura (em px)
  iniciarAberto?: boolean; // Se começa aberto ou fechado
  alturaVisivelFechado?: number; // “Pontinha” das tags aparecendo quando fechado (em px)
  corDoMais?: string; // Cor do + (você vai passar metadata.cor1 ou "var(--cor1)")
};

export default function BarraTagsExpansivel({
  tags,
  alturaMaximaArrasto = 240,
  limiteParaAbrir = 100,
  iniciarAberto = false,
  alturaVisivelFechado = 35,
  corDoMais = "var(--cor1)",
}: BarraTagsExpansivelProps) {
  /**
   * Ideia geral :
   * - Existe um "painel" onde as tags ficam (em cima)
   * - Existe uma "barra branca" com um + (embaixo)
   *
   * Quando FECHADO:
   * - O painel fica bem baixinho (alturaVisivelFechado)
   * - Isso mostra só a pontinha das tags pra induzir a pessoa a puxar
   *
   * Quando ABERTO:
   * - O painel cresce e mostra todas as tags
   *
   * Importante:
   * - A barra fica SEMPRE embaixo das tags (nunca passa por cima).
   * - O gesto de arrastar NÃO move a barra visualmente.
   *   A barra fica parada, e a gente usa o "arrasto" só como input.
   */

  // Estado: guarda se o painel está aberto (true) ou fechado (false)
  const [estaAberto, setEstaAberto] = useState(iniciarAberto);

  // Estado: altura “temporária” do painel enquanto o usuário está arrastando
  const [alturaArraste, setAlturaArraste] = useState(alturaVisivelFechado);

  // Estado: se estamos arrastando agora (só pra mudar efeitos visuais)
  const [estaArrastando, setEstaArrastando] = useState(false);

  // Ref: guarda a posição Y inicial do dedo/mouse quando o arrasto começa
  const inicioYRef = useRef<number | null>(null);

  // Ref: evita que o componente “perca” o controle se o usuário soltar fora do elemento
  const arrastandoRef = useRef(false);

  /**
   * ✅ Limpeza das tags (sem quebrar a caixa original)
   *
   * - A gente remove espaços extras e tags vazias
   * - A gente remove repetidas
   *
   * Você perguntou do toLowerCase:
   * - Sim, ele transforma em minúsculo
   * - MAS aqui ele serve só pra comparar e remover repetidas
   * - O texto exibido continua exatamente como veio (com maiúsculas onde tiver)
   */
  const tagsLimpas = useMemo(() => {
    const semVazios = tags.map((t) => t.trim()).filter(Boolean);

    // "conjunto" guarda as chaves em minúsculo só pra comparar
    const conjunto = new Set(semVazios.map((t) => t.toLowerCase()));

    // Mantém a ordem original, sem repetir
    const resultado: string[] = [];
    semVazios.forEach((t) => {
      const chave = t.toLowerCase();
      if (conjunto.has(chave)) {
        conjunto.delete(chave);
        resultado.push(t); // 👈 repara: empurra o ORIGINAL, não o lowercase
      }
    });

    return resultado;
  }, [tags]);

  // Se não tem tags, nem renderiza o componente (não aparece nada na tela)
  if (tagsLimpas.length === 0) return null;

  /**
   * Quando abre/fecha por clique:
   * - Se abriu, a gente deixa o painel em "auto" (altura natural)
   * - Se fechou, volta pra alturaVisivelFechado (pontinha)
   *
   * Aqui a gente só garante que ao trocar "estaAberto" sem arrastar,
   * o painel não fica preso numa altura antiga.
   */
  useEffect(() => {
    if (estaAberto) {
      // Quando abre, limpamos o arraste e deixamos o CSS/DOM calcular altura
      setAlturaArraste(0);
    } else {
      // Quando fecha, volta pra "pontinha"
      setAlturaArraste(alturaVisivelFechado);
    }
  }, [estaAberto, alturaVisivelFechado]);

  /**
   * Altura final do painel:
   * - Se estiver arrastando: a altura é o que o usuário está puxando no momento
   * - Se estiver aberto: "auto" pra mostrar tudo
   * - Se estiver fechado: alturaVisivelFechado (pra mostrar a pontinha)
   */
  const alturaDoPainel = estaArrastando
    ? `${alturaArraste}px`
    : estaAberto
    ? "auto"
    : `${alturaVisivelFechado}px`;

  /**
   * ✅ Função que alterna abrir/fechar ao clicar no +
   */
  function alternarAbertoFechado() {
    setEstaAberto((valorAnterior) => !valorAnterior);
  }

  /**
   * ✅ Começo do arrasto (touch/mouse)
   *
   * A gente não usa "drag" do Framer Motion aqui porque:
   * - Você pediu que a barra NÃO passe por cima das tags
   * - O drag do Framer move o elemento visualmente
   *
   * Então a gente faz o "drag" manual: capturamos o movimento do dedo/mouse
   * e usamos isso só pra mudar a altura do painel.
   */
  function iniciarArrasto(clientY: number) {
    inicioYRef.current = clientY;
    arrastandoRef.current = true;
    setEstaArrastando(true);

    // Começa do mínimo (pontinha)
    setAlturaArraste(alturaVisivelFechado);
  }

  /**
   * ✅ Enquanto arrasta
   *
   * A ideia é:
   * - quanto mais você puxa pra baixo, maior fica o painel
   * - limitamos pra não crescer infinito (alturaMaximaArrasto)
   */
  function moverArrasto(clientY: number) {
    if (!arrastandoRef.current || inicioYRef.current === null) return;

    // delta = o quanto puxou pra baixo (positivo)
    const delta = clientY - inicioYRef.current;

    // Se puxou pra cima (delta negativo), a gente trata como 0
    const puxou = Math.max(0, delta);

    // altura desejada = "pontinha" + puxou
    const alturaDesejada = alturaVisivelFechado + puxou;

    // trava no máximo
    const alturaFinal = Math.min(
      alturaDesejada,
      alturaVisivelFechado + alturaMaximaArrasto
    );

    setAlturaArraste(alturaFinal);
  }

  /**
   * ✅ Fim do arrasto
   *
   * Regra:
   * - Se puxou pelo menos "limiteParaAbrir": abre
   * - Se puxou menos: fecha
   */
  function finalizarArrasto() {
    if (!arrastandoRef.current || inicioYRef.current === null) return;

    // Quanto o usuário puxou de fato (altura atual - pontinha)
    const puxouDeFato = alturaArraste - alturaVisivelFechado;

    if (puxouDeFato >= limiteParaAbrir) setEstaAberto(true);
    else setEstaAberto(false);

    // Reset
    arrastandoRef.current = false;
    inicioYRef.current = null;
    setEstaArrastando(false);
  }

  /**
   * ✅ Listeners globais
   *
   * Por quê?
   * - Se o usuário começar a puxar e soltar o dedo fora da barra,
   *   a gente ainda precisa finalizar o arrasto corretamente.
   */
  useEffect(() => {
    function noMouseMove(e: MouseEvent) {
      moverArrasto(e.clientY);
    }
    function noMouseUp() {
      finalizarArrasto();
    }

    function noTouchMove(e: TouchEvent) {
      if (e.touches.length > 0) moverArrasto(e.touches[0].clientY);
    }
    function noTouchEnd() {
      finalizarArrasto();
    }

    if (estaArrastando) {
      window.addEventListener("mousemove", noMouseMove);
      window.addEventListener("mouseup", noMouseUp);

      window.addEventListener("touchmove", noTouchMove, { passive: true });
      window.addEventListener("touchend", noTouchEnd);
      window.addEventListener("touchcancel", noTouchEnd);
    }

    return () => {
      window.removeEventListener("mousemove", noMouseMove);
      window.removeEventListener("mouseup", noMouseUp);

      window.removeEventListener("touchmove", noTouchMove);
      window.removeEventListener("touchend", noTouchEnd);
      window.removeEventListener("touchcancel", noTouchEnd);
    };
    // ⚠️ Dependências:
    // - alturaArraste entra porque usamos ela no finalizarArrasto (puxouDeFato)
  }, [estaArrastando, alturaArraste, alturaVisivelFechado, limiteParaAbrir]);

  return (
    <div
      className="barraTagsExpansivel"
      // Passamos a cor via CSS variable local
      style={{ ["--corDoMais" as any]: corDoMais }}
    >
      {/* 
        PAINEL DE TAGS (fica em cima)
        - Ele "empurra" o layout porque é um elemento normal no fluxo da página
        - Quando fechado, ele mostra só a pontinha (alturaVisivelFechado)
      */}
      <motion.div
        className={`painelTags ${estaAberto ? "aberto" : "fechado"} ${
          estaArrastando ? "arrastando" : ""
        }`}
        initial={false}
        animate={{
          height: alturaDoPainel,
        }}
        transition={{
          duration: 2.35,
          ease: "easeOut",
        }}
        style={{
          height: alturaDoPainel,
          opacity: estaAberto || estaArrastando ? 1 : 1, // sempre visível (mesmo fechado) pra mostrar a pontinha
        }}
      >
        <motion.div 
        className="conteudoTags"
        >
          {tagsLimpas.map((tag) => (
            <span key={tag} className="tagRosa">
              {tag}
            </span>
          ))}
        </motion.div>
      </motion.div>

      {/*
        BARRA BRANCA (fica embaixo do painel SEMPRE)
        - 100% largura
        - 2rem altura
        - círculo no centro com "+"
        - abre ao clicar
        - abre ao puxar pra baixo (arrasto manual)
      */}
      <div
        className={`barraBranca ${estaArrastando ? "arrastando" : ""}`}
        onClick={alternarAbertoFechado}
        onMouseDown={(e) => iniciarArrasto(e.clientY)}
        onTouchStart={(e) => {
          if (e.touches.length > 0) iniciarArrasto(e.touches[0].clientY);
        }}
      >
        <div className={`circuloMais ${estaAberto ? "rotacionado" : ""}`}>
          <span className="sinalMais">+</span>
        </div>
      </div>
    </div>
  );
}