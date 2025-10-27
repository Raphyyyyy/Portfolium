import React, { useEffect, useRef } from "react";

type Onda = { x: number; y: number; inicio: number };

const TEMPO_DE_VIDA = 1200;
const VELOCIDADE_ONDA = 0.45;
const LARGURA_ARCO = 5;
const ANEIS_POR_ONDA = 8;
const OPACIDADE_BASE = 0.20;

type Props = { zIndex?: number; ripplesOnScroll?: boolean };

export default function Ondas({ zIndex = 1, ripplesOnScroll = true }: Props) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const ctxRef = useRef<CanvasRenderingContext2D | null>(null);
  const ondasRef = useRef<Onda[]>([]);
  const rafRef = useRef<number | null>(null);

  const resize = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const dpr = Math.max(1, Math.min(2, window.devicePixelRatio || 1));
    const w = window.innerWidth;
    const h = window.innerHeight;
    canvas.width = Math.floor(w * dpr);
    canvas.height = Math.floor(h * dpr);
    canvas.style.width = `${w}px`;
    canvas.style.height = `${h}px`;
    const ctx = canvas.getContext("2d");
    if (ctx) {
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      ctxRef.current = ctx;
    }
  };

  useEffect(() => {
    resize();
    window.addEventListener("resize", resize);
    return () => window.removeEventListener("resize", resize);
  }, []);

  useEffect(() => {
    const step = (now: number) => {
      const ctx = ctxRef.current;
      const canvas = canvasRef.current;
      if (!ctx || !canvas) {
        rafRef.current = requestAnimationFrame(step);
        return;
      }

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      ondasRef.current = ondasRef.current.filter((onda) => {
        const dt = now - onda.inicio;
        if (dt > TEMPO_DE_VIDA) return false;

        const base = dt * VELOCIDADE_ONDA;
        const vida = 1 - dt / TEMPO_DE_VIDA;

        for (let i = 0; i < ANEIS_POR_ONDA; i++) {
          const r = base * (1 + i * 0.15);
          const alpha = OPACIDADE_BASE * vida * (1 - i / ANEIS_POR_ONDA);
          ctx.strokeStyle = `hsla(200, 100%, ${70 - i * 3}%, ${alpha})`;
          ctx.lineWidth = LARGURA_ARCO * vida;
          ctx.beginPath();
          ctx.arc(onda.x, onda.y, r, 0, Math.PI * 2);
          ctx.stroke();
        }
        return true;
      });

      rafRef.current = requestAnimationFrame(step);
    };

    rafRef.current = requestAnimationFrame(step);
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  useEffect(() => {
    const addRipple = (clientX: number, clientY: number) => {
      const canvas = canvasRef.current;
      if (!canvas) return;
      const rect = canvas.getBoundingClientRect();
      ondasRef.current.push({
        x: clientX - rect.left,
        y: clientY - rect.top,
        inicio: performance.now(),
      });
    };

    // Corrigido: o canvas agora escuta os cliques diretamente (não global)
    const onClickCanvas = (e: MouseEvent) => {
      addRipple(e.clientX, e.clientY);
    };

    const canvas = canvasRef.current;
    if (canvas) {
      canvas.addEventListener("click", onClickCanvas);
    }

    let lastScrollRipple = 0;
    const onWheel = () => {
      if (!ripplesOnScroll) return;
      const now = performance.now();
      if (now - lastScrollRipple < 120) return;
      lastScrollRipple = now;
      const canvas = canvasRef.current;
      if (!canvas) return;
      const rect = canvas.getBoundingClientRect();
      addRipple(
        rect.left + Math.random() * rect.width,
        rect.top + Math.random() * rect.height
      );
    };

    window.addEventListener("wheel", onWheel, { passive: true });

    return () => {
      if (canvas) canvas.removeEventListener("click", onClickCanvas);
      window.removeEventListener("wheel", onWheel);
    };
  }, [ripplesOnScroll]);

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        zIndex,
        pointerEvents: "auto", // agora permite clique diretamente
      }}
    >
      <canvas
        ref={canvasRef}
        style={{
          position: "absolute",
          inset: 0,
          mixBlendMode: "lighten",
          cursor: "pointer",
        }}
      />
    </div>
  );
}
