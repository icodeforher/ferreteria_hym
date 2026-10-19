const BANDS = [
  {
    src: "/img/arquitectura-industrial.webp",
    title: "La obra",
    text: "En El Maestro armamos la obra desde Chía. Materiales de construcción, herramientas y asesoría para levantar y terminar el proyecto.",
    alt: "Fachada industrial de metal oscuro con una franja naranja",
  },
  {
    src: "/img/sacos-cemento.webp",
    title: "Cemento",
    text: "Cemento para estructura y mampostería en Chía. El punto de partida de la obra, con asesoría cercana para escoger lo que necesitas.",
    alt: "Sacos de cemento apilados frente a una estructura en obra",
  },
  {
    src: "/img/agregados-obra.webp",
    title: "Agregados",
    text: "Arena y grava para morteros y concretos. Agregados de obra para quien construye en Chía, Tabio, Cajicá y zonas cercanas.",
    alt: "Montículos de arena y grava en una planta de materiales",
  },
  {
    src: "/img/obra-estructura.webp",
    title: "Estructura",
    text: "Varilla para el refuerzo de la obra. Acero de construcción pensado para fundidas, columnas y losas en Chía.",
    alt: "Varilla y estructura de concreto en una obra al atardecer",
  },
  {
    src: "/img/perfiles-acero.webp",
    title: "Acero",
    text: "Perfiles para la estructura metálica. Acero de ferretería para quien arma cubierta, refuerzo y metalistería.",
    alt: "Perfiles de acero apilados en estantería de bodega",
  },
  {
    src: "/img/ladrillo-bloque.webp",
    title: "Mampostería",
    text: "Bloque y ladrillo para muros y cerramientos. Mampostería de obra desde nuestra ferretería en Chía.",
    alt: "Bloques de concreto y ladrillos apilados en obra",
  },
  {
    src: "/img/tuberia-industrial.webp",
    title: "Tubería",
    text: "Tubería para desagües y redes. Materiales de plomería e infraestructura listos para la obra en Chía.",
    alt: "Tubería corrugada y tubos en estantería de bodega",
  },
  {
    src: "/img/tuberias-plomeria.webp",
    title: "Instalaciones",
    text: "Accesorios para la red de agua. Plomería y conexiones para instalar con la misma asesoría de la tienda.",
    alt: "Accesorios blancos de plomería en estantería",
  },
  {
    src: "/img/madera-construccion.webp",
    title: "Madera",
    text: "Madera para formaleta, cubierta y obra. Madera de construcción para quien levanta en Chía y alrededores.",
    alt: "Tablones de madera apilados en bodega",
  },
  {
    src: "/img/pasillo-herramientas.webp",
    title: "Herramientas",
    text: "Herramienta para el trabajo en la obra. Ferretería en Chía con lo que el maestro necesita en el día a día.",
    alt: "Pasillo de ferretería con herramientas colgadas",
  },
  {
    src: "/img/herramientas-taller.webp",
    title: "Taller",
    text: "Medida, fijación y corte en el banco. Herramientas de taller para armar, ajustar y terminar el trabajo.",
    alt: "Taladro, martillo y flexómetro sobre un banco de trabajo",
  },
  {
    src: "/img/pinturas-acabados.webp",
    title: "Acabados",
    text: "Pintura para cerrar la obra. Acabados y color para entregar el proyecto con el mismo acompañamiento.",
    alt: "Brocha, rodillo y latas de pintura abiertas",
  },
];

export default function Presence() {
  return (
    <div id="recorrido">
      {BANDS.map((band) => (
        <section
          key={band.src}
          className="relative isolate min-h-svh overflow-hidden bg-graphite-950 text-white"
        >
          <img
            src={band.src}
            alt={band.alt}
            width={1600}
            height={1067}
            data-parallax=""
            className="absolute inset-x-0 -top-[20%] h-[140%] w-full max-w-none object-cover"
            loading="lazy"
            decoding="async"
          />
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
