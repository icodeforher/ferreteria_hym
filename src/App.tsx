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
    const scrollToHash = () => {
      const hash = window.location.hash;
      if (!hash) return false;
      const el = document.querySelector(hash);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
        return true;
      }
      return false;
    };

    // Al cargar con hash: esperar a que el elemento exista con MutationObserver.
    const hash = window.location.hash;
    let observer: MutationObserver | null = null;
    let safetyId: ReturnType<typeof setTimeout> | null = null;

    if (hash && !scrollToHash()) {
      observer = new MutationObserver(() => {
        const el = document.querySelector(hash);
        if (el) {
          observer?.disconnect();
          if (safetyId != null) clearTimeout(safetyId);
          // Esperar al siguiente frame para que el layout esté calculado (móviles).
          requestAnimationFrame(() => {
            el.scrollIntoView({ behavior: "smooth" });
          });
        }
      });
      observer.observe(document.body, {
        childList: true,
        subtree: true,
      });
      safetyId = setTimeout(() => observer?.disconnect(), 5000);
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
      <main>
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
