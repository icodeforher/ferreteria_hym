const PHOTO_CLASS =
  "absolute inset-x-0 -top-[20%] h-[140%] w-full max-w-none object-cover";

const BANDS = [
  {
    title: "La obra",
    text: "En El Maestro armamos la obra desde Chía. Materiales de construcción, herramientas y asesoría para levantar y terminar el proyecto.",
    alt: "Fachada industrial de metal oscuro con una franja naranja",
    desktop: "/img/desktop/fachada-industrial.webp",
    mobile: "/img/mobile/fachada-industrial-mobile.webp",
    width: 229,
    height: 287,
  },
  {
    title: "Cemento",
    text: "Cemento para estructura y mampostería en Chía. El punto de partida de la obra, con asesoría cercana para escoger lo que necesitas.",
    alt: "Sacos de cemento apilados frente a una estructura en obra",
    desktop: "/img/desktop/cemento.webp",
    mobile: "/img/mobile/cemento-mobile.webp",
    width: 191,
    height: 239,
  },
  {
    title: "Agregados",
    text: "Arena y grava para morteros y concretos. Agregados de obra para quien construye en Chía, Tabio, Cajicá y zonas cercanas.",
    alt: "Montículos de arena y grava en una planta de materiales",
    desktop: "/img/desktop/agregados.webp",
    mobile: "/img/mobile/agregados-mobile.webp",
    width: 191,
    height: 239,
  },
  {
    title: "Mampostería",
    text: "Bloque y ladrillo para muros y cerramientos. Mampostería de obra desde nuestra ferretería en Chía.",
    alt: "Bloques de concreto y ladrillos apilados en obra",
    desktop: "/img/desktop/ladrillos.webp",
    mobile: "/img/mobile/ladrillos-mobile.webp",
    width: 191,
    height: 239,
  },
  {
    title: "Tubería",
    text: "Tubería para desagües y redes. Materiales de plomería e infraestructura listos para la obra en Chía.",
    alt: "Tubería corrugada y tubos en estantería de bodega",
    desktop: "/img/desktop/tuberia-industrial.webp",
    mobile: "/img/mobile/tuberia-industrial-mobile.webp",
    width: 229,
    height: 287,
  },
  {
    title: "Instalaciones",
    text: "Accesorios para la red de agua. Plomería y conexiones para instalar con la misma asesoría de la tienda.",
    alt: "Accesorios blancos de plomería en estantería",
    desktop: "/img/desktop/tuberias.webp",
    mobile: "/img/mobile/tuberias-mobile.webp",
    width: 176,
    height: 220,
  },
  {
    title: "Madera",
    text: "Madera para formaleta, cubierta y obra. Madera de construcción para quien levanta en Chía y alrededores.",
    alt: "Tablones de madera apilados en bodega",
    desktop: "/img/desktop/madera.webp",
    mobile: "/img/mobile/madera-mobile.webp",
    width: 176,
    height: 220,
  },
  {
    title: "Herramientas",
    text: "Herramienta para el trabajo en la obra. Ferretería en Chía con lo que el maestro necesita en el día a día.",
    alt: "Pasillo de ferretería con herramientas colgadas",
    desktop: "/img/desktop/pasillo-herramientas.webp",
    mobile: "/img/mobile/pasillo-herramientas-mobile.webp",
    width: 229,
    height: 287,
  },
  {
    title: "Taller",
    text: "Medida, fijación y corte en el banco. Herramientas de taller para armar, ajustar y terminar el trabajo.",
    alt: "Taladro, martillo y flexómetro sobre un banco de trabajo",
    desktop: "/img/desktop/herramientas.webp",
    mobile: "/img/mobile/herramientas-mobile.webp",
    width: 176,
    height: 220,
  },
  {
    title: "Acabados",
    text: "Pintura para cerrar la obra. Acabados y color para entregar el proyecto con el mismo acompañamiento.",
    alt: "Brocha, rodillo y latas de pintura abiertas",
    desktop: "/img/desktop/pinturas.webp",
    mobile: "/img/mobile/pinturas-mobile.webp",
    width: 176,
    height: 220,
  },
];

export default function Presence() {
  return (
    <div id="recorrido">
      {BANDS.map((band) => (
        <section
          key={band.title}
          className="relative isolate min-h-svh overflow-hidden bg-graphite-950 text-white"
        >
          <picture>
            <source media="(min-width: 1024px)" srcSet={band.desktop} />
            <img
              src={band.mobile}
              alt={band.alt}
              width={band.width}
              height={band.height}
              data-parallax=""
              className={PHOTO_CLASS}
              loading="lazy"
              decoding="async"
            />
          </picture>
          <div className="absolute inset-0 bg-gradient-to-t from-graphite-950/80 via-graphite-950/20 to-graphite-950/10" />
          <div className="container relative flex min-h-svh items-end pb-24 md:pb-28">
            <div className="max-w-xl">
              <h2 className="text-6xl leading-none uppercase sm:text-7xl md:text-8xl">{band.title}</h2>
              <p className="mt-4 max-w-lg text-base text-white/80 sm:text-lg">{band.text}</p>
            </div>
          </div>
        </section>
      ))}
    </div>
  );
}
