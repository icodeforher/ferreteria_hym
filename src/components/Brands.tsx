import { useEffect, useRef, useState } from "react";

const BRANDS = [
  "GRIVAL",
  "TRUPER",
  "STANLEY",
  "DEWALT",
  "BOSCH",
  "MAKITA",
  "BLACK+DECKER",
  "IRWIN",
  "KLEIN TOOLS",
  "TOTAL TOOLS",
  "SENCO",
  "MILWAUKEE",
  "HILTI",
  "METABO",
  "RIDGID",
  "DREMEL",
  "SKIL",
  "GLADIATOR",
  "GAMMA",
  "INCOLMA",
  "CROSSMASTER",
  "PRETUL",
  "BAHCO",
  "CORONA",
  "PAVCO WAVIN",
  "HELVEX",
  "FV",
  "MOEN",
  "PATTON",
  "TIGRE",
  "ROTOPLAS",
  "ACUAVIVA",
  "GERFOR",
  "AQUALIFE",
  "ITALGRIF",
  "VAINSA",
  "ARGOS",
  "HOLCIM",
  "CEMEX",
  "CEMENTOS SAN MARCOS",
  "SIKA",
  "ETERNIT",
  "ACESCO",
  "PIZZAREÑO",
  "MAPEI",
  "HENKEL",
  "LOCTITE",
  "DRYMIX",
  "PEGACOR",
  "MORTEROS BOGOTÁ",
  "PERMA",
  "PINTUCO",
  "SAPOLIN",
  "COLPISA",
  "LANCO",
  "SHERWIN-WILLIAMS",
  "PINTURAS TITO PABÓN",
  "HUNTER DOUGLAS",
  "HACEB",
  "CHALLENGER",
  "IMUSA",
  "3M",
  "TESA",
  "PHILLIPS",
  "OSRAM",
  "SCHNEIDER ELECTRIC",
  "ABB",
  "GENERAL ELECTRIC",
  "INDURAL",
  "FERREACEROS LA 80",
  "TERMOFLO",
  "KALYDON",
];

export default function Brands() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    let rafId: number;
    const step = () => {
      const el = scrollRef.current;
      if (!el) {
        rafId = requestAnimationFrame(step);
        return;
      }
      if (!isPaused) {
        el.scrollLeft += 0.5; // velocidad
        const maxLoop = el.scrollWidth / 2; // duplicamos contenido
        if (el.scrollLeft >= maxLoop) {
          el.scrollLeft -= maxLoop;
        }
      }
      rafId = requestAnimationFrame(step);
    };
    rafId = requestAnimationFrame(step);
    return () => cancelAnimationFrame(rafId);
  }, [isPaused]);

  const marqueeItems = [...BRANDS, ...BRANDS];

  return (
    <section id="marcas" className="container py-6 md:py-8">
      <div className="mb-6">
        <h2 className="text-2xl font-semibold tracking-tight text-neutral-900 md:text-3xl">
          Marcas que manejamos
        </h2>
        <p className="mt-1 text-sm text-neutral-600">
          Trabajamos con referentes del mercado para asegurar calidad y disponibilidad.
        </p>
      </div>

      <div className="relative">
        <div
          ref={scrollRef}
          className="overflow-hidden marquee"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          aria-label="Carrusel de marcas"
        >
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


