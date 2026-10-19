import { ClipboardList, Menu, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import WhatsAppIcon from "./WhatsAppIcon";
import { whatsAppHref } from "../lib/whatsapp";

const LINKS = [
  { href: "#inicio", label: "Inicio" },
  { href: "#productos", label: "Productos" },
  { href: "#marcas", label: "Marcas" },
  { href: "#contacto", label: "Contacto" },
];

type HeaderProps = {
  onOpenQuote: () => void;
  lineCount: number;
};

export default function Header({ onOpenQuote, lineCount }: HeaderProps) {
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
          <button
            type="button"
            onClick={onOpenQuote}
            className="relative inline-flex h-11 items-center gap-2 rounded-full border border-white/15 px-3 text-sm hover:border-accent"
          >
            <ClipboardList className="h-5 w-5" aria-hidden="true" />
            <span className="sr-only">
              Cotización, {lineCount} {lineCount === 1 ? "producto" : "productos"}
            </span>
            <span className="hidden sm:inline" aria-hidden="true">
              Cotización
            </span>
            <span
              aria-hidden="true"
              className="grid h-5 min-w-5 place-items-center rounded-full bg-accent px-1 text-xs font-semibold text-white"
            >
              {lineCount}
            </span>
          </button>

          <a
            href={advisoryHref}
            target="_blank"
            rel="noreferrer"
            className="hidden items-center gap-2 rounded-full bg-accent px-4 py-2.5 text-sm font-semibold text-white hover:bg-accent-hover md:inline-flex"
          >
            <WhatsAppIcon className="h-4 w-4" />
            WhatsApp
          </a>

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
