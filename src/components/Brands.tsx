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

function BrandImage({ fileName }: { fileName: string }) {
  const [failed, setFailed] = useState(false);
  if (failed) return null;
  return (
    <img
      src={`/img/${encodeURIComponent(fileName)}`}
      alt=""
      width={100}
      height={100}
      loading="lazy"
      decoding="async"
      className="h-16 w-16 shrink-0 object-contain"
      onError={() => setFailed(true)}
    />
  );
}

export default function Brands() {
  const names = [...BRANDS, ...BRANDS];

  return (
    <section id="marcas" className="border-y border-line bg-white py-12">
      <div className="container">
        <h2 className="text-4xl text-ink uppercase md:text-5xl">Marcas</h2>
        <div className="mt-6 flex gap-4 overflow-x-auto pb-2">
          {BRAND_IMAGES.map((fileName) => (
            <div
              key={fileName}
              className="grid h-24 w-24 shrink-0 place-items-center rounded-2xl bg-stone-100"
            >
              <BrandImage fileName={fileName} />
            </div>
          ))}
        </div>
      </div>
      <div className="marquee mt-8 border-t border-line" aria-label="Carrusel de marcas">
        <ul className="marquee-track flex w-max items-center gap-10 py-5">
          {names.map((brand, index) => (
            <li key={`${brand}-${index}`} className="font-display text-3xl tracking-wide text-graphite-800 uppercase">
              {brand}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
