import { useEffect, useState } from "react";
type HeroProps = {
  onCTAClick?: () => void;
};

export default function Hero({ onCTAClick }: HeroProps) {
  const [isDesktop, setIsDesktop] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);

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
      <div className="container grid gap-8 pt-20 pb-12 md:grid-cols-2 md:items-center md:pt-24 md:pb-16">
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-neutral-900 sm:text-4xl md:text-5xl">
            Ferretería y Materiales de Construcción en Chía
          </h1>
          <p className="mt-4 max-w-prose text-neutral-600">
            Tu distribuidora de materiales en Chía, Cundinamarca. Venta de arena, cemento, bloque, varilla, tubería, tornillería, herramientas y pinturas para tu obra. Envíos a domicilio. Pedidos rápidos por WhatsApp.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href="#catalogo"
              className="inline-flex items-center justify-center rounded-xl bg-yellow px-5 py-3 text-black hover:bg-yellow/90 transition-all duration-200"
            >
              Ver catálogo
            </a>
            <button
              onClick={onCTAClick}
              className="inline-flex items-center justify-center rounded-xl bg-white px-5 py-3 text-wood ring-1 ring-inset ring-wood/30 hover:bg-cream transition-all duration-200"
            >
              Pedir por WhatsApp
            </button>
          </div>
        </div>
        <div className="relative">
          <div className="aspect-[4/3] w-full overflow-hidden rounded-2xl ring-1 ring-neutral-200 bg-neutral-100 relative">
            {!imageLoaded && (
              <div className="absolute inset-0 animate-pulse bg-gradient-to-r from-neutral-200 via-neutral-100 to-neutral-200 bg-[length:200%_100%]" />
            )}
            <img
              src="/img/argos.jpeg"
              alt="distribuidora de materiales el maestro - banner"
              className={`h-full w-full object-cover transition-opacity duration-500 ${
                imageLoaded ? 'opacity-100' : 'opacity-0'
              }`}
              loading={isDesktop ? "eager" : "lazy"}
              fetchPriority={isDesktop ? "high" : "auto"}
              decoding="async"
              onLoad={() => setImageLoaded(true)}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
