import { trackAdvisory } from "../lib/analytics";
import { whatsAppHref } from "../lib/whatsapp";
import WhatsAppIcon from "./WhatsAppIcon";

export default function Trust() {
  const href = whatsAppHref("Hola, quiero asesoría sobre materiales para una obra.");

  return (
    <section className="bg-graphite-950 text-white">
      <div className="grid md:grid-cols-2">
        <img
          src="/img/desktop/hero-parallax.webp"
          alt=""
          width={1536}
          height={247}
          loading="lazy"
          decoding="async"
          className="h-72 w-full object-cover md:h-full"
        />
        <div className="flex flex-col justify-center px-5 py-16 sm:px-8 lg:px-16">
          <p className="text-xs font-semibold tracking-[0.22em] text-accent uppercase">
            Asesoría
          </p>
          <h2 className="mt-3 max-w-md text-5xl leading-none uppercase md:text-6xl">
            Hablemos de tu obra
          </h2>
          <p className="mt-5 max-w-md text-white/75">
            Cuéntanos qué materiales necesitas. Te asesoramos por WhatsApp.
          </p>
          <a
            href={href}
            target="_blank"
            rel="noreferrer"
            onClick={trackAdvisory}
            className="mt-8 inline-flex w-fit items-center gap-2 rounded-full bg-accent px-5 py-3 text-sm font-semibold hover:bg-accent-hover"
          >
            <WhatsAppIcon className="h-4 w-4" />
            Hablar por WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
