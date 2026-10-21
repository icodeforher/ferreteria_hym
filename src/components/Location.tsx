import { trackAdvisory } from "../lib/analytics";
import { whatsAppHref } from "../lib/whatsapp";
import WhatsAppIcon from "./WhatsAppIcon";

const HREF = whatsAppHref("Hola, quiero asesoría sobre materiales para una obra.");

export default function Location() {
  return (
    <section id="contacto" className="bg-graphite-950 text-white">
      <div className="grid lg:min-h-svh lg:grid-cols-[minmax(18rem,0.85fr)_1.15fr]">
        <div className="flex flex-col justify-center px-5 py-16 sm:px-8 lg:px-16">
          <p className="text-xs font-semibold tracking-[0.22em] text-accent uppercase">Ubicación</p>
          <h2 className="mt-3 text-5xl leading-none uppercase md:text-6xl">Carrera 10 #3-42</h2>
          <p className="mt-4 text-white/75">Chía, Cundinamarca</p>
          <p className="mt-6 text-sm text-white/75">Lun a vie: 7:00 a. m. – 5:00 p. m.</p>
          <p className="text-sm text-white/75">Sáb: 7:00 a. m. – 1:00 p. m.</p>
          <a
            href={HREF}
            target="_blank"
            rel="noreferrer"
            onClick={trackAdvisory}
            className="mt-8 inline-flex w-fit items-center gap-2 rounded-full bg-accent px-5 py-3 text-sm font-semibold hover:bg-accent-hover"
          >
            <WhatsAppIcon className="h-4 w-4" />
            Hablar por WhatsApp
          </a>
        </div>
        <div className="h-80 lg:h-auto lg:min-h-svh">
          <iframe
            title="Mapa - Distribuidora de materiales el maestro"
            src="https://www.google.com/maps?q=4.8529977,-74.062369&z=15&output=embed"
            className="h-full w-full border-0"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </section>
  );
}
