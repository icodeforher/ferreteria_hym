import { useEffect, useState } from "react";
type HeroProps = {
  onCTAClick?: () => void;
};

export default function Hero({ onCTAClick }: HeroProps) {
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(min-width: 1024px)");
    const handleChange = () => setIsDesktop(mediaQuery.matches);
    handleChange();
    if (mediaQuery.addEventListener) {
      mediaQuery.addEventListener("change", handleChange);
      return () => mediaQuery.removeEventListener("change", handleChange);
    } else {
      // Safari antiguo
      mediaQuery.addListener(handleChange);
      return () => mediaQuery.removeListener(handleChange);
    }
  }, []);
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-cream to-white">
      <div className="container grid gap-8 pt-16 pb-6 md:grid-cols-2 md:items-center md:pt-20 md:pb-6">
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-neutral-900 sm:text-4xl md:text-5xl">
            Todo para tu proyecto, al mejor precio
          </h1>
          <p className="mt-4 max-w-prose text-neutral-600">
            Herramientas, pinturas, arena, cemento, bloque, varilla y más. Todo de
            construcción para tu obra. Hacemos envíos y tomamos pedidos por WhatsApp.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href="#catalogo"
              className="inline-flex items-center justify-center rounded-md bg-wood px-5 py-3 text-white hover:brightness-110"
            >
              Ver catálogo
            </a>
            <button
              onClick={onCTAClick}
              className="inline-flex items-center justify-center rounded-md bg-white px-5 py-3 text-wood ring-1 ring-inset ring-wood/30 hover:bg-cream"
            >
              Pedir por WhatsApp
            </button>
          </div>
        </div>
        <div className="relative">
          <div className="aspect-[4/3] w-full overflow-hidden rounded-xl ring-1 ring-neutral-200 bg-white">
            <img
              src="/img/banner.png"
              alt="distribuidora de materiales h&m - banner"
              className="h-full w-full object-cover"
              loading={isDesktop ? "eager" : "lazy"}
              fetchPriority={isDesktop ? "high" : "auto"}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
