import { useState } from "react";

const BRAND_IMAGES = [
  "WhatsApp Image 2026-02-18 at 12.27.40 PM.jpeg",
  "WhatsApp Image 2026-02-18 at 12.27.41 PM (1).jpeg",
  "WhatsApp Image 2026-02-18 at 12.27.41 PM (2).jpeg",
  "WhatsApp Image 2026-02-18 at 12.27.41 PM.jpeg",
  "WhatsApp Image 2026-02-18 at 12.27.42 PM (1).jpeg",
  "WhatsApp Image 2026-02-18 at 12.27.42 PM (2).jpeg",
  "WhatsApp Image 2026-02-18 at 12.27.42 PM (3).jpeg",
  "WhatsApp Image 2026-02-18 at 12.27.42 PM (4).jpeg",
  "WhatsApp Image 2026-02-18 at 12.27.42 PM.jpeg",
  "WhatsApp Image 2026-02-18 at 12.27.43 PM (1).jpeg",
  "WhatsApp Image 2026-02-18 at 12.27.43 PM (2).jpeg",
  "WhatsApp Image 2026-02-18 at 12.27.43 PM.jpeg",
];

const BRANDS = [
  "ARGOS",
  "CEMEX",
  "SIKA",
  "ETERNIT",
  "ACESCO",
  "MAPEI",
  "LOCTITE",
  "PEGACOR",
  "MORTEROS TEQUENDAMA",
  "PINTUCO",
  "GRIVAL",
  "TRUPER",
  "STANLEY",
  "DEWALT",
  "BOSCH",
  "BLACK+DECKER",
  "IRWIN",
  "HILTI",
  "INCOLMA",
  "PRETUL",
  "BAHCO",
  "CORONA",
  "PAVCO WAVIN",
  "HELBER",
  "ACUAVIVA",
  "GERFOR",
  "HOLCIM",
  "PERMA",
  "SAPOLIN",
  "LANCO",
  "PINTURAS TITO PABÓN",
  "3M",
  "TESA",
  "PHILLIPS",
  "OSRAM",
  "SCHNEIDER ELECTRIC",
  "GENERAL ELECTRIC",
];

function BrandImageCard({ fileName, index }: { fileName: string; index: number }) {
  const [imageLoaded, setImageLoaded] = useState(false);
  const src = `/img/${encodeURIComponent(fileName)}`;

  return (
    <article className="group flex h-[100px] w-[100px] max-h-[100px] max-w-[100px] shrink-0 overflow-hidden rounded-lg bg-white ring-1 ring-neutral-200 transition-shadow duration-300 hover:shadow-md">
      <div className="flex h-full w-full items-center justify-center p-2 relative bg-neutral-50">
        {!imageLoaded && (
          <div className="absolute inset-0 animate-pulse bg-gradient-to-r from-neutral-200 via-neutral-100 to-neutral-200 bg-[length:200%_100%]" />
        )}
        <img
          src={src}
          alt={`Logo de marca asociada ${index + 1}`}
          className={`max-h-[100px] max-w-[100px] w-full h-full object-contain transition-all duration-500 group-hover:scale-105 ${
            imageLoaded ? "opacity-100" : "opacity-0"
          }`}
          loading="lazy"
          decoding="async"
          onLoad={() => setImageLoaded(true)}
        />
      </div>
    </article>
  );
}

export default function Brands() {
  const marqueeItems = [...BRANDS, ...BRANDS];

  return (
    <section id="marcas" className="container py-12 md:py-16">
      <div className="mb-6">
        <h2 className="text-2xl font-semibold tracking-tight text-neutral-900 md:text-3xl">
          Marcas que manejamos
        </h2>
        <p className="mt-1 text-sm text-neutral-600">
          Trabajamos con referentes del mercado para asegurar calidad y disponibilidad.
        </p>
      </div>

      <div className="grid grid-cols-[repeat(2,minmax(100px,250px))] sm:grid-cols-[repeat(3,minmax(100px,250px))] md:grid-cols-[repeat(4,minmax(100px,250px))] gap-y-1.5 gap-x-0.5 sm:gap-y-2 md:gap-y-2 mb-8 justify-items-center justify-center">
        {BRAND_IMAGES.map((fileName, index) => (
          <BrandImageCard key={fileName} fileName={fileName} index={index} />
        ))}
      </div>

      <div className="relative">
        <div className="overflow-hidden marquee" aria-label="Carrusel de marcas">
          <ul className="marquee-track flex items-center gap-8 whitespace-nowrap py-2">
            {marqueeItems.map((b, idx) => (
              <li key={`${b}-${idx}`} className="shrink-0">
                <span className="block text-center uppercase text-sm sm:text-base md:text-lg font-semibold text-neutral-800 tracking-wide opacity-80 hover:opacity-100 transition-opacity">
                  {b}
                </span>
              </li>
            ))}
          </ul>
        </div>

        <div className="pointer-events-none absolute inset-y-0 left-0 w-12 bg-gradient-to-r from-cream to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-12 bg-gradient-to-l from-cream to-transparent" />
      </div>
    </section>
  );
}


