import WhatsAppIcon from "./WhatsAppIcon";
import { WHATSAPP_NUMBER, quoteMessage, whatsAppHref } from "../lib/whatsapp";
import { useQuote } from "../features/quote/quote-context";

const LINKS = [
  { href: "#inicio", label: "Inicio" },
  { href: "#productos", label: "Productos" },
  { href: "#marcas", label: "Marcas" },
];

export default function Footer() {
  const { items } = useQuote();
  const href = items.length > 0 ? whatsAppHref(quoteMessage(items)) : "#inicio";

  return (
    <footer id="contacto" className="bg-graphite-950 text-white">
      <div className="container grid gap-10 py-16 md:grid-cols-2">
        <div>
          <h2 className="text-5xl leading-none uppercase">Cotiza tus materiales</h2>
          <p className="mt-4 max-w-md text-white/70">
            Arma la lista y envíala por WhatsApp. El equipo te confirma precio y existencia.
          </p>
          <a
            href={href}
            target={items.length > 0 ? "_blank" : undefined}
            rel={items.length > 0 ? "noreferrer" : undefined}
            className="mt-6 inline-flex items-center gap-2 rounded-full bg-accent px-5 py-3 text-sm font-semibold hover:bg-accent-hover"
          >
            <WhatsAppIcon className="h-4 w-4" />
            Pedir cotización
          </a>
        </div>
        <div className="grid gap-8 sm:grid-cols-2">
          <div className="text-sm text-white/75">
            <h3 className="font-sans text-base font-semibold text-white">Contacto</h3>
            <p className="mt-3">WhatsApp: +57 312 495 4231</p>
            <p className="mt-1">
              Correo:{" "}
              <a className="underline" href="mailto:distrimaestrosas@gmail.com">
                distrimaestrosas@gmail.com
              </a>
            </p>
            <p className="mt-1">
              Instagram:{" "}
              <a
                className="underline"
                href="https://www.instagram.com/el_maestroferreteria/"
                target="_blank"
                rel="noreferrer"
              >
                @el_maestroferreteria
              </a>
            </p>
            <p className="mt-1">Dirección: Carrera 10 #3-42, Chía</p>
            <p className="mt-3">Lun a vie: 9:00 a. m. – 6:30 p. m.</p>
            <p>Sáb: 9:00 a. m. – 1:00 p. m.</p>
            <a className="mt-3 inline-block underline" href={`https://wa.me/${WHATSAPP_NUMBER}`}>
              Abrir WhatsApp
            </a>
          </div>
          <nav aria-label="Secundaria" className="flex flex-col gap-2 text-sm">
            {LINKS.map((link) => (
              <a key={link.href} href={link.href} className="text-white/75 hover:text-white">
                {link.label}
              </a>
            ))}
          </nav>
        </div>
      </div>
      <div className="container pb-12">
        <h3 className="font-sans text-base font-semibold">Ubicación</h3>
        <p className="mt-2 text-sm text-white/75">Carrera 10 #3-42, Chía</p>
        <div className="mt-4 h-72 overflow-hidden rounded-2xl bg-graphite-900 md:h-80">
          <iframe
            title="Mapa - Distribuidora de materiales el maestro"
            src="https://www.google.com/maps?q=4.8646,-74.0522&z=15&output=embed"
            className="h-full w-full border-0"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
      <div className="border-t border-white/10">
        <p className="container py-4 text-xs text-white/50">
          © {new Date().getFullYear()} Distribuidora de Materiales El Maestro.
        </p>
      </div>
    </footer>
  );
}
