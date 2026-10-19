import { Search, X } from "lucide-react";
import { useEffect, useMemo, useState, type FormEvent } from "react";
import Brands from "./components/Brands";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import ProductList from "./components/ProductList";
import SearchResults from "./components/SearchResults";
import QuoteDrawer from "./components/QuoteDrawer";
import QuoteSummary from "./components/QuoteSummary";
import Trust from "./components/Trust";
import { loadCatalog } from "./data/catalog";
import { QuoteProvider } from "./features/quote/QuoteProvider";
import { useQuote } from "./features/quote/quote-context";

function useView() {
  const [hash, setHash] = useState(() => window.location.hash);
  useEffect(() => {
    const sync = () => setHash(window.location.hash);
    window.addEventListener("hashchange", sync);
    return () => window.removeEventListener("hashchange", sync);
  }, []);
  return hash === "#productos" ? "productos" : "inicio";
}

function Home() {
  const catalog = useMemo(() => loadCatalog(), []);
  const products = catalog.ok ? catalog.products : [];
  const { items } = useQuote();
  const view = useView();
  const [query, setQuery] = useState("");
  const [heroQuery, setHeroQuery] = useState("");
  const [quoteOpen, setQuoteOpen] = useState(false);
  const [notice, setNotice] = useState("");
  const [bannerVisible, setBannerVisible] = useState(true);

  useEffect(() => {
    const scrollToHash = () => {
      const hash = window.location.hash;
      if (!hash || hash === "#inicio") {
        document.getElementById("inicio")?.scrollIntoView({ behavior: "smooth", block: "start" });
        return;
      }
      if (hash === "#productos") {
        window.scrollTo({ top: 0, behavior: "smooth" });
        return;
      }
      document.querySelector(hash)?.scrollIntoView({ behavior: "smooth", block: "start" });
    };
    scrollToHash();
    window.addEventListener("hashchange", scrollToHash);
    return () => window.removeEventListener("hashchange", scrollToHash);
  }, []);

  useEffect(() => {
    if (view !== "inicio") return;
    const node = document.getElementById("busqueda-banner");
    if (!node) return;
    const observer = new IntersectionObserver(
      ([entry]) => setBannerVisible(entry.isIntersecting),
      { rootMargin: "-80px 0px 0px 0px", threshold: 0 },
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, [view]);

  const added = (name: string) => setNotice(`${name} agregado a la cotización`);

  const searchAgain = (event: FormEvent) => {
    event.preventDefault();
    document.getElementById("resultados")?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className="min-h-full bg-stone-100">
      <Header onOpenQuote={() => setQuoteOpen(true)} lineCount={items.length} />
      {view === "inicio" && !bannerVisible && (
        <form
          onSubmit={searchAgain}
          className="fixed inset-x-0 top-[4.5rem] z-30 border-b border-white/10 bg-graphite-950 px-5 py-3 md:top-20 sm:px-8 lg:hidden"
        >
          <label htmlFor="busqueda-fija" className="sr-only">
            ¿Qué material necesitas?
          </label>
          <div className="mx-auto flex max-w-[1440px] items-center gap-2 rounded-full bg-white px-3 py-1 text-ink">
            <Search className="h-4 w-4 shrink-0 text-muted" aria-hidden="true" />
            <input
              id="busqueda-fija"
              value={heroQuery}
              onChange={(event) => setHeroQuery(event.target.value)}
              placeholder="¿Qué material necesitas?"
              className="w-full bg-transparent py-2 text-sm outline-none"
            />
            {heroQuery.trim() && (
              <button
                type="button"
                onClick={() => setHeroQuery("")}
                aria-label="Limpiar búsqueda"
                className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full text-muted"
              >
                <X className="h-5 w-5" />
              </button>
            )}
          </div>
        </form>
      )}
      <main>
        {view === "productos" ? (
          <ProductList
            products={products}
            query={query}
            onQueryChange={setQuery}
            onAdded={added}
          />
        ) : (
          <>
            <Hero
              query={heroQuery}
              onQueryChange={setHeroQuery}
              onClear={() => setHeroQuery("")}
              onSearch={() => {
                if (window.matchMedia("(min-width: 1024px)").matches) return;
                document.getElementById("resultados")?.scrollIntoView({
                  behavior: "smooth",
                  block: "start",
                });
              }}
              results={<SearchResults products={products} query={heroQuery} onAdded={added} />}
              list={<QuoteSummary />}
            />
            <section id="resultados" className="bg-stone-100 py-8 md:py-12 lg:hidden">
              <div className="container grid items-start gap-6">
                <SearchResults products={products} query={heroQuery} onAdded={added} />
                <aside className="rounded-3xl border border-line bg-white p-5 lg:sticky lg:top-24">
                  <QuoteSummary />
                </aside>
              </div>
            </section>
          </>
        )}
        <Trust />
        <Brands />
      </main>
      <Footer />
      <QuoteDrawer open={quoteOpen} onClose={() => setQuoteOpen(false)} />
      <p className="sr-only" aria-live="polite">
        {notice}
      </p>
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
