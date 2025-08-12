"use client";
import React from "react";
import { motion } from "framer-motion";

export default function Fundmentos() {
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
      <div style={{ width: "100%", maxWidth: 900 }}>
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
          Fundamentos: Conceptos básicos de IA para desarrolladores
        </h1>
        <p style={{ color: "#b6e6ff", lineHeight: 1.8, textAlign: "justify" }}>
          Antes de sumergirnos en los playbooks estratégicos, es crucial
          entender los conceptos fundamentales que sustentan las herramientas de
          IA que utilizaremos.
        </p>

        <h2 style={{ fontSize: "1.2rem", marginBottom: 8 }}>
          ¿Qué Son los Modelos de Lenguaje?
        </h2>

        <h3 style={{ fontSize: "1.05rem", marginBottom: 6 }}>
          LLM (Large Language Models)
        </h3>
        <p
          style={{
            color: "#b6e6ff",
            lineHeight: 1.8,
            marginBottom: 8,
            textAlign: "justify",
          }}
        >
          Los <strong>Modelos de Lenguaje Grandes</strong> son sistemas de IA
          entrenados en vastas cantidades de texto para entender y generar
          lenguaje humano. Son la base de herramientas como ChatGPT, Claude, y
          GitHub Copilot.
        </p>
        <p style={{ color: "#b6e6ff", marginBottom: 6 }}>
          <strong>Características clave:</strong>
        </p>
        <ul style={{ paddingLeft: 20, marginBottom: 14 }}>
          <li>Procesamiento de texto natural</li>
          <li>Generación coherente de contenido</li>
          <li>Capacidad de seguir instrucciones complejas</li>
          <li>Comprensión contextual</li>
        </ul>

        <h3 style={{ fontSize: "1.05rem", marginBottom: 6 }}>
          MLM (Masked Language Models)
        </h3>
        <p
          style={{
            color: "#b6e6ff",
            lineHeight: 1.8,
            marginBottom: 8,
            textAlign: "justify",
          }}
        >
          Los <strong>Modelos de Lenguaje Enmascarado</strong> predicen palabras
          faltantes en un texto. Son especialmente útiles para:
        </p>
        <ul style={{ paddingLeft: 20, marginBottom: 6 }}>
          <li>Autocompletado de código</li>
          <li>Corrección de errores</li>
          <li>Sugerencias contextuales</li>
        </ul>
        <p style={{ color: "#b6e6ff", marginBottom: 16 }}>
          <strong>Ejemplo práctico:</strong> BERT, que es excelente para
          entender el contexto pero limitado en generación.
        </p>

        <h2 style={{ fontSize: "1.2rem", marginBottom: 8 }}>
          Principales Modelos y Sus Casos de Uso
        </h2>
        <div style={{ color: "#b6e6ff", lineHeight: 1.8, marginBottom: 14 }}>
          <h4 style={{ fontSize: "1.05rem", margin: "8px 0 4px" }}>
            1. <strong>GPT-4/GPT-4 Turbo (OpenAI)</strong>
          </h4>
          <p style={{ margin: "0 0 6px", textAlign: "justify" }}>
            <strong>Fortalezas:</strong> Razonamiento complejo, escritura
            creativa, análisis detallado
          </p>
          <ul style={{ paddingLeft: 20, marginTop: 0, marginBottom: 10 }}>
            <li>Arquitectura de sistemas complejos</li>
            <li>Documentación técnica</li>
            <li>Resolución de problemas algorítmicos</li>
            <li>Code reviews detallados</li>
          </ul>

          <h4 style={{ fontSize: "1.05rem", margin: "8px 0 4px" }}>
            2. <strong>Claude 3.5 Sonnet (Anthropic)</strong>
          </h4>
          <p style={{ margin: "0 0 6px", textAlign: "justify" }}>
            <strong>Fortalezas:</strong> Análisis de código, seguimiento de
            instrucciones precisas
          </p>
          <ul style={{ paddingLeft: 20, marginTop: 0, marginBottom: 10 }}>
            <li>Refactoring de código legacy</li>
            <li>Análisis de vulnerabilidades</li>
            <li>Optimización de performance</li>
            <li>Debugging complejo</li>
          </ul>

          <h4 style={{ fontSize: "1.05rem", margin: "8px 0 4px" }}>
            3. <strong>GitHub Copilot (Microsoft/OpenAI)</strong>
          </h4>
          <p style={{ margin: "0 0 6px", textAlign: "justify" }}>
            <strong>Fortalezas:</strong> Autocompletado contextual, integración
            IDE
          </p>
          <ul style={{ paddingLeft: 20, marginTop: 0, marginBottom: 10 }}>
            <li>Desarrollo rápido de funciones estándar</li>
            <li>Generación de tests unitarios</li>
            <li>Boilerplate code</li>
            <li>Patrones de código comunes</li>
          </ul>

          <h4 style={{ fontSize: "1.05rem", margin: "8px 0 4px" }}>
            4. <strong>Gemini Pro (Google)</strong>
          </h4>
          <p style={{ margin: "0 0 6px", textAlign: "justify" }}>
            <strong>Fortalezas:</strong> Integración con servicios Google,
            multimodalidad
          </p>
          <ul style={{ paddingLeft: 20, marginTop: 0, marginBottom: 10 }}>
            <li>Análisis de imágenes en aplicaciones</li>
            <li>Integración con Google Cloud</li>
            <li>Procesamiento de documentos</li>
          </ul>
        </div>

        <h3 style={{ fontSize: "1.2rem", margin: "12px 0 8px" }}>
          Diferencias Clave Entre Modelos
        </h3>
        <div
          style={{
            background: "#07141b",
            border: "1px solid #113345",
            borderRadius: 8,
            padding: "10px 12px",
            marginBottom: 16,
            overflowX: "auto",
          }}
        >
          <pre
            style={{
              margin: 0,
              color: "#b6e6ff",
              fontFamily: "'Fira Mono', 'Menlo', monospace",
              fontSize: 12,
            }}
          >
            {`Aspecto            GPT-4         Claude 3.5    Copilot        Gemini Pro
Contexto           128K tokens   200K tokens   Variable       32K tokens
Código             Bueno         Excelente     Especializado  Bueno
Razonamiento       Excelente     Excelente     Limitado       Bueno
Integración IDE    Externa       Externa       Nativa         Externa
Costo              Alto          Medio         Suscripción    Medio`}
          </pre>
        </div>

        <h3 style={{ fontSize: "1.2rem", marginBottom: 8 }}>
          Cuándo Usar Cada Modelo
        </h3>
        <div style={{ color: "#b6e6ff", lineHeight: 1.8, marginBottom: 16 }}>
          <p style={{ marginBottom: 6 }}>
            <strong>Para Arquitectura y Diseño:</strong>
          </p>
          <ul style={{ paddingLeft: 20, marginTop: 0, marginBottom: 10 }}>
            <li>
              <strong>GPT-4</strong>: Sistemas complejos, decisiones
              arquitectónicas
            </li>
            <li>
              <strong>Claude</strong>: Análisis de trade-offs, documentación
              técnica
            </li>
          </ul>
          <p style={{ marginBottom: 6 }}>
            <strong>Para Codificación Activa:</strong>
          </p>
          <ul style={{ paddingLeft: 20, marginTop: 0, marginBottom: 10 }}>
            <li>
              <strong>Copilot</strong>: Desarrollo día a día, autocompletado
            </li>
            <li>
              <strong>Claude</strong>: Refactoring, optimización
            </li>
          </ul>
          <p style={{ marginBottom: 6 }}>
            <strong>Para Debugging:</strong>
          </p>
          <ul style={{ paddingLeft: 20, marginTop: 0, marginBottom: 10 }}>
            <li>
              <strong>Claude</strong>: Análisis profundo de errores
            </li>
            <li>
              <strong>GPT-4</strong>: Problemas algorítmicos complejos
            </li>
          </ul>
          <p style={{ marginBottom: 6 }}>
            <strong>Para Aprendizaje:</strong>
          </p>
        </div>
        <ul style={{ paddingLeft: 20, marginTop: 0, marginBottom: 16 }}>
          <li>
            <strong>GPT-4</strong>: Explicaciones conceptuales
          </li>
          <li>
            <strong>Claude</strong>: Análisis paso a paso de código
          </li>
        </ul>

        <h3 style={{ fontSize: "1.2rem", marginBottom: 8 }}>
          Limitaciones Importantes
        </h3>
        <h4 style={{ fontSize: "1.05rem", margin: "6px 0" }}>
          <strong>Contexto Limitado</strong>
        </h4>
        <ul style={{ paddingLeft: 20, marginTop: 0, marginBottom: 10 }}>
          <li>Dividir tareas grandes en chunks</li>
          <li>Usar técnicas de summarización</li>
          <li>Mantener contexto relevante</li>
        </ul>
        <h4 style={{ fontSize: "1.05rem", margin: "6px 0" }}>
          <strong>Alucinaciones</strong>
        </h4>
        <ul style={{ paddingLeft: 20, marginTop: 0, marginBottom: 10 }}>
          <li>Verificar código crítico</li>
          <li>Usar pruebas automatizadas</li>
          <li>Validar con documentación oficial</li>
        </ul>
        <h4 style={{ fontSize: "1.05rem", margin: "6px 0" }}>
          <strong>Dependencia de Calidad de Input</strong>
        </h4>
        <ul style={{ paddingLeft: 20, marginTop: 0, marginBottom: 14 }}>
          <li>Ser específico en las instrucciones</li>
          <li>Proporcionar contexto suficiente</li>
          <li>Iterar y refinar prompts</li>
        </ul>

        <h3 style={{ fontSize: "1.2rem", marginBottom: 8 }}>
          Configuración Inicial Recomendada
        </h3>
        <h4 style={{ fontSize: "1.05rem", margin: "6px 0" }}>
          <strong>Stack Básico:</strong>
        </h4>
        <ol style={{ paddingLeft: 20, marginTop: 0, marginBottom: 10 }}>
          <li>
            <strong>IDE Principal</strong>: VS Code con extensiones de IA
          </li>
          <li>
            <strong>Modelo Conversacional</strong>: Claude o GPT-4 para análisis
          </li>
          <li>
            <strong>Autocompletado</strong>: GitHub Copilot
          </li>
          <li>
            <strong>Documentación</strong>: GPT-4 para explicaciones
          </li>
        </ol>
        <h4 style={{ fontSize: "1.05rem", margin: "6px 0" }}>
          <strong>Workflow de Evaluación:</strong>
        </h4>
        <div
          style={{
            background: "#07141b",
            border: "1px solid #113345",
            borderRadius: 8,
            padding: "8px 10px",
            marginBottom: 14,
          }}
        >
          <code style={{ color: "#b6e6ff" }}>
            Problema → Modelo Apropiado → Verificación → Implementación
          </code>
        </div>
      </div>
    </motion.main>
  );
}
