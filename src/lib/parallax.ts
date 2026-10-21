import { useEffect, type RefObject } from "react";

export function useParallax(rootRef: RefObject<HTMLElement | null>) {
  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    const desktop = window.matchMedia("(min-width: 1024px)");
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)");
    let frame = 0;

    const update = () => {
      frame = 0;
      const still = !desktop.matches || reduced.matches;
      root.querySelectorAll<HTMLImageElement>("[data-parallax]").forEach((photo) => {
        if (still) {
          photo.style.transform = "";
          return;
        }
        const section = photo.closest("section");
        if (!section) return;
        // Keep shift small: photos are h-full (no 140% buffer) so large
        // translates would reveal empty edges and force unnecessary upscale.
        const maxShift = section.offsetHeight * 0.08;
        const traveled = Math.max(-section.getBoundingClientRect().top, 0);
        const shift = Math.min(traveled * 0.2, maxShift);
        photo.style.transform = `translate3d(0, ${shift}px, 0)`;
      });
    };

    const onScroll = () => {
      if (frame) return;
      frame = window.requestAnimationFrame(update);
    };

    const onChange = () => update();

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    desktop.addEventListener("change", onChange);
    reduced.addEventListener("change", onChange);

    return () => {
      window.removeEventListener("scroll", onScroll);
      desktop.removeEventListener("change", onChange);
      reduced.removeEventListener("change", onChange);
      if (frame) window.cancelAnimationFrame(frame);
      root.querySelectorAll<HTMLImageElement>("[data-parallax]").forEach((photo) => {
        photo.style.transform = "";
      });
    };
  }, [rootRef]);
}
