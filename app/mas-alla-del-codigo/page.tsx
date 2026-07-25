"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowDownRight,
  ArrowRight,
  BookOpen,
  Bot,
  Braces,
  CheckCircle2,
  Compass,
  FileText,
  GitBranch,
  Layers3,
} from "lucide-react";
import Header from "@/components/header";
import Footer from "@/components/footer";

const foundations = [
  { number: "01", title: "Contexto", copy: "Definir el problema, los límites y la información que el sistema realmente puede usar." },
  { number: "02", title: "Criterio", copy: "Explicitar qué significa una salida útil antes de delegar trabajo a un modelo." },
  { number: "03", title: "Iteración", copy: "Probar en ciclos cortos, revisar evidencia y ajustar el sistema sin esconder los límites." },
];

const library = [
  {
    tag: "FUNDAMENTOS",
    icon: Bot,
    title: "IA para desarrolladores: una base con criterio",
    copy: "LLMs, capacidades, límites y una forma responsable de integrarlos al trabajo técnico.",
    href: "/mas-alla-del-codigo/fundmentos",
    cta: "Ver fundamentos",
  },
  {
    tag: "PLAYBOOK 01",
    icon: FileText,
    title: "Comunicación efectiva con IA",
    copy: "Cómo convertir una intención ambigua en contexto, especificaciones y ciclos de revisión útiles.",
    href: "/mas-alla-del-codigo/playbook-1",
    cta: "Abrir playbook",
  },
];

const roadmap = [
  "Contexto y especificaciones",
  "Arquitectura para agentes",
  "Iteración y evaluación",
  "Automatización con supervisión",
  "Clean Architecture aplicada",
  "Construir en público",
];

const reveal = {
  hidden: { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0 },
};

export default function MasAllaDelCodigo() {
  const reduceMotion = useReducedMotion();
  const transition = reduceMotion ? { duration: 0 } : { duration: 0.55, ease: "easeOut" };

  return (
    <>
      <Header />
      <main className="site-shell library-shell overflow-hidden">
        <section className="library-hero relative isolate overflow-hidden border-b border-border">
          <div className="library-scanline" aria-hidden="true" />
          <div className="library-orb library-orb-one" aria-hidden="true" />
          <div className="library-orb library-orb-two" aria-hidden="true" />
          <div className="site-container relative grid min-h-[62svh] items-end gap-12 py-20 sm:py-24 lg:grid-cols-[1.2fr_.8fr] lg:py-28">
            <motion.div
              initial="hidden"
              animate="visible"
              transition={{ staggerChildren: reduceMotion ? 0 : 0.1, delayChildren: reduceMotion ? 0 : 0.05 }}
              className="max-w-3xl"
            >
              <motion.p variants={reveal} className="eyebrow"><span className="eyebrow-dot" /> BIBLIOTECA ABIERTA / BUILD IN PUBLIC</motion.p>
              <motion.h1 variants={reveal} className="display-title mt-6">
                Más allá<br />del <em>código.</em>
              </motion.h1>
              <motion.p variants={reveal} className="hero-copy mt-7 max-w-2xl">
                Notas y playbooks para conectar agentes de IA, arquitectura y producto
                sin delegar el criterio de ingeniería.
              </motion.p>
              <motion.div variants={reveal} className="mt-9 flex flex-col gap-3 sm:flex-row">
                <a href="#biblioteca" className="brand-button brand-button-primary">Explorar la biblioteca <ArrowDownRight aria-hidden="true" /></a>
                <Link href="/about" className="brand-button brand-button-ghost">Cómo trabajo <ArrowRight aria-hidden="true" /></Link>
              </motion.div>
            </motion.div>

            <motion.aside
              initial={{ opacity: 0, x: reduceMotion ? 0 : 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ ...transition, delay: reduceMotion ? 0 : 0.2 }}
              className="library-system-card"
              aria-label="Principio de la biblioteca"
            >
              <div className="flex items-center justify-between text-xs font-semibold tracking-[0.16em] text-[var(--brand-muted)]">
                <span>SISTEMA / 01</span><GitBranch className="h-4 w-4 text-primary" aria-hidden="true" />
              </div>
              <p className="mt-12 font-mono text-xs text-primary">INPUT → DECISIÓN → EVIDENCIA</p>
              <p className="mt-4 text-2xl font-semibold leading-tight text-[var(--brand-foreground)]">La IA acelera mejor cuando el sistema sabe qué está buscando.</p>
              <div className="mt-8 flex items-center gap-3 border-t border-border pt-5 text-sm text-[var(--brand-muted)]"><span className="status-pulse" /> En construcción pública</div>
            </motion.aside>
          </div>
        </section>

        <section className="site-container py-20 lg:py-28">
          <div className="grid gap-10 lg:grid-cols-[.75fr_1.25fr] lg:gap-20">
            <div>
              <p className="eyebrow"><span className="eyebrow-dot" /> EL PUNTO DE PARTIDA</p>
              <h2 className="section-title mt-5">No necesitas más prompts.<br />Necesitas <em>mejor contexto.</em></h2>
            </div>
            <p className="max-w-2xl self-end text-lg leading-relaxed text-[var(--brand-muted)]">
              Esta biblioteca está pensada para developers, CTOs y founders técnicos en LATAM.
              Cada pieza parte de un problema de construcción: aclarar una decisión, evaluar una salida o convertir una idea en un sistema sostenible.
            </p>
          </div>
          <div className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-border bg-border md:grid-cols-3">
            {foundations.map((item, index) => (
              <motion.article
                key={item.number}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                transition={{ ...transition, delay: reduceMotion ? 0 : index * 0.08 }}
                variants={reveal}
                className="library-principle bg-[var(--brand-bg)] p-7 sm:p-8"
              >
                <span className="font-mono text-xs text-primary">{item.number}</span>
                <h3 className="mt-12 text-2xl font-semibold tracking-tight text-[var(--brand-foreground)]">{item.title}</h3>
                <p className="mt-4 leading-relaxed text-[var(--brand-muted)]">{item.copy}</p>
              </motion.article>
            ))}
          </div>
        </section>

        <section id="biblioteca" className="relative border-y border-border bg-[var(--brand-surface)] py-20 lg:py-28">
          <div className="technical-lines" aria-hidden="true" />
          <div className="site-container relative">
            <div className="flex flex-col justify-between gap-7 md:flex-row md:items-end">
              <div>
                <p className="eyebrow"><span className="eyebrow-dot" /> CONTENIDO DISPONIBLE</p>
                <h2 className="section-title mt-5">Ideas que se vuelven<br /><em>práctica.</em></h2>
              </div>
              <BookOpen className="h-12 w-12 text-primary" aria-hidden="true" />
            </div>
            <div className="mt-14 grid gap-5 md:grid-cols-2">
              {library.map(({ tag, icon: Icon, title, copy, href, cta }, index) => (
                <motion.div key={href} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.15 }} transition={{ ...transition, delay: reduceMotion ? 0 : index * 0.1 }} variants={reveal}>
                  <Link href={href} className="library-card group">
                    <div className="flex items-start justify-between gap-4"><span className="font-mono text-xs tracking-[0.15em] text-primary">{tag}</span><Icon className="h-5 w-5 text-[var(--brand-muted)] transition-colors group-hover:text-primary" aria-hidden="true" /></div>
                    <h3 className="mt-16 text-3xl font-semibold tracking-tight text-[var(--brand-foreground)]">{title}</h3>
                    <p className="mt-5 max-w-md leading-relaxed text-[var(--brand-muted)]">{copy}</p>
                    <span className="mt-10 inline-flex items-center gap-2 text-sm font-semibold text-[var(--brand-foreground)] transition-colors group-hover:text-primary">{cta} <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" /></span>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="site-container py-20 lg:py-28">
          <div className="grid gap-8 lg:grid-cols-[.85fr_1.15fr] lg:gap-20">
            <div>
              <p className="eyebrow"><span className="eyebrow-dot" /> SIGUIENTE ITERACIÓN</p>
              <h2 className="section-title mt-5">El sistema se construye<br /><em>por capas.</em></h2>
              <p className="mt-6 max-w-lg leading-relaxed text-[var(--brand-muted)]">Los próximos playbooks se publicarán cuando haya una idea clara, una aplicación práctica y una forma honesta de evaluar lo aprendido.</p>
            </div>
            <ol className="roadmap-list">
              {roadmap.map((item, index) => <li key={item}><span className="font-mono text-xs text-primary">{String(index + 2).padStart(2, "0")}</span><span>{item}</span><CheckCircle2 className="h-4 w-4 text-[var(--brand-muted)]" aria-hidden="true" /><span className="text-xs font-medium uppercase tracking-wider text-[var(--brand-muted)]">Próximamente</span></li>)}
            </ol>
          </div>
        </section>

        <section className="site-container pb-24 lg:pb-32">
          <div className="cta-panel relative overflow-hidden rounded-[1.6rem] border border-primary/40 px-7 py-14 sm:px-12 lg:px-16 lg:py-20">
            <Compass className="absolute right-6 top-6 h-8 w-8 text-primary/70 sm:right-10 sm:top-10" aria-hidden="true" />
            <p className="eyebrow"><span className="eyebrow-dot" /> CONVERSACIÓN TÉCNICA</p>
            <h2 className="section-title mt-5 max-w-3xl">¿Hay una decisión que tu equipo necesita <em>hacer explícita?</em></h2>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-[var(--brand-muted)]">Conversemos sobre la arquitectura, el contexto o el siguiente experimento de producto.</p>
            <Link href="/contact" className="brand-button brand-button-primary mt-9">Escribir a Andrés <Braces className="h-4 w-4" /></Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
