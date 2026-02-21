import Header from "./components/Header";
import Hero from "./components/Hero";
import Catalog from "./components/Catalog";
import Brands from "./components/Brands";
import Footer from "./components/Footer";
import { demoProducts } from "./data/products";
import { useEffect } from "react";

const PHONE_NUMBER = "573124954231";

function App() {
  const openWhatsApp = (message?: string) => {
    const base = `https://wa.me/${PHONE_NUMBER}`;
    const href = message
      ? `${base}?text=${encodeURIComponent(message)}`
      : `${base}?text=${encodeURIComponent("Hola! Quiero hacer un pedido.")}`;
    window.open(href, "_blank");
  };

  useEffect(() => {
    const scrollToElement = (el: Element) => {
      // Doble rAF: esperar a que el layout esté calculado (crítico en móviles al abrir desde QR).
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          el.scrollIntoView({ behavior: "smooth", block: "start" });
        });
      });
    };

    const scrollToHash = () => {
      const hash = window.location.hash;
      if (!hash) return false;
      const el = document.querySelector(hash);
      if (el) {
        scrollToElement(el);
        return true;
      }
      return false;
    };

    // Al cargar con hash (ej. QR con #catalogo): esperar al DOM y luego hacer scroll.
    const hash = window.location.hash;
    let observer: MutationObserver | null = null;
    let safetyId: ReturnType<typeof setTimeout> | null = null;

    if (hash) {
      if (!scrollToHash()) {
        observer = new MutationObserver(() => {
          const el = document.querySelector(hash);
          if (el) {
            observer?.disconnect();
            if (safetyId != null) clearTimeout(safetyId);
            scrollToElement(el);
          }
        });
        observer.observe(document.body, { childList: true, subtree: true });
        safetyId = setTimeout(() => observer?.disconnect(), 5000);
      }
    }

    window.addEventListener("hashchange", scrollToHash);
    return () => {
      window.removeEventListener("hashchange", scrollToHash);
      observer?.disconnect();
      if (safetyId != null) clearTimeout(safetyId);
    };
  }, []);


  return (
    <div className="min-h-full bg-white">
      <Header businessName="distribuidora de materiales el maestro." phoneNumber={PHONE_NUMBER} />
      <main role="main" aria-label="Contenido principal">
        <Hero onCTAClick={() => openWhatsApp()} />
        <Brands />
        <Catalog
          products={demoProducts}
          onWhatsAppGeneral={() =>
            openWhatsApp(
              "Hola! Estoy buscando materiales para una obra. ¿Me pueden asesorar?"
            )
          }
        />
      </main>
      <Footer />
    </div>
  );
}

export default App;
