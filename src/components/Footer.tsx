import { trackAdvisory } from "../lib/analytics";
import { WHATSAPP_NUMBER } from "../lib/whatsapp";

const LINKS = [
  { href: "#inicio", label: "Inicio" },
  { href: "#recorrido", label: "Recorrido" },
  { href: "#marcas", label: "Marcas" },
];

export default function Footer() {
  return (
    <footer className="bg-graphite-950 text-white">
      <div className="container grid gap-10 py-16 md:grid-cols-2">
        <div>
          <h2 className="text-5xl leading-none uppercase">Materiales para tu obra</h2>
          <p className="mt-4 max-w-md text-white/70">
            Ferretería en Chía. Materiales, herramientas y asesoría en tienda y por WhatsApp.
          </p>
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
            <a
              className="mt-3 inline-block underline"
              href={`https://wa.me/${WHATSAPP_NUMBER}`}
              onClick={trackAdvisory}
            >
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
      <div className="border-t border-white/10">
        <p className="container py-4 pr-36 text-xs text-white/50">
          © {new Date().getFullYear()} Distribuidora de Materiales El Maestro.
        </p>
      </div>
    </footer>
  );
}
