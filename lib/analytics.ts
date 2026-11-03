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
