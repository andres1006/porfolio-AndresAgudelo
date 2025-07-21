// Este archivo incluye animaciones de entrada usando Framer Motion para los textos, el contador y un background minimalista interactivo con el mouse.
"use client";
import React, { useEffect, useState, useRef } from "react";
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  useMotionTemplate,
} from "framer-motion";

const targetDate = new Date("2025-08-03T00:00:00").getTime();

function getTimeLeft() {
  const now = new Date().getTime();
  const distance = targetDate - now;
  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);
  return { days, hours, minutes, seconds };
}

export default function MasAllaDelCodigo() {
  const [timeLeft, setTimeLeft] = useState(getTimeLeft());
  const containerRef = useRef<HTMLDivElement>(null);

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
    const timer = setInterval(() => {
      setTimeLeft(getTimeLeft());
    }, 1000);
    return () => clearInterval(timer);
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
        textAlign: "center",
        position: "relative",
        overflow: "hidden",
      }}
    >
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
      {/* Contenido principal animado */}
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.2 }}
        style={{
          fontSize: "2.5rem",
          fontWeight: 500,
          marginBottom: 8,
          zIndex: 1,
        }}
      >
        Andrés Agudelo Dev
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
        style={{
          fontStyle: "italic",
          fontSize: "1.2rem",
          marginBottom: 32,
          zIndex: 1,
        }}
      >
        “Más allá del código”
      </motion.p>
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0.8 }}
        style={{
          fontSize: "2rem",
          letterSpacing: 2,
          marginBottom: 0,
          zIndex: 1,
          background: "rgba(126,203,255,0.10)",
          padding: "1.2rem 2.5rem",
          borderRadius: "1.5rem",
          boxShadow: "0 4px 32px 0 rgba(126,203,255,0.10)",
          fontFamily: "'Fira Mono', 'Menlo', 'Monaco', 'Consolas', monospace",
          border: "1.5px solid #7ecbff33",
          display: "inline-block",
          marginTop: 8,
        }}
      >
        {timeLeft.days}d {timeLeft.hours}h {timeLeft.minutes}m{" "}
        {timeLeft.seconds}s
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.7 }}
        transition={{ duration: 1, delay: 1.1 }}
        style={{
          fontSize: "0.95rem",
          marginTop: 24,
          zIndex: 1,
          borderRadius: "0.7rem",
          padding: "0.5rem 1.2rem",
          display: "inline-block",
          color: "#b6e6ff",
          fontWeight: 400,
          letterSpacing: 1,
          fontFamily: "'Inter', 'Arial', sans-serif",
          boxShadow: "0 2px 12px 0 rgba(126,203,255,0.07)",
        }}
      >
        Lanzamiento: 03.08.2025
      </motion.div>
    </motion.div>
  );
}
