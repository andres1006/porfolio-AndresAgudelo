export type Icp = "automatizar" | "construir" | "consultoria" | "diagnostico";
export type Inversion = "nose" | "menos200" | "200a1000" | "1000a3000" | "3000a15000" | "mas15000";
export type OfertaId = "diagnostico" | "quickwin" | "sistema" | "agente" | "mvp" | "revision" | "acompanamiento";

export const OFERTAS: Record<OfertaId, { nombre: string; precio: string; detalle: string; cta: string }> = {
  diagnostico: { nombre: "Diagnóstico de IA", precio: "USD 160", detalle: "90 minutos y un mapa escrito de 3 oportunidades priorizadas, entregado 48 horas hábiles después. Se acredita al Quick Win si lo contratas en 30 días.", cta: "Reservar Diagnóstico" },
  quickwin: { nombre: "Quick Win en una semana", precio: "USD 1.120–1.870", detalle: "Un flujo resuelto con tus herramientas, probado con datos reales, documentado y con 15 días de soporte.", cta: "Hablar de mi proceso" },
  sistema: { nombre: "Sistema de automatización", precio: "Desde USD 3.000", detalle: "Con Asygnuz: 3 a 6 flujos conectados en un área, tablero de métricas y capacitación, en 3 a 6 semanas.", cta: "Agendar una llamada" },
  agente: { nombre: "Agente a medida", precio: "Desde USD 4.750", detalle: "Con Asygnuz: base de conocimiento, herramientas, límites y revisión humana, evaluado con casos reales, en 4 a 8 semanas.", cta: "Agendar una llamada" },
  mvp: { nombre: "Producto o MVP con IA", precio: "Desde USD 14.050", detalle: "Con Asygnuz: especificación, diseño y construcción con una arquitectura que pueda crecer. Se cotiza por alcance.", cta: "Agendar una llamada" },
  revision: { nombre: "Revisión de arquitectura", precio: "USD 740", detalle: "Contexto, herramientas, evaluación, seguridad y costos. Informe con hallazgos por severidad y sesión de 2 horas con tu equipo.", cta: "Solicitar revisión" },
  acompanamiento: { nombre: "Acompañamiento técnico", precio: "USD 460/mes", detalle: "4 sesiones al mes y revisión asíncrona de PRs y diseños, hasta 4 horas. Mínimo 2 meses.", cta: "Hablar de mi equipo" },
};

export type Opcion = { valor: string; texto: string };
export type Pregunta = { id: "situacion" | "dolor" | "intentado" | "tamano" | "inversion"; titulo: string; ayuda?: string; opciones: (icp: Icp) => Opcion[] };

const DOLORES: Record<Icp, string[]> = {
  automatizar: ["Hacer seguimiento a clientes", "Responder las mismas preguntas", "Armar reportes", "Pasar datos de un sistema a otro"],
  construir: ["Definir qué construir primero", "Encontrar quién lo construya bien", "Un primer desarrollo que no escala", "Integrar IA al producto"],
  consultoria: ["Respuestas poco confiables", "No sabemos evaluar la calidad", "Costos difíciles de controlar", "Dudas de seguridad y permisos"],
  diagnostico: ["No sé qué se puede automatizar", "Hay demasiadas herramientas", "Probé IA y no me sirvió", "Quiero un plan claro"],
};

export const PREGUNTAS: Pregunta[] = [
  { id: "situacion", titulo: "¿Qué describe mejor tu situación?", opciones: () => [
    { valor: "automatizar", texto: "Perdemos tiempo en tareas repetitivas" },
    { valor: "construir", texto: "Quiero construir un producto o una herramienta" },
    { valor: "consultoria", texto: "Ya construimos con IA y queremos mejorarlo" },
    { valor: "diagnostico", texto: "Sé que necesito IA, pero no por dónde empezar" },
  ] },
  { id: "dolor", titulo: "¿Qué es lo que más te cuesta hoy?", opciones: (icp) => DOLORES[icp].map((texto) => ({ valor: texto, texto })) },
  { id: "intentado", titulo: "¿Qué has intentado hasta ahora?", opciones: () => ["Nada todavía", "Herramientas sueltas", "Un freelancer o agencia", "Un equipo interno"].map((texto) => ({ valor: texto, texto })) },
  { id: "tamano", titulo: "¿En qué etapa está tu negocio?", opciones: () => ["Todavía no factura", "Factura, trabajo solo", "Factura, equipo de 2 a 10", "Factura, equipo de más de 10"].map((texto) => ({ valor: texto, texto })) },
  { id: "inversion", titulo: "Para resolverlo en los próximos 3 meses, ¿cuánto tienes contemplado invertir?", ayuda: "Solo me sirve para recomendarte algo realista. «Aún no lo sé» también es válida.", opciones: () => [
    { valor: "nose", texto: "Aún no lo sé" },
    { valor: "menos200", texto: "Menos de USD 200" },
    { valor: "200a1000", texto: "USD 200–1.000" },
    { valor: "1000a3000", texto: "USD 1.000–3.000" },
    { valor: "3000a15000", texto: "USD 3.000–15.000" },
    { valor: "mas15000", texto: "Más de USD 15.000" },
  ] },
];

// El dolor elige la landing; la inversión elige la oferta.
export function recomendar(icp: Icp, inversion: Inversion): OfertaId {
  const bajo = inversion === "nose" || inversion === "menos200";
  if (icp === "diagnostico") return "diagnostico";
  if (icp === "automatizar") {
    if (inversion === "3000a15000" || inversion === "mas15000") return "sistema";
    return inversion === "1000a3000" ? "quickwin" : "diagnostico";
  }
  if (icp === "construir") {
    if (inversion === "mas15000") return "mvp";
    return inversion === "3000a15000" ? "agente" : "diagnostico";
  }
  if (bajo) return "diagnostico";
  return inversion === "3000a15000" || inversion === "mas15000" ? "acompanamiento" : "revision";
}

export const RESPUESTAS_KEY = "precalificacion-respuestas";

export function resumenRespuestas(r: Record<string, string>): string {
  return PREGUNTAS.filter((p) => r[p.id])
    .map((p) => {
      const icp = (r.situacion || "diagnostico") as Icp;
      const texto = p.opciones(icp).find((o) => o.valor === r[p.id])?.texto ?? r[p.id];
      return `${p.titulo} ${texto}`;
    })
    .join("\n");
}
