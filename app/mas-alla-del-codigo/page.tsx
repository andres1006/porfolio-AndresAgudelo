// Este archivo incluye animaciones de entrada usando Framer Motion para los textos y un background minimalista e interactivo con el mouse.
"use client";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import {
  motion,
  AnimatePresence,
  useMotionValue,
  useSpring,
  useTransform,
  useMotionTemplate,
} from "framer-motion";

export default function MasAllaDelCodigo() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [showIntro, setShowIntro] = useState(false);
  const [showObjetivo, setShowObjetivo] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Motion values para el mouse
  const mouseX = useMotionValue(0.5); // Normalizado (0-1)
  const mouseY = useMotionValue(0.5);
  // Animación suave
  const springX = useSpring(mouseX, { stiffness: 50, damping: 20 });
  const springY = useSpring(mouseY, { stiffness: 50, damping: 20 });

  // Transformar a porcentaje para el gradiente
  const gradX = useTransform(springX, (v) => `${v * 100}%`);
  const gradY = useTransform(springY, (v) => `${v * 100}%`);

  // Usar useMotionTemplate para el background dinámico
  const background = useMotionTemplate`radial-gradient(circle at ${gradX} ${gradY}, #7ecbff33 0%, #000 80%)`;

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width;
      const y = (e.clientY - rect.top) / rect.height;
      mouseX.set(Math.max(0, Math.min(1, x)));
      mouseY.set(Math.max(0, Math.min(1, y)));
    };
    const node = containerRef.current;
    if (node) {
      node.addEventListener("mousemove", handleMouseMove);
    }
    return () => {
      if (node) node.removeEventListener("mousemove", handleMouseMove);
    };
  }, [mouseX, mouseY]);

  useEffect(() => {
    const mq = window.matchMedia("(max-width: 520px)");
    const update = () => setIsMobile(mq.matches);
    update();
    mq.addEventListener?.("change", update);
    return () => mq.removeEventListener?.("change", update);
  }, []);

  return (
    <motion.div
      ref={containerRef}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      style={{
        minHeight: "100vh",
        background: "#000",
        color: "#7ecbff",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "left",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Header */}
      <motion.header
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          zIndex: 2,
          display: "flex",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            width: "100%",
            maxWidth: 1100,
            padding: "0.75rem 1rem",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            background: "rgba(0,0,0,0.20)",
            backdropFilter: "blur(8px)",
            borderBottom: "1px solid #7ecbff22",
            borderRadius: "0 0 0.75rem 0.75rem",
          }}
        >
          <a
            href="/"
            style={{
              display: "flex",
              alignItems: "center",
              gap: 0,
              color: "#7ecbff",
              textDecoration: "none",
              fontWeight: 600,
              letterSpacing: 0.3,
            }}
          >
            <span>Andrés Agudelo Dev</span>
          </a>
          <div style={{ position: "relative" }}>
            <motion.button
              type="button"
              onClick={() => setMenuOpen((v) => !v)}
              whileTap={{ scale: 0.98 }}
              style={{
                background: "rgba(126,203,255,0.10)",
                border: "1px solid #113345",
                color: "#7ecbff",
                padding: "8px 12px",
                borderRadius: 10,
                cursor: "pointer",
                fontWeight: 600,
              }}
            >
              Menú ▾
            </motion.button>
            <AnimatePresence>
              {menuOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -6 }}
                  transition={{ duration: 0.18 }}
                  style={{
                    position: "absolute",
                    right: 0,
                    top: "calc(100% + 8px)",
                    minWidth: 220,
                    background: "rgba(0,0,0,0.6)",
                    backdropFilter: "blur(8px)",
                    border: "1px solid #113345",
                    borderRadius: 12,
                    boxShadow: "0 12px 48px rgba(0,0,0,0.45)",
                    overflow: "hidden",
                    zIndex: 5,
                  }}
                >
                  {[
                    {
                      label: "Playbook #1",
                      href: "/mas-alla-del-codigo/playbook-1",
                    },
                    {
                      label: "Fundamentos",
                      href: "/mas-alla-del-codigo/fundmentos",
                    },
                    { label: "Sobre mí", href: "/about" },
                  ].map((link) => (
                    <a
                      key={link.label}
                      href={link.href}
                      onClick={() => setMenuOpen(false)}
                      style={{
                        display: "block",
                        padding: "10px 12px",
                        color: "#b6e6ff",
                        textDecoration: "none",
                        borderBottom: "1px solid #113345",
                      }}
                    >
                      {link.label}
                    </a>
                  ))}
                  <div style={{ height: 1, background: "#113345" }} />
                  <a
                    href="/"
                    onClick={() => setMenuOpen(false)}
                    style={{
                      display: "block",
                      padding: "10px 12px",
                      color: "#7ecbff",
                      textDecoration: "none",
                      fontWeight: 600,
                    }}
                  >
                    Inicio
                  </a>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </motion.header>
      {/* Background animado e interactivo con el mouse */}
      <motion.div
        style={{
          position: "absolute",
          top: "-20%",
          left: "-20%",
          width: "140vw",
          height: "140vh",
          zIndex: 0,
          pointerEvents: "none",
          background,
          filter: "blur(40px)",
        }}
      />
      {/* Contenido principal */}
      <div
        style={{
          zIndex: 1,
          width: "100%",
          maxWidth: 900,
          padding: "2rem 1.25rem 4rem",
        }}
      >
        {/* Hero */}
        <motion.section
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15 }}
          style={{ textAlign: "center", marginTop: 76, marginBottom: 28 }}
        >
          {/* Avatar circular */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.18 }}
            style={{
              width: "clamp(72px, 12vw, 112px)",
              height: "clamp(72px, 12vw, 112px)",
              borderRadius: 999,
              margin: "0 auto 10px",
              border: "1px solid #113345",
              overflow: "hidden",
              position: "relative",
              boxShadow: "0 6px 30px rgba(126,203,255,0.15)",
            }}
          >
            <Image
              src="/andres-agudelo.jpg"
              alt="Andrés Agudelo"
              fill
              sizes="(max-width: 480px) 72px, (max-width: 1024px) 160px, 1602px"
              priority
              style={{ objectFit: "cover" }}
            />
          </motion.div>
          <motion.a
            href="/about"
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.22 }}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.99 }}
            style={{
              display: "inline-block",
              marginTop: 10,
              padding: "8px 12px",
              borderRadius: 10,
              border: "1px solid #113345",
              background: "rgba(126,203,255,0.08)",
              color: "#7ecbff",
              textDecoration: "none",
              fontWeight: 600,
            }}
          >
            Saber más de mí →
          </motion.a>
          <h1
            style={{ margin: "6px 0 0", fontSize: "2.4rem", color: "#7ecbff" }}
          >
            Más allá del código
          </h1>
          <p
            style={{ margin: "4px 0 0", fontSize: "0.95rem", color: "#b6e6ff" }}
          >
            Playbooks para desarrolladores
          </p>
        </motion.section>

        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.22 }}
          style={{
            fontSize: "1.5rem",
            marginBottom: 12,
          }}
        >
          Los 7 Playbooks Estratégicos
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.25 }}
          style={{
            color: "#b6e6ff",
            fontSize: "1.05rem",
            marginBottom: 28,
            lineHeight: 1.7,
            textAlign: "justify",
          }}
        >
          El desarrollo de software ha entrado en una nueva era. La inteligencia
          artificial no es solo una herramienta más en nuestro arsenal; es un
          amplificador de capacidades que puede multiplicar nuestra
          productividad por 10x si sabemos cómo utilizarla correctamente.
        </motion.p>

        {/* Métricas compactas */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
            gap: 12,
            marginBottom: 18,
          }}
        >
          {[
            { title: "Tiempo", desc: "-25% en tareas estándar" },
            { title: "Calidad", desc: "Menos bugs, mejor arquitectura" },
            { title: "Aprendizaje", desc: "+ habilidades cada sprint" },
            { title: "Balance", desc: "Productividad sin burnout" },
          ].map((item) => (
            <div
              key={item.title}
              style={{
                background: "rgba(126,203,255,0.08)",
                border: "1px solid #113345",
                borderRadius: 12,
                padding: "10px 12px",
              }}
            >
              <div
                style={{ color: "#7ecbff", fontWeight: 700, marginBottom: 4 }}
              >
                {item.title}
              </div>
              <div style={{ color: "#b6e6ff", fontSize: 13 }}>{item.desc}</div>
            </div>
          ))}
        </div>

        {/* Introducción (acordeón) */}
        <motion.button
          onClick={() => setShowIntro((v) => !v)}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.28 }}
          style={{
            width: "100%",
            textAlign: "left",
            background: "rgba(126,203,255,0.08)",
            border: "1px solid #113345",
            color: "#7ecbff",
            padding: "12px 14px",
            borderRadius: 12,
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            marginBottom: 8,
          }}
        >
          <span style={{ fontSize: "1.05rem", fontWeight: 600 }}>
            Introducción: La nueva era del desarrollo
          </span>
          <span style={{ color: "#b6e6ff", fontSize: 12 }}>
            {showIntro ? "Ocultar" : "Ver más"}
          </span>
        </motion.button>
        <AnimatePresence>
          {showIntro && (
            <motion.div
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -6 }}
              transition={{ duration: 0.35 }}
              style={{
                color: "#b6e6ff",
                lineHeight: 1.9,
                marginBottom: 20,
                border: "1px solid #113345",
                borderRadius: 12,
                padding: "12px 14px",
                background: "rgba(0,0,0,0.25)",
              }}
            >
              <p style={{ marginBottom: 12, textAlign: "justify" }}>
                Antes, el valor de un desarrollador se medía principalmente por
                su capacidad de escribir código desde cero. Hoy, el verdadero
                valor radica en:
              </p>
              <ul style={{ paddingLeft: 20, marginBottom: 16 }}>
                <li>
                  <strong>Capacidad de abstracción</strong>: Pensar en sistemas
                  y arquitecturas
                </li>
                <li>
                  <strong>Habilidad de comunicación</strong>: Traducir problemas
                  complejos en instrucciones claras
                </li>
                <li>
                  <strong>Velocidad de iteración</strong>: Probar, fallar y
                  mejorar rápidamente
                </li>
                <li>
                  <strong>Calidad sobre cantidad</strong>: Producir código
                  mantenible y escalable
                </li>
              </ul>
              <p style={{ marginBottom: 12, textAlign: "justify" }}>
                Este no es otro tutorial sobre cómo usar ChatGPT o Copilot. Es
                un sistema completo que transforma tu forma de trabajar, pensar
                y crecer como desarrollador. Cada paso está diseñado para
                construir sobre el anterior, creando un ciclo virtuoso de mejora
                continua.
              </p>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Objetivo (acordeón) */}
        <motion.button
          onClick={() => setShowObjetivo((v) => !v)}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.34 }}
          style={{
            width: "100%",
            textAlign: "left",
            background: "rgba(126,203,255,0.08)",
            border: "1px solid #113345",
            color: "#7ecbff",
            padding: "12px 14px",
            borderRadius: 12,
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            marginBottom: 8,
          }}
        >
          <span style={{ fontSize: "1.05rem", fontWeight: 600 }}>
            Objetivo del lanzamiento
          </span>
          <span style={{ color: "#b6e6ff", fontSize: 12 }}>
            {showObjetivo ? "Ocultar" : "Ver más"}
          </span>
        </motion.button>
        <AnimatePresence>
          {showObjetivo && (
            <motion.div
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -6 }}
              transition={{ duration: 0.35 }}
              style={{
                color: "#b6e6ff",
                lineHeight: 1.8,
                marginBottom: 20,
                border: "1px solid #113345",
                borderRadius: 12,
                padding: "12px 14px",
                background: "rgba(0,0,0,0.25)",
              }}
            >
              <ul style={{ paddingLeft: 20, margin: 0 }}>
                <li>Compartir la visión y fundamentos del sistema.</li>
                <li>
                  Dar acceso al{" "}
                  <strong>Playbook #1: Comunicación Efectiva con IA</strong>.
                </li>
                <li>
                  Definir métricas para medir impacto real en el trabajo diario.
                </li>
              </ul>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Cards grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: 12,
            alignItems: "stretch",
            marginBottom: 14,
          }}
        >
          {/* Card Fundamentos */}
          <motion.a
            href="/mas-alla-del-codigo/fundmentos"
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.48 }}
            style={{
              display: "block",
              background:
                "linear-gradient(180deg, rgba(126,203,255,0.14) 0%, rgba(126,203,255,0.06) 100%)",
              border: "1.5px solid #7ecbff33",
              borderRadius: "1rem",
              padding: "clamp(12px, 3vw, 20px)",
              color: "#b6e6ff",
              textDecoration: "none",
              boxShadow: "0 8px 40px 0 rgba(126,203,255,0.08)",
              transition: "transform 0.2s ease, box-shadow 0.2s ease",
              height: "100%",
            }}
            whileHover={{ scale: 1.01 }}
            whileTap={{ scale: 0.995 }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: 6,
                minHeight: "100%",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  flexDirection: "column",
                  gap: 10,
                }}
              >
                <span
                  style={{
                    display: "inline-block",
                    fontSize: "0.8rem",
                    padding: "0.25rem 0.6rem",
                    borderRadius: 999,
                    background: "#7ecbff22",
                    border: "1px solid #7ecbff33",
                    color: "#7ecbff",
                    fontWeight: 600,
                    letterSpacing: 0.3,
                  }}
                >
                  Fundamentos
                </span>
                <h3
                  style={{
                    margin: isMobile ? "6px 0 0" : 0,
                    fontSize: "clamp(1rem, 2.5vw, 1.2rem)",
                    color: "#7ecbff",
                  }}
                >
                  Conceptos básicos de IA para desarrolladores
                </h3>
              </div>
              <p
                style={{
                  margin: "6px 0 10px",
                  lineHeight: 1.7,
                  fontSize: "clamp(0.92rem, 2.3vw, 1rem)",
                }}
              >
                Entiende LLMs, MLMs, sus usos, limitaciones y configuración
                inicial para potenciar tu workflow con IA.
              </p>
              <span
                style={{
                  alignSelf: "flex-start",
                  fontWeight: 600,
                  color: "#7ecbff",
                  borderBottom: "1px dashed #7ecbff55",
                }}
              >
                Ver sección completa →
              </span>
            </div>
          </motion.a>

          {/* Card Playbook #1 */}
          <motion.a
            id="playbook-1"
            href="/mas-alla-del-codigo/playbook-1"
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            style={{
              display: "block",
              background:
                "linear-gradient(180deg, rgba(126,203,255,0.14) 0%, rgba(126,203,255,0.06) 100%)",
              border: "1.5px solid #7ecbff33",
              borderRadius: "1rem",
              padding: "clamp(12px, 3vw, 20px)",
              color: "#b6e6ff",
              textDecoration: "none",
              boxShadow: "0 8px 40px 0 rgba(126,203,255,0.08)",
              transition: "transform 0.2s ease, box-shadow 0.2s ease",
              height: "100%",
            }}
            whileHover={{ scale: 1.01 }}
            whileTap={{ scale: 0.995 }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: 6,
                minHeight: "100%",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  flexDirection: "column",
                  gap: 10,
                }}
              >
                <span
                  className="truncate"
                  style={{
                    display: "inline-block",
                    fontSize: "0.8rem",
                    padding: "0.25rem 0.6rem",
                    borderRadius: 999,
                    background: "#7ecbff22",
                    border: "1px solid #7ecbff33",
                    color: "#7ecbff",
                    fontWeight: 600,
                    letterSpacing: 0.3,
                  }}
                >
                  Playbook #1
                </span>
                <h3
                  style={{
                    margin: isMobile ? "6px 0 0" : 0,
                    fontSize: "clamp(1rem, 2.5vw, 1.2rem)",
                    color: "#7ecbff",
                    display: "flex",
                    alignItems: "center",
                    gap: 8,
                  }}
                >
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M6 4h9l3 3v13a1 1 0 01-1 1H6a1 1 0 01-1-1V5a1 1 0 011-1z"
                      stroke="#7ecbff"
                      strokeOpacity="0.9"
                    />
                    <path
                      d="M9 9h6M9 12h6M9 15h4"
                      stroke="#7ecbff"
                      strokeWidth="1"
                      strokeOpacity="0.8"
                    />
                  </svg>
                  Comunicación Efectiva con IA
                </h3>
              </div>
              <p
                style={{
                  margin: "6px 0 10px",
                  lineHeight: 1.7,
                  fontSize: "clamp(0.92rem, 2.3vw, 1rem)",
                }}
              >
                Domina la comunicación con IA para convertir ideas en
                implementaciones efectivas: prompts claros, contexto adecuado y
                ciclos de iteración rápidos.
              </p>
              <span
                style={{
                  alignSelf: "flex-start",
                  fontWeight: 600,
                  color: "#7ecbff",
                  borderBottom: "1px dashed #7ecbff55",
                }}
              >
                Abrir Playbook →
              </span>
            </div>
          </motion.a>
        </div>

        {/* Roadmap de playbooks */}
        <h3 style={{ fontSize: "1.2rem", margin: "18px 0 8px" }}>
          Roadmap de playbooks
        </h3>
        <div
          style={{
            display: "flex",
            gap: 10,
            flexWrap: "wrap",
            paddingBottom: 6,
          }}
        >
          {[
            "#2 Arquitectura mental",
            "#3 Iteración inteligente",
            "#4 Contexto y memoria",
            "#5 Automatización flujo",
            "#6 Aprendizaje continuo",
            "#7 Balance y sostenibilidad",
            "Conclusión",
          ].map((label) => (
            <div
              key={label}
              style={{
                whiteSpace: "nowrap",
                padding: "8px 12px",
                borderRadius: 999,
                border: "1px solid #113345",
                background: "rgba(126,203,255,0.06)",
                color: "#b6e6ff",
                fontSize: 13,
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                opacity: 0.9,
                cursor: "default",
              }}
            >
              <span>{label}</span>
              <span style={{ fontSize: 12, color: "#7ecbff" }}>
                Próximamente
              </span>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
