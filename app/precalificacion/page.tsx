"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Header from "@/components/header";
import { EASE } from "@/components/motion";
import { track } from "@/lib/analytics";
import { Icp, Inversion, OFERTAS, PREGUNTAS, RESPUESTAS_KEY, recomendar } from "@/lib/precalificacion";

const RUTA: Record<Icp, string> = { automatizar: "/automatizar", construir: "/construir", consultoria: "/consultoria", diagnostico: "/diagnostico" };

export default function Precalificacion() {
  const [paso, setPaso] = useState(0);
  const [r, setR] = useState<Record<string, string>>({});
  const titulo = useRef<HTMLHeadingElement>(null);
  const reduce = useReducedMotion();
  const fin = paso === PREGUNTAS.length;
  const icp = (r.situacion || "diagnostico") as Icp;

  useEffect(() => track("precal_start"), []);
  useEffect(() => { if (paso > 0) titulo.current?.focus(); }, [paso]);

  const responder = (id: string, valor: string) => {
    const nuevo = { ...r, [id]: valor };
    setR(nuevo);
    track("precal_step", { paso: paso + 1 });
    if (paso === PREGUNTAS.length - 1) {
      try { sessionStorage.setItem(RESPUESTAS_KEY, JSON.stringify(nuevo)); } catch { /* el resultado funciona sin guardar */ }
      const i = nuevo.situacion as Icp;
      track("precal_complete", { icp: i, oferta: recomendar(i, nuevo.inversion as Inversion) });
    }
    setPaso(paso + 1);
  };

  const oferta = fin ? recomendar(icp, r.inversion as Inversion) : null;
  const anim = reduce ? {} : { initial: { opacity: 0, x: 24 }, animate: { opacity: 1, x: 0 }, exit: { opacity: 0, x: -24 }, transition: { duration: 0.4, ease: EASE } };

  return (
    <>
      <Header />
      <main className="site-shell min-h-[calc(100svh-4rem)]">
        <div className="site-container max-w-3xl py-14 lg:py-20">
          <div className="progreso" role="progressbar" aria-label="Progreso" aria-valuemin={0} aria-valuemax={PREGUNTAS.length} aria-valuenow={paso}>
            <span style={{ transform: `scaleX(${paso / PREGUNTAS.length})` }} />
          </div>
          <AnimatePresence mode="wait">
            {!fin ? (
              <motion.div key={PREGUNTAS[paso].id} {...anim}>
                <p className="eyebrow mt-10">PREGUNTA {paso + 1} DE {PREGUNTAS.length}</p>
                <h1 ref={titulo} tabIndex={-1} className="pregunta mt-4 outline-none">{PREGUNTAS[paso].titulo}</h1>
                {PREGUNTAS[paso].ayuda && <p className="texto-suave mt-4">{PREGUNTAS[paso].ayuda}</p>}
                <div className="mt-8 grid gap-3">
                  {PREGUNTAS[paso].opciones(icp).map((o) => (
                    <button key={o.valor} type="button" className={`opcion ${r[PREGUNTAS[paso].id] === o.valor ? "opcion-activa" : ""}`} onClick={() => responder(PREGUNTAS[paso].id, o.valor)}>
                      {o.texto}<ArrowRight className="h-5 w-5 shrink-0 opacity-50" aria-hidden="true" />
                    </button>
                  ))}
                </div>
                {paso > 0 && (
                  <button type="button" className="volver" onClick={() => setPaso(paso - 1)}><ArrowLeft className="h-4 w-4" aria-hidden="true" /> Volver</button>
                )}
              </motion.div>
            ) : (
              <motion.div key="resultado" {...anim}>
                <p className="eyebrow mt-10">TU RECOMENDACIÓN</p>
                <h1 ref={titulo} tabIndex={-1} className="pregunta mt-4 outline-none">{OFERTAS[oferta!].nombre}</h1>
                <p className="mt-3 text-xl font-semibold text-[#3E7BFA]">{OFERTAS[oferta!].precio}</p>
                <p className="texto-suave mt-4 text-lg leading-relaxed">{OFERTAS[oferta!].detalle}</p>
                <p className="texto-suave mt-4 leading-relaxed">Es un punto de partida según tus respuestas. Lo confirmamos cuando hablemos.</p>
                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <Link href={`${RUTA[icp]}?oferta=${oferta}`} className="brand-button brand-button-primary">Ver el plan completo <ArrowRight aria-hidden="true" /></Link>
                  <button type="button" className="brand-button brand-button-ghost" onClick={() => setPaso(paso - 1)}>Cambiar respuestas</button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </main>
    </>
  );
}
