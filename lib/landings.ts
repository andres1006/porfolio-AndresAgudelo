import type { Icp, OfertaId } from "@/lib/precalificacion";

export type LandingData = {
  icp: Icp;
  etiqueta: string;
  titulo: string;
  destacado: string;
  subtitulo: string;
  dolores: string[];
  pasos: { titulo: string; texto: string }[];
  ofertas: OfertaId[];
  prueba: string;
  limite: string;
};

export const LANDINGS: Record<Icp, LandingData> = {
  automatizar: {
    icp: "automatizar",
    etiqueta: "AUTOMATIZACIÓN PARA TU NEGOCIO",
    titulo: "Deja de hacer a mano lo que",
    destacado: "se repite cada semana.",
    subtitulo: "Encontramos el proceso que más tiempo te quita y lo resolvemos con tus herramientas, con una persona revisando donde importa.",
    dolores: ["Clientes que nadie vuelve a contactar a tiempo.", "Las mismas preguntas respondidas una y otra vez.", "Reportes que se arman a mano y llegan tarde."],
    pasos: [
      { titulo: "Elegimos un proceso", texto: "Uno concreto, que se repita y tenga un responsable." },
      { titulo: "Lo automatizamos", texto: "Con pruebas sobre datos reales y límites claros." },
      { titulo: "Lo dejas funcionando", texto: "Documentado, con entrega y soporte." },
    ],
    ofertas: ["diagnostico", "quickwin", "sistema"],
    prueba: "Uso este enfoque en mi propio negocio: comentarios y mensajes de Instagram organizados, respuestas por palabra clave y aprobación antes de publicar.",
    limite: "No automatizo decisiones sensibles sin revisión humana. Los costos de APIs y licencias los pagas directamente.",
  },
  construir: {
    icp: "construir",
    etiqueta: "DESARROLLO DE PRODUCTO CON IA",
    titulo: "Tienes la idea. Vamos a construirla",
    destacado: "para que pueda crecer.",
    subtitulo: "Primero aclaramos qué debe existir y qué no. Después se construye con especificación, arquitectura y revisión en cada paso.",
    dolores: ["No sabes qué construir primero.", "Te cotizan sin entender el problema.", "Un primer desarrollo que ya no se puede cambiar."],
    pasos: [
      { titulo: "Especificamos", texto: "Qué resuelve, para quién y qué queda por fuera." },
      { titulo: "Diseñamos", texto: "Arquitectura, datos, límites y plan de entrega." },
      { titulo: "Construimos", texto: "Por etapas que puedes revisar, con Asygnuz." },
    ],
    ofertas: ["diagnostico", "agente", "mvp"],
    prueba: "Llevo cerca de 8 años construyendo software y hoy construyo Asygnuz: un sistema real que opera bandejas, portales y métricas.",
    limite: "Alcance por escrito antes de cobrar. No se baja el precio: se ajusta el alcance.",
  },
  consultoria: {
    icp: "consultoria",
    etiqueta: "CONSULTORÍA TÉCNICA",
    titulo: "Tu agente funciona en la demo.",
    destacado: "Hagámoslo confiable.",
    subtitulo: "Reviso contexto, herramientas, evaluación, seguridad y costos para que tu equipo sepa qué corregir primero.",
    dolores: ["Respuestas que cambian sin una razón clara.", "No hay forma de medir si una versión mejoró.", "Permisos demasiado amplios para lo que hace el agente."],
    pasos: [
      { titulo: "Reviso el sistema", texto: "Código, contexto, contratos de herramientas y casos reales." },
      { titulo: "Priorizo hallazgos", texto: "Informe por severidad y plan de corrección." },
      { titulo: "Lo vemos con el equipo", texto: "Una sesión de 2 horas para decidir el siguiente paso." },
    ],
    ofertas: ["revision", "acompanamiento"],
    prueba: "Trabajo con agentes, MCP y Spec-Driven Development en sistemas propios, con pruebas, permisos por alcance y registro de acciones.",
    limite: "Una revisión no garantiza resultados: entrega evidencia y prioridades para que tu equipo decida.",
  },
  diagnostico: {
    icp: "diagnostico",
    etiqueta: "DIAGNÓSTICO DE IA",
    titulo: "Descubre qué automatizar",
    destacado: "primero en tu negocio.",
    subtitulo: "En una sesión revisamos cómo trabajas y sales con 3 oportunidades priorizadas. No necesitas saber programar.",
    dolores: ["Sabes que la IA te puede ayudar, pero no por dónde empezar.", "Probaste herramientas y no se quedaron en tu rutina.", "Quieres un plan antes de invertir más."],
    pasos: [
      { titulo: "Conversamos 90 minutos", texto: "Sobre tu negocio y tus procesos." },
      { titulo: "Recibes un mapa", texto: "3 oportunidades por impacto, esfuerzo y riesgo." },
      { titulo: "Sabes qué sigue", texto: "Incluso si la respuesta es no automatizar todavía." },
    ],
    ofertas: ["diagnostico"],
    prueba: "Es el mismo criterio con el que decido qué automatizar en mi propia marca y qué sigue pasando por mi aprobación.",
    limite: "No es para quien busca prompts mágicos, resultados garantizados o automatizar decisiones sensibles sin revisión humana.",
  },
};
