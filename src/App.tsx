import { useEffect, useRef } from "react";
import Brands from "./components/Brands";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Location from "./components/Location";
import Presence from "./components/Presence";
import Trust from "./components/Trust";
import WhatsAppFloat from "./components/WhatsAppFloat";
import { QuoteProvider } from "./features/quote/QuoteProvider";
import { useParallax } from "./lib/parallax";

function Home() {
  const stageRef = useRef<HTMLDivElement>(null);
  useParallax(stageRef);

  useEffect(() => {
    const scrollToHash = () => {
      const hash = window.location.hash;
      if (!hash || hash === "#inicio") {
        document.getElementById("inicio")?.scrollIntoView({ behavior: "smooth", block: "start" });
        return;
      }
      document.querySelector(hash)?.scrollIntoView({ behavior: "smooth", block: "start" });
    };
    scrollToHash();
    window.addEventListener("hashchange", scrollToHash);
    return () => window.removeEventListener("hashchange", scrollToHash);
  }, []);

  return (
    <div className="min-h-full bg-stone-100">
      <Header />
      <div ref={stageRef}>
        <main>
          <Hero />
          <Presence />
          <Location />
          <Trust />
          <Brands />
        </main>
      </div>
      <Footer />
      <WhatsAppFloat />
    </div>
  );
}

export default function App() {
  return (
    <QuoteProvider>
      <Home />
    </QuoteProvider>
  );
}
