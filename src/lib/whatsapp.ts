import type { QuoteLine } from "../types";

export const WHATSAPP_NUMBER = "573124954231";

export function quoteMessage(items: QuoteLine[]) {
  const lines = items.map((item) => {
    const reference = item.reference ? ` (${item.reference})` : "";
    return `- ${item.name}${reference} × ${item.quantity}`;
  });
  return `Hola, quiero cotizar estos materiales:\n${lines.join("\n")}`;
}

export function whatsAppHref(message: string) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}
