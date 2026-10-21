import { ArrowRight, Headset, Store, Wrench } from "lucide-react";

const NOTES = [
  { icon: Headset, label: "Asesoría por WhatsApp" },
  { icon: Wrench, label: "Materiales y herramientas" },
  { icon: Store, label: "Atención en tienda" },
  { icon: ArrowRight, label: "Arma tu cotización" },
];

const PHOTO_CLASS =
  "absolute inset-0 h-full w-full max-w-none object-cover object-[50%_45%]";

export default function Hero() {
  return (
    <section id="inicio" className="relative isolate min-h-[78vh] overflow-hidden bg-graphite-950 text-white">
      <picture>
        <source
          media="(min-width: 1024px)"
          srcSet="/img/desktop/hero-parallax.webp"
          width={1920}
          height={1080}
        />
        <img
          src="/img/mobile/hero-parallax-mobile.webp"
          alt="Obra en construcción al atardecer"
          width={720}
          height={1280}
          data-parallax=""
          className={PHOTO_CLASS}
          fetchPriority="high"
          decoding="async"
        />
      </picture>
      <div className="absolute inset-0 bg-gradient-to-r from-graphite-950/92 via-graphite-950/55 to-graphite-950/20" />
      <div className="container relative flex min-h-[78vh] flex-col justify-end pt-16 pb-52 md:pt-24 md:pb-40">
        <p className="text-xs font-semibold tracking-[0.22em] text-accent uppercase">Ferretería en Chía</p>
        <h1 className="mt-4 max-w-4xl text-6xl leading-[0.88] text-white uppercase sm:text-7xl md:text-8xl">
          Construimos
          <span className="block text-accent">tus ideas</span>
        </h1>
        <p className="mt-5 max-w-xl text-base text-white/80 sm:text-lg">
          Materiales y herramientas para tu obra, con asesoría cercana en Chía, Tabio, Cajicá, Yerbabuena y zonas
          cercanas.
        </p>
      </div>
      <div className="absolute inset-x-0 bottom-0">
        <div className="container pb-20">
          <a href="#contacto" className="mb-4 inline-flex text-sm font-semibold underline underline-offset-4">
            Cómo llegar
          </a>
          <ul className="grid grid-cols-2 gap-3 lg:grid-cols-4">
            {NOTES.map((note) => (
              <li key={note.label} className="flex items-center gap-3 text-sm text-white/85">
                <note.icon className="h-5 w-5 shrink-0 text-accent" aria-hidden="true" />
                {note.label}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
