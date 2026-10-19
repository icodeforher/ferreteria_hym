import { track } from "@vercel/analytics";

export function trackSearch(text: string, matches: number) {
  const texto = text.trim().replace(/\s+/g, " ").slice(0, 80);
  if (!texto) return;
  track("busqueda", { texto, coincidencias: matches });
}

export function trackAdd(reference: string) {
  const referencia = reference.trim().slice(0, 40);
  if (!referencia) return;
  track("agregar", { referencia });
}

export function trackAdvisory() {
  track("whatsapp_asesoria");
}

export function trackQuoteList(lines: number) {
  track("lista_enviada", { lineas: lines });
}
