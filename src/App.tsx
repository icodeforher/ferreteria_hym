import Header from "./components/Header";
import Hero from "./components/Hero";
import Catalog from "./components/Catalog";
import Brands from "./components/Brands";
import Footer from "./components/Footer";
import { demoProducts } from "./data/products";

const PHONE_NUMBER = "573124954231";

function App() {
  const openWhatsApp = (message?: string) => {
    const base = `https://wa.me/${PHONE_NUMBER}`;
    const href = message
      ? `${base}?text=${encodeURIComponent(message)}`
      : `${base}?text=${encodeURIComponent("Hola! Quiero hacer un pedido.")}`;
    window.open(href, "_blank");
  };

  return (
    <div className="min-h-full bg-white">
      <Header businessName="distribuidora de materiales h&m." phoneNumber={PHONE_NUMBER} />
      <main>
        <Hero onCTAClick={() => openWhatsApp()} />
        <Brands />
        <Catalog
          products={demoProducts}
          onWhatsApp={(p) =>
            openWhatsApp(
              `Hola! Me interesa: ${p.name} (${p.id}). ¿Está disponible?`
            )
          }
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
