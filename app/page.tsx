"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { FotoScroll, FraseScroll, Reveal } from "@/components/motion";

const ofertas = [
  { titulo: "Automatizar", texto: "Para negocios que pierden horas en tareas que se repiten.", desde: "Desde USD 160", href: "/automatizar" },
  { titulo: "Construir", texto: "Para quien tiene un producto o una herramienta por crear.", desde: "Desde USD 160", href: "/construir" },
  { titulo: "Consultoría técnica", texto: "Para equipos que ya construyen con IA y quieren que sea confiable.", desde: "Desde USD 740", href: "/consultoria" },
];

const agentes = ["Estrategia", "Guion", "Diseño", "Edición", "Métricas"];

export default function Home() {
  return (
    <>
      <Header />
      <main className="site-shell overflow-hidden">
        <section className="site-container pt-20 text-center lg:pt-28">
          <p className="eyebrow entra justify-center">IA APLICADA AL NEGOCIO · LATAM</p>
          <h1 className="display-title entra entra-2 mx-auto mt-6 max-w-5xl">
            Menos trabajo repetitivo con <em>IA y agentes.</em>
          </h1>
          <p className="hero-copy entra entra-3 mx-auto mt-7 max-w-2xl">
            Soy Andrés Agudelo. Te enseño a quitarle trabajo repetitivo a tu negocio, con sistemas que yo mismo construyo.
          </p>
          <div className="entra entra-4 mt-9 flex flex-col justify-center gap-3 sm:flex-row">
            <Link href="/precalificacion" className="brand-button brand-button-primary">Ver qué necesito <ArrowRight aria-hidden="true" /></Link>
            <Link href="/diagnostico" className="brand-button brand-button-ghost">Conocer el Diagnóstico</Link>
          </div>
        </section>

        <section className="site-container pb-24 pt-16">
          <FotoScroll>
            <Image src="/images/andres-profile.jpg" alt="Andrés Agudelo" fill priority sizes="(max-width: 1024px) 92vw, 960px" className="object-cover object-[50%_35%]" />
          </FotoScroll>
        </section>

        <section className="site-container py-16 lg:py-28">
          <FraseScroll className="frase" texto="No necesitas saber programar. Primero encontramos qué vale la pena automatizar en tu negocio y qué no. Después lo construimos, con una persona revisando donde importa." />
        </section>

        <section className="site-container py-16 lg:py-24">
          <Reveal><h2 className="section-title">¿Qué <em>necesitas?</em></h2></Reveal>
          <div className="mt-12 border-t hairline">
            {ofertas.map((o, i) => (
              <Reveal key={o.titulo} delay={i * 0.06}>
                <Link href={o.href} className="oferta-fila group">
                  <span className="text-3xl font-semibold tracking-tight sm:text-4xl">{o.titulo}</span>
                  <span className="texto-suave leading-relaxed">{o.texto}</span>
                  <span className="whitespace-nowrap text-sm font-semibold text-[#3E7BFA]">{o.desde}</span>
                  <ArrowUpRight className="hidden h-6 w-6 transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 md:block" aria-hidden="true" />
                </Link>
              </Reveal>
            ))}
          </div>
        </section>

        <section className="site-container py-16 lg:py-24">
          <Reveal><h2 className="section-title">Lo que enseño, <em>lo uso.</em></h2></Reveal>
          <div className="mt-12 grid gap-5 md:grid-cols-2">
            <Reveal>
              <article className="caso">
                <div className="caso-visual" aria-hidden="true">
                  <p className="burbuja">AGENTE</p>
                  <p className="burbuja burbuja-mia">¡Ya te lo envío por DM!</p>
                  <p className="burbuja burbuja-mia burbuja-dm">Aquí están los 4 prompts.</p>
                </div>
                <h3 className="mt-8 text-2xl font-semibold tracking-tight">Bandeja de Instagram</h3>
                <p className="texto-suave mt-3 leading-relaxed">En Asygnuz, una palabra en un comentario dispara la respuesta pública y un DM con lo prometido. Cada conversación queda en un solo lugar.</p>
              </article>
            </Reveal>
            <Reveal delay={0.1}>
              <article className="caso">
                <div className="caso-visual" aria-hidden="true">
                  {agentes.map((a) => <p key={a} className="agente-fila">{a}<span>Propone</span></p>)}
                  <p className="agente-fila agente-tu">Tú<span>Apruebas</span></p>
                </div>
                <h3 className="mt-8 text-2xl font-semibold tracking-tight">Agencia de agentes</h3>
                <p className="texto-suave mt-3 leading-relaxed">El sistema con el que manejo mi marca. Los agentes proponen y nada se publica sin mi aprobación.</p>
              </article>
            </Reveal>
          </div>
        </section>

        <section className="site-container py-24 text-center lg:py-36">
          <Reveal>
            <h2 className="section-title mx-auto max-w-3xl">¿No sabes por dónde <em>empezar?</em></h2>
            <p className="hero-copy mx-auto mt-6 max-w-xl">Responde 5 preguntas y te digo qué te conviene, con precio.</p>
            <Link href="/precalificacion" className="brand-button brand-button-primary mt-9">Empezar <ArrowRight className="h-4 w-4" aria-hidden="true" /></Link>
          </Reveal>
        </section>
      </main>
      <Footer />
    </>
  );
}
