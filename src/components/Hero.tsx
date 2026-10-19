import { ArrowRight, Headset, Search, Store, Wrench, X } from "lucide-react";
import { useEffect, useId, useRef, type ReactNode } from "react";

const NOTES = [
  { icon: Headset, label: "Asesoría por WhatsApp" },
  { icon: Wrench, label: "Materiales y herramientas" },
  { icon: Store, label: "Atención en tienda" },
  { icon: ArrowRight, label: "Arma tu cotización" },
];

type HeroProps = {
  query: string;
  onQueryChange: (value: string) => void;
  onSearch: () => void;
  onClear: () => void;
  results: ReactNode;
  list: ReactNode;
};

export default function Hero({ query, onQueryChange, onSearch, onClear, results, list }: HeroProps) {
  const searchId = useId();
  const sectionRef = useRef<HTMLElement>(null);
  const photoRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const photo = photoRef.current;
    if (!section || !photo) return;

    const desktop = window.matchMedia("(min-width: 1024px)");
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)");
    let frame = 0;

    const update = () => {
      frame = 0;
      if (!desktop.matches || reduced.matches) {
        photo.style.transform = "";
        return;
      }
      const maxShift = section.offsetHeight * 0.2;
      const shift = Math.min(Math.max(window.scrollY, 0) * 0.35, maxShift);
      photo.style.transform = `translate3d(0, ${shift}px, 0)`;
    };

    const onScroll = () => {
      if (frame) return;
      frame = window.requestAnimationFrame(update);
    };

    const onChange = () => update();

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    desktop.addEventListener("change", onChange);
    reduced.addEventListener("change", onChange);

    return () => {
      window.removeEventListener("scroll", onScroll);
      desktop.removeEventListener("change", onChange);
      reduced.removeEventListener("change", onChange);
      if (frame) window.cancelAnimationFrame(frame);
      photo.style.transform = "";
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      id="inicio"
      className="relative isolate min-h-[78vh] overflow-hidden bg-graphite-950 text-white"
    >
      <img
        ref={photoRef}
        src="/img/hero-obra.jpg"
        alt="Obra en construcción al atardecer"
        width={2172}
        height={724}
        className="absolute inset-x-0 -top-[20%] h-[140%] w-full max-w-none object-cover"
        fetchPriority="high"
        decoding="async"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-graphite-950/92 via-graphite-950/55 to-graphite-950/20" />
      <div className="container relative flex min-h-[78vh] flex-col justify-end pt-16 pb-28 md:pt-24 lg:pb-16">
        <p className="text-xs font-semibold tracking-[0.22em] text-accent uppercase">
          Materiales, herramientas y asesoría
        </p>
        <h1 className="mt-4 max-w-4xl text-6xl leading-[0.88] text-white uppercase sm:text-7xl md:text-8xl">
          Construimos
          <span className="block text-accent">tus ideas</span>
        </h1>
        <p className="mt-5 max-w-xl text-base text-white/80 sm:text-lg">
          Materiales y herramientas para tu obra, con asesoría cercana en Chía, Tabio, Cajicá, Yerbabuena y zonas cercanas.
        </p>
        <div className="mt-8 grid items-start gap-4 lg:grid-cols-[minmax(0,1.15fr)_minmax(18rem,0.85fr)]">
          <div className="lg:flex lg:h-80 lg:min-h-0 lg:flex-col">
            <form
              id="busqueda-banner"
              className="flex shrink-0 items-center gap-2 rounded-full bg-white p-2 text-ink"
              onSubmit={(event) => {
                event.preventDefault();
                onSearch();
              }}
            >
              <label htmlFor={searchId} className="sr-only">
                ¿Qué material necesitas?
              </label>
              <Search className="ml-2 h-5 w-5 shrink-0 text-muted" aria-hidden="true" />
              <input
                id={searchId}
                value={query}
                onChange={(event) => onQueryChange(event.target.value)}
                placeholder="¿Qué material necesitas?"
                className="w-full bg-transparent px-1 py-2 text-base outline-none"
              />
              {query.trim() && (
                <button
                  type="button"
                  onClick={onClear}
                  aria-label="Limpiar búsqueda"
                  className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full text-muted hover:bg-stone-100"
                >
                  <X className="h-5 w-5" />
                </button>
              )}
              <button
                type="submit"
                className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-accent text-white hover:bg-accent-hover"
                aria-label="Buscar materiales"
              >
                <ArrowRight className="h-5 w-5" />
              </button>
            </form>
            <div className="mt-4 hidden min-h-0 flex-1 overflow-y-auto lg:block">{results}</div>
          </div>
          <div className="hidden h-80 min-h-0 flex-col overflow-hidden rounded-3xl border border-line bg-white p-5 text-ink lg:flex">
            {list}
          </div>
        </div>
      </div>
      <div className="absolute inset-x-0 bottom-0">
        <ul className="container grid grid-cols-2 gap-3 pb-6 lg:grid-cols-4">
          {NOTES.map((note) => (
            <li key={note.label} className="flex items-center gap-3 text-sm text-white/85">
              <note.icon className="h-5 w-5 text-accent" aria-hidden="true" />
              {note.label}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
