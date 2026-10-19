import { Menu, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import WhatsAppIcon from "./WhatsAppIcon";
import { trackAdvisory } from "../lib/analytics";
import { whatsAppHref } from "../lib/whatsapp";

const LINKS = [
  { href: "#inicio", label: "Inicio" },
  { href: "#marcas", label: "Marcas" },
  { href: "#contacto", label: "Contacto" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const menuButton = useRef<HTMLButtonElement>(null);
  const advisoryHref = whatsAppHref(
    "Hola, quiero asesoría sobre materiales para una obra.",
  );

  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
        menuButton.current?.focus();
      }
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-graphite-950 text-white">
      <div className="container flex h-[4.5rem] items-center gap-4 md:h-20">
        <a href="#inicio" className="shrink-0">
          <img
            src="/img/logo_web_1024.png"
            alt="El Maestro Ferretería"
            width={1024}
            height={1024}
            className="h-12 w-auto object-contain md:h-14"
          />
        </a>

        <nav className="hidden items-center gap-5 text-sm text-white/75 lg:flex" aria-label="Principal">
          {LINKS.map((link) => (
            <a key={link.href} href={link.href} className="hover:text-white">
              {link.label}
            </a>
          ))}
        </nav>

        <div className="ml-auto flex items-center gap-3">
          <p className="hidden text-right leading-none md:block" aria-hidden="true">
            <span className="block font-display text-2xl font-extrabold uppercase tracking-wide md:text-3xl">
              El Maestro
            </span>
            <span className="mt-1 block text-[0.7rem] font-semibold tracking-[0.28em] text-accent uppercase">
              Ferretería
            </span>
          </p>

          <button
            ref={menuButton}
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center rounded-full hover:bg-white/10 lg:hidden"
            aria-expanded={open}
            aria-controls="menu-movil"
            aria-label={open ? "Cerrar menú" : "Abrir menú"}
            onClick={() => setOpen((value) => !value)}
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {open && (
        <div id="menu-movil" className="border-t border-white/10 bg-graphite-900 lg:hidden">
          <div className="container flex flex-col gap-2 py-4">
            {LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="rounded-lg px-2 py-3 text-white/90 hover:bg-white/10"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <a
              href={advisoryHref}
              target="_blank"
              rel="noreferrer"
              onClick={trackAdvisory}
              className="inline-flex items-center justify-center gap-2 rounded-full bg-accent px-4 py-3 font-semibold"
            >
              <WhatsAppIcon className="h-4 w-4" />
              Escribir por WhatsApp
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
