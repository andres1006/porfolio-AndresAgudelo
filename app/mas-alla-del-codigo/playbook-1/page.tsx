"use client";
import React from "react";
import { motion } from "framer-motion";

export default function PlaybookUno() {
  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      style={{
        minHeight: "100vh",
        background: "#000",
        color: "#7ecbff",
        display: "flex",
        justifyContent: "center",
        padding: "4.5rem 1.25rem 3rem",
      }}
    >
      <div style={{ width: "100%", maxWidth: 1100 }}>
        <motion.a
          href="/mas-alla-del-codigo"
          initial={{ opacity: 0, x: -4 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4 }}
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 8,
            color: "#b6e6ff",
            textDecoration: "none",
            marginBottom: 12,
            fontSize: "0.95rem",
          }}
          whileHover={{ x: -2 }}
          whileTap={{ scale: 0.98 }}
        >
          <span style={{ fontSize: 18, lineHeight: 1 }}>←</span>
          <span>Volver a Más allá del código</span>
        </motion.a>
        <h1 style={{ marginTop: 0, marginBottom: 12 }}>
          Playbook #1: Comunicación Efectiva con IA
        </h1>
        <div
          style={{
            background: "#07141b",
            border: "1px solid #113345",
            borderRadius: 12,
            overflow: "hidden",
            boxShadow: "0 8px 40px 0 rgba(126,203,255,0.08)",
          }}
        >
          <iframe
            src="https://andresagudel0.notion.site/ebd/23fdbff5bd0480fba52ce121d53f72ca"
            width="100%"
            height="720"
            frameBorder={0}
            allowFullScreen
            style={{ display: "block" }}
          />
        </div>
      </div>
    </motion.main>
  );
}
