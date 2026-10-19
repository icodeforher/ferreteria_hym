import { trackAdvisory } from "../lib/analytics";
import { whatsAppHref } from "../lib/whatsapp";
import WhatsAppIcon from "./WhatsAppIcon";

const HREF = whatsAppHref("Hola, quiero asesoría sobre materiales para una obra.");

export default function WhatsAppFloat() {
  return (
    <a
      href={HREF}
      target="_blank"
      rel="noreferrer"
      onClick={trackAdvisory}
      className="fixed right-5 bottom-5 z-50 inline-flex items-center gap-2 rounded-full bg-accent px-4 py-3 text-sm font-semibold text-white hover:bg-accent-hover"
    >
      <WhatsAppIcon className="h-4 w-4" />
      WhatsApp
    </a>
  );
}
