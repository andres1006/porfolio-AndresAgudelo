declare global {
  interface Window {
    dataLayer?: Record<string, unknown>[];
  }
}

// Solo eventos y categorías: nunca nombre, correo, dolor escrito ni rango de inversión.
// GTM lee esta cola únicamente si la persona aceptó la medición.
export function track(event: string, params: Record<string, string | number> = {}) {
  if (typeof window === "undefined") return;
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({ event, ...params });
}

const UTM_KEY = "utm-origen";

// Se queda en esta sesión y solo sale si la persona envía el formulario con su autorización.
export function guardarUtm() {
  try {
    const q = new URLSearchParams(window.location.search);
    const utm = Object.fromEntries(Array.from(q.entries()).filter(([k]) => k.startsWith("utm_")).map(([k, v]) => [k, v.slice(0, 200)]));
    if (Object.keys(utm).length) sessionStorage.setItem(UTM_KEY, JSON.stringify(utm));
  } catch { /* sin almacenamiento no hay UTM */ }
}

export function leerUtm(): Record<string, string> {
  try {
    return JSON.parse(sessionStorage.getItem(UTM_KEY) ?? "{}");
  } catch {
    return {};
  }
}
