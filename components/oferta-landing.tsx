"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { Reveal } from "@/components/motion";
import { track } from "@/lib/analytics";
import type { LandingData } from "@/lib/landings";
import { OFERTAS, OfertaId } from "@/lib/precalificacion";

export default function OfertaLanding({ data }: { data: LandingData }) {
  const [recomendada, setRecomendada] = useState<OfertaId | null>(null);

  useEffect(() => {
    const o = new URLSearchParams(window.location.search).get("oferta") as OfertaId | null;
    const valida = o && data.ofertas.includes(o) ? o : null;
    setRecomendada(valida);
    track("landing_view", { icp: data.icp, oferta: valida ?? "sin_recomendacion" });
  }, [data]);

  const ordenadas = recomendada ? [recomendada, ...data.ofertas.filter((o) => o !== recomendada)] : data.ofertas;

  return (
    <>
      <Header />
      <main className="site-shell overflow-hidden">
        <section className="site-container pb-20 pt-20 lg:pb-28 lg:pt-28">
          <p className="eyebrow entra"><span className="eyebrow-dot" /> {data.etiqueta}</p>
          <h1 className="display-title display-title-sm entra entra-2 mt-6 max-w-5xl">
            {data.titulo} <em>{data.destacado}</em>
          </h1>
          <p className="hero-copy entra entra-3 mt-7 max-w-2xl">{data.subtitulo}</p>
          <div className="entra entra-4 mt-9 flex flex-col gap-3 sm:flex-row">
            <a href="#oferta" className="brand-button brand-button-primary">Ver qué incluye <ArrowRight aria-hidden="true" /></a>
            <Link href="/precalificacion" className="brand-button brand-button-ghost">Revisar mi caso</Link>
          </div>
        </section>

        <section className="site-container pb-24">
          <Reveal><h2 className="section-title">¿Te <em>suena?</em></h2></Reveal>
          <div className="mt-10 border-t hairline">
            {data.dolores.map((d, i) => (
              <Reveal key={d} delay={i * 0.06}><p className="fila-grande">{d}</p></Reveal>
            ))}
          </div>
        </section>

        <section className="banda py-24">
          <div className="site-container">
            <Reveal><h2 className="section-title">Cómo <em>funciona</em></h2></Reveal>
            <ol className="mt-12 grid gap-10 md:grid-cols-3">
              {data.pasos.map((p, i) => (
                <Reveal key={p.titulo} delay={i * 0.08}>
                  <li className="list-none">
                    <span className="paso-num">{i + 1}</span>
                    <h3 className="mt-5 text-2xl font-semibold tracking-tight">{p.titulo}</h3>
                    <p className="texto-suave mt-3 leading-relaxed">{p.texto}</p>
                  </li>
                </Reveal>
              ))}
            </ol>
          </div>
        </section>

        <section id="oferta" className="site-container scroll-mt-20 py-24">
          <Reveal><h2 className="section-title">Por dónde <em>empezar</em></h2></Reveal>
          <div className="mt-12 grid gap-5 md:grid-cols-[repeat(auto-fit,minmax(18rem,1fr))]">
            {ordenadas.map((id, i) => {
              const o = OFERTAS[id];
              return (
                <Reveal key={id} delay={i * 0.06}>
                  <article className={`oferta ${id === recomendada ? "oferta-recomendada" : ""}`}>
                    {id === recomendada && <p className="oferta-tag">Recomendado para ti</p>}
                    <h3 className="text-2xl font-semibold tracking-tight">{o.nombre}</h3>
                    <p className="mt-2 font-semibold text-[#3E7BFA]">{o.precio}</p>
                    <p className="texto-suave mt-4 flex-1 leading-relaxed">{o.detalle}</p>
                    <Link href={`/contact?servicio=${id}`} onClick={() => track("cta_click", { icp: data.icp, oferta: id })} className={`brand-button mt-7 ${id === recomendada || ordenadas.length === 1 ? "brand-button-primary" : "brand-button-ghost"}`}>
                      {o.cta} <ArrowRight className="h-4 w-4" aria-hidden="true" />
                    </Link>
                  </article>
                </Reveal>
              );
            })}
          </div>
        </section>

        <section className="site-container grid gap-10 pb-24 md:grid-cols-2">
          <Reveal><div><p className="eyebrow">POR QUÉ CONMIGO</p><p className="mt-4 text-xl leading-relaxed">{data.prueba}</p></div></Reveal>
          <Reveal delay={0.08}><div><p className="eyebrow">QUÉ DEBES SABER</p><p className="texto-suave mt-4 text-xl leading-relaxed">{data.limite}</p></div></Reveal>
        </section>
      </main>
      <Footer />
    </>
  );
}
