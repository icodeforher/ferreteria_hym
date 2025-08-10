import { useState } from "react";

type HeaderProps = {
  businessName?: string;
  phoneNumber?: string;
};

export default function Header({
  businessName = "Ferretería",
  phoneNumber,
}: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false);

  const whatsappHref = phoneNumber
    ? `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
        "Hola! Quiero realizar un pedido."
      )}`
    : undefined;

  return (
    <header className="sticky top-0 z-40 w-full border-b border-neutral-200 bg-white/80 backdrop-blur">
      <div className="container flex h-16 items-center justify-between">
        <a href="#" className="flex items-center gap-2">
          <div className="h-9 w-9 rounded-md bg-brick text-white grid place-items-center font-bold text-xs">
            H&M
          </div>
          <span className="font-semibold tracking-tight">{businessName}</span>
        </a>

        <nav className="hidden md:flex items-center gap-6 text-sm">
          <a
            href="#catalogo"
            className="text-neutral-600 hover:text-neutral-900"
          >
            Catálogo
          </a>
          <a
            href="/contacto.html"
            className="text-neutral-600 hover:text-neutral-900"
          >
            Contacto
          </a>
          {whatsappHref && (
            <a
              href={whatsappHref}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-md bg-brick px-3 py-2 text-white hover:bg-brick-700"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="h-5 w-5"
              >
                <path d="M20.52 3.48A11.76 11.76 0 0012.06 0C5.5 0 .15 5.34.15 11.86c0 2.08.55 4.13 1.59 5.93L0 24l6.4-1.67a11.84 11.84 0 005.66 1.45h.01c6.55 0 11.9-5.35 11.9-11.88 0-3.18-1.24-6.17-3.45-8.42zM12.06 21.2a9.3 9.3 0 01-4.75-1.3l-.34-.2-3.8 1 1.02-3.7-.22-.38a9.3 9.3 0 01-1.37-4.86c0-5.16 4.21-9.37 9.46-9.37 2.53 0 4.91.98 6.7 2.77a9.4 9.4 0 012.77 6.69c0 5.16-4.2 9.35-9.47 9.35zm5.17-7.03c-.28-.14-1.63-.8-1.88-.89-.25-.09-.43-.14-.6.14-.17.28-.69.89-.85 1.07-.15.17-.3.2-.57.07-.28-.14-1.17-.43-2.23-1.37-.82-.73-1.37-1.64-1.53-1.92-.16-.28-.02-.43.12-.57.12-.12.28-.3.43-.46.14-.17.2-.28.3-.47.1-.2.05-.35-.02-.49-.07-.14-.6-1.46-.83-2-.22-.53-.44-.46-.6-.46-.15 0-.33-.02-.5-.02-.18 0-.46.07-.7.35-.24.28-.92.89-.92 2.17 0 1.28.95 2.51 1.08 2.68.14.17 1.86 2.84 4.5 3.98.63.27 1.12.44 1.5.56.63.2 1.2.17 1.65.1.5-.07 1.63-.66 1.86-1.3.23-.64.23-1.18.16-1.3-.07-.12-.26-.2-.54-.34z" />
              </svg>
              WhatsApp
            </a>
          )}
        </nav>

        <button
          className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-md hover:bg-neutral-100"
          onClick={() => setIsOpen((v) => !v)}
          aria-label="Abrir menú"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="h-6 w-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        </button>
      </div>

      {isOpen && (
        <div className="md:hidden border-t border-neutral-200 bg-white">
          <div className="container py-3 flex flex-col gap-2">
            <a href="#catalogo" className="py-2 text-neutral-700">
              Catálogo
            </a>
            <a href="/contacto.html" className="py-2 text-neutral-700">
              Contacto
            </a>
            {whatsappHref && (
              <a
                href={whatsappHref}
                target="_blank"
                rel="noreferrer"
                className="py-2 text-brick font-medium"
              >
                WhatsApp
              </a>
            )}
          </div>
        </div>
      )}
    </header>
  );
}
