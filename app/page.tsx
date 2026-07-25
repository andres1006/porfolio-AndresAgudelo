"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowDownRight,
  ArrowRight,
  ArrowUpRight,
  Bot,
  Braces,
  CheckCircle2,
  Compass,
  Layers3,
  Mail,
  Sparkles,
} from "lucide-react";
import Header from "@/components/header";
import Footer from "@/components/footer";

const capabilities = [
  {
    number: "01",
    icon: Bot,
    title: "Agentes con criterio",
    description:
      "Diseño flujos de IA con contexto, controles de calidad y revisión humana donde importa.",
  },
  {
    number: "02",
    icon: Layers3,
    title: "Sistemas de producto",
    description:
      "Conecto prioridades, arquitectura y entrega para que el producto pueda evolucionar sin perder claridad.",
  },
  {
    number: "03",
    icon: Braces,
    title: "Interfaces que aterrizan",
    description:
      "Convierto decisiones técnicas en experiencias rápidas y útiles con Next.js, React y TypeScript.",
  },
];

const principles = [
  "Contexto antes de automatizar.",
  "Especificar antes de construir.",
  "Evidencia antes que promesas.",
];

const projects = [
  {
    label: "SISTEMA OPERATIVO",
    title: "Controlsoft",
    description:
      "Una plataforma de gestión para centralizar proyectos, tareas, documentos, clientes y recursos del equipo.",
    href: "/projects/controlsoft",
    code: "01",
  },
  {
    label: "PRODUCTO DIGITAL",
    title: "Miti Miti",
    description:
      "Una experiencia web enfocada en encontrar el mensaje, la estructura y la velocidad adecuados para convertir.",
    href: "/projects/landingmiti",
    code: "02",
  },
];

const enter = {
  hidden: { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0 },
};

export default function Home() {
  const reduceMotion = useReducedMotion();
  const revealTransition = (delay = 0) => ({
    duration: reduceMotion ? 0 : 0.5,
    ease: "easeOut",
    delay: reduceMotion ? 0 : delay,
  });

  return (
    <>
      <Header />
      <main className="site-shell overflow-hidden">
        <section className="hero-grid relative isolate min-h-[calc(100svh-4rem)] overflow-hidden">
          <div className="hero-orb hero-orb-one" aria-hidden="true" />
          <div className="hero-orb hero-orb-two" aria-hidden="true" />
          <div className="site-container relative grid min-h-[calc(100svh-4rem)] items-center gap-12 py-16 lg:grid-cols-[1.05fr_.95fr] lg:py-20">
            <motion.div
              initial="hidden"
              animate="visible"
              transition={{ staggerChildren: 0.12, delayChildren: 0.08 }}
              className="relative z-10 max-w-3xl"
            >
              <motion.p variants={enter} className="eyebrow">
                <span className="eyebrow-dot" /> AI BUILDER · COLOMBIA / LATAM
              </motion.p>
              <motion.h1 variants={enter} className="display-title mt-6">
                Construyo sistemas que <em>piensan</em> antes de escalar.
              </motion.h1>
              <motion.p variants={enter} className="hero-copy mt-7 max-w-xl">
                Soy Andrés Agudelo. Ayudo a equipos y founders técnicos a convertir
                problemas complejos en productos de IA claros, mantenibles y útiles.
              </motion.p>
              <motion.div variants={enter} className="mt-9 flex flex-col gap-3 sm:flex-row">
                <Link href="/contact" className="brand-button brand-button-primary">
                  Hablemos de tu sistema <ArrowRight aria-hidden="true" />
                </Link>
                <Link href="/mas-alla-del-codigo" className="brand-button brand-button-ghost">
                  Ver playbooks <ArrowDownRight aria-hidden="true" />
                </Link>
              </motion.div>
              <motion.div variants={enter} className="mt-12 flex flex-wrap gap-x-7 gap-y-3 text-xs font-medium uppercase tracking-[0.16em] text-[#B8C2D6]">
                <span>Agentes IA</span><span className="text-[#3E7BFA]">/</span>
                <span>SDD</span><span className="text-[#3E7BFA]">/</span>
                <span>Clean Architecture</span>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.96, x: 20 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              transition={{ duration: 0.7, ease: "easeOut", delay: 0.18 }}
              className="hero-portrait-wrap relative mx-auto w-full max-w-[470px] lg:mx-0 lg:ml-auto"
            >
              <div className="hero-portrait-backdrop" aria-hidden="true" />
              <div className="hero-portrait relative aspect-[4/5] overflow-hidden rounded-[1.6rem]">
                <Image
                  src="/images/andres-profile.jpg"
                  alt="Andrés Agudelo, AI Builder"
                  fill
                  priority
                  sizes="(max-width: 1024px) 88vw, 470px"
                  className="object-cover object-[50%_30%] brightness-125 contrast-105"
                />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(11,17,29,0.01)_25%,rgba(11,17,29,0.04)_48%,rgba(11,17,29,0.72)_100%)]" />
                <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8">
                  <p className="text-xs font-semibold tracking-[0.17em] text-[#B8C2D6]">TRABAJO EN PÚBLICO</p>
                  <p className="mt-2 max-w-xs text-lg leading-snug text-white">Del criterio técnico a productos que el equipo puede sostener.</p>
                </div>
              </div>
              <div className="hero-status-card">
                <span className="status-pulse" />
                <span>Construyendo en público</span>
              </div>
              <div className="hero-index" aria-hidden="true">AA / 26</div>
            </motion.div>
          </div>
        </section>

        <section className="border-y border-white/10 bg-[#111A2E]/55 py-6">
          <div className="site-container flex flex-wrap items-center justify-between gap-4 text-[0.68rem] font-semibold tracking-[0.19em] text-[#B8C2D6] sm:text-xs">
            <span>PRODUCTO</span><span className="hidden sm:inline text-[#3E7BFA]">✦</span>
            <span>ARQUITECTURA</span><span className="hidden sm:inline text-[#3E7BFA]">✦</span>
            <span>IA APLICADA</span><span className="hidden sm:inline text-[#3E7BFA]">✦</span>
            <span>FRONTEND</span>
          </div>
        </section>

        <section className="site-container py-24 lg:py-32">
          <div className="grid gap-10 lg:grid-cols-[.75fr_1.25fr] lg:gap-20">
            <div>
              <p className="eyebrow"><span className="eyebrow-dot" /> EN QUÉ APORTO</p>
              <h2 className="section-title mt-5">No es solo código.<br />Es <em>sistema.</em></h2>
            </div>
            <p className="max-w-2xl self-end text-lg leading-relaxed text-[#B8C2D6]">
              La IA aporta cuando se integra a un sistema con objetivos, información
              confiable y una forma clara de verificar el resultado. Ahí es donde
              enfoco el trabajo.
            </p>
          </div>

          <div className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 md:grid-cols-3">
            {capabilities.map(({ number, icon: Icon, title, description }, index) => (
              <motion.article key={number} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} transition={revealTransition(index * 0.08)} variants={enter} className="capability-card group bg-[#0B111D] p-7 sm:p-8">
                <div className="flex items-start justify-between">
                  <span className="font-mono text-xs text-[#3E7BFA]">{number}</span>
                  <Icon className="h-5 w-5 text-[#B8C2D6] transition-colors group-hover:text-[#3E7BFA]" />
                </div>
                <h3 className="mt-14 text-2xl font-semibold tracking-tight text-white">{title}</h3>
                <p className="mt-4 leading-relaxed text-[#B8C2D6]">{description}</p>
              </motion.article>
            ))}
          </div>
        </section>

        <section className="relative border-y border-white/10 bg-[#111A2E]/45 py-24 lg:py-32">
          <div className="technical-lines" aria-hidden="true" />
          <div className="site-container relative">
            <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
              <div>
                <p className="eyebrow"><span className="eyebrow-dot" /> PRINCIPIOS DE TRABAJO</p>
                <h2 className="section-title mt-5">Menos ruido.<br />Más <em>criterio.</em></h2>
              </div>
              <Compass className="h-12 w-12 text-[#3E7BFA]" aria-hidden="true" />
            </div>
            <div className="mt-14 grid gap-4 md:grid-cols-3">
              {principles.map((principle, index) => (
                <motion.div key={principle} initial={{ opacity: 0, x: reduceMotion ? 0 : -14 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, amount: 0.25 }} transition={revealTransition(index * 0.08)} className="principle-row">
                  <span className="font-mono text-sm text-[#3E7BFA]">0{index + 1}</span>
                  <p>{principle}</p>
                  <CheckCircle2 className="h-4 w-4 text-[#3E7BFA]" aria-hidden="true" />
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="site-container py-24 lg:py-32">
          <div className="flex flex-col justify-between gap-7 md:flex-row md:items-end">
            <div>
              <p className="eyebrow"><span className="eyebrow-dot" /> TRABAJO SELECCIONADO</p>
              <h2 className="section-title mt-5">Productos con<br /><em>problemas reales.</em></h2>
            </div>
            <Link href="/projects" className="inline-flex items-center gap-2 self-start text-sm font-semibold text-white transition-colors hover:text-[#3E7BFA] md:self-auto">
              Ver todos los proyectos <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="mt-14 grid gap-5 md:grid-cols-2">
            {projects.map((project, index) => (
              <motion.div key={project.title} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} transition={revealTransition(index * 0.1)} variants={enter}>
              <Link href={project.href} className="project-panel group">
                <span className="font-mono text-xs tracking-widest text-[#3E7BFA]">CASE / {project.code}</span>
                <div className="mt-20 flex items-end justify-between gap-5">
                  <div>
                    <p className="text-xs font-semibold tracking-[0.15em] text-[#B8C2D6]">{project.label}</p>
                    <h3 className="mt-3 text-3xl font-semibold tracking-tight text-white">{project.title}</h3>
                  </div>
                  <ArrowUpRight className="h-6 w-6 shrink-0 text-[#B8C2D6] transition-all group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-[#3E7BFA]" />
                </div>
                <p className="mt-5 max-w-md leading-relaxed text-[#B8C2D6]">{project.description}</p>
              </Link>
              </motion.div>
            ))}
          </div>
        </section>

        <section className="site-container pb-24 lg:pb-32">
          <div className="cta-panel relative overflow-hidden rounded-[1.6rem] border border-[#3E7BFA]/40 px-7 py-14 sm:px-12 lg:px-16 lg:py-20">
            <Sparkles className="absolute right-6 top-6 h-8 w-8 text-[#3E7BFA]/60 sm:right-10 sm:top-10" aria-hidden="true" />
            <p className="eyebrow"><span className="eyebrow-dot" /> PRÓXIMO PASO</p>
            <h2 className="section-title mt-5 max-w-3xl">¿Tu sistema ya necesita <em>mejor criterio?</em></h2>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-[#B8C2D6]">
              Si estás construyendo un producto, automatizando procesos o ordenando
              una base técnica, conversemos sobre el siguiente paso.
            </p>
            <Link href="/contact" className="brand-button brand-button-primary mt-9">
              Escribir a Andrés <Mail className="h-4 w-4" />
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
