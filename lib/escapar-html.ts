const ENTIDADES: Record<string, string> = { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' };

export function escaparHtml(texto: string): string {
    return texto.replace(/[&<>"']/g, (c) => ENTIDADES[c]);
}
