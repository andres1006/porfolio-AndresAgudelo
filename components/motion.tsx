"use client";

import { ReactNode, useRef } from "react";
import { motion, MotionValue, useReducedMotion, useScroll, useTransform } from "framer-motion";

export const EASE = [0.22, 1, 0.36, 1] as const;

export function Reveal({ children, delay = 0, className }: { children: ReactNode; delay?: number; className?: string }) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      className={className}
      initial={reduce ? false : { opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.9, ease: EASE, delay }}
    >
      {children}
    </motion.div>
  );
}

function Palabra({ texto, progreso, inicio, fin }: { texto: string; progreso: MotionValue<number>; inicio: number; fin: number }) {
  const opacity = useTransform(progreso, [inicio, fin], [0.18, 1]);
  return <motion.span style={{ opacity }}>{texto} </motion.span>;
}

// La frase se va encendiendo con el scroll; con movimiento reducido se muestra completa.
export function FraseScroll({ texto, className }: { texto: string; className?: string }) {
  const ref = useRef<HTMLParagraphElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 0.85", "end 0.5"] });
  const palabras = texto.split(" ");
  if (reduce) return <p className={className}>{texto}</p>;
  return (
    <p ref={ref} className={className} aria-label={texto}>
      <span aria-hidden="true">
        {palabras.map((p, i) => (
          <Palabra key={`${p}-${i}`} texto={p} progreso={scrollYProgress} inicio={i / palabras.length} fin={(i + 1) / palabras.length} />
        ))}
      </span>
    </p>
  );
}

export function FotoScroll({ children }: { children: ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "center center"] });
  const scale = useTransform(scrollYProgress, [0, 1], reduce ? [1, 1] : [0.9, 1]);
  return (
    <motion.div ref={ref} style={{ scale }} className="foto-principal">
      {children}
    </motion.div>
  );
}
