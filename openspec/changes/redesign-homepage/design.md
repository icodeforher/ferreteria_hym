# Design

## Context

See proposal.md for motivation. The site is one React 19 page on Vite 7 and Tailwind 4, without a router, test runner, or icon library. `src/App.tsx` composes the header, hero, brands, catalog, and footer. Navigation is in-page hashes (`#catalogo`, `#marcas`, `#contacto`), including a hash scroll used by QR entry.

The visual source of truth is `docs/design/el-maestro-design-system.md`. Current UI tokens in `src/index.css` use yellow `#F5A623`, mustard, and brick, and the typeface is Plus Jakarta Sans. Those conflict with the source of truth and must not be treated as the target palette.

Published contact already lives in `src/App.tsx`, `src/components/Footer.tsx`, `index.html`, and `public/contacto.html`: WhatsApp `573124954231`, `distrimaestrosas@gmail.com`, Instagram `@el_maestroferreteria`, Carrera 10 #3-42, and the posted hours. `public/contacto.html` imports `src/index.css`, so token edits can change that static page.

Assets in the repo include `public/img/logo_web_1024.png`, product PNGs, `public/img/banner.png`, `public/img/argos.jpeg`, and 13 unlabeled brand JPEGs. The approved hero photograph is copied to `public/img/hero-obra.jpg`. The homepage catalog is `src/data/inventario_semilla_el_maestro.json`: 33 draft rows, empty price and stock, `disponibilidad: por_confirmar`, and illustrative LoremFlickr URLs.

## Goals / Non-Goals

**Goals:**

- Meet the three delta specs without adding routes or a backend.
- Keep one quote state for the header, product cards, and summary.
- Swap the interface accent and type in the existing Tailwind setup.
- Leave `public/contacto.html` visually stable while the homepage tokens change.

**Non-Goals:**

- React Router, Motion, Vitest, Playwright, or a payment flow.
- A product detail route, an admin, or a verified inventory feed.
- Redesigning `public/contacto.html`.
- Treating the seed JSON or its LoremFlickr URLs as a verified commercial inventory.

## Decisions

### Single page, in-page state

Categories, search, and the quote summary stay on `/`. Category selection and search filter the demo catalog in memory. The quote summary is a dialog or disclosure on the same page: a side panel from tablet width up and a bottom sheet on narrow screens.

Alternative considered: add React Router for `/categoria` and `/producto`. Rejected. The repo has no router, and product routes are outside this change. Hash targets that already exist (`#catalogo`, `#contacto`) stay so QR entry keeps working.

### Tokens without breaking the static contact page

New homepage colors and type live in `src/index.css` as Tailwind 4 theme tokens: accent `#FF6A00`, accent hover `#E85F00`, graphite `#171A1D`, stone `#F4F1EB`, and the neutral scale from the design system. Homepage components use those tokens only.

`public/contacto.html` still uses `bg-cream`, `text-brick`, and `bg-brick`. Keep those old token names as compatibility aliases so that file does not change appearance. The homepage must not use `yellow`, `mustard`, or `brick` as its accent.

Alternative considered: delete the old tokens in the same pass. Rejected because it would redesign the contact page by side effect.

`theme-color` moves from brick `#B83D0C` to graphite `#171A1D`.

### Typography

Replace the Plus Jakarta Sans stylesheet with Inter for UI and Barlow Condensed for display headings, using the existing Google Fonts link, `display=swap`, and only the weights the page uses. Two families maximum.

Alternative considered: keep Plus Jakarta Sans. Rejected. It is one family and the design source of truth already names Inter and Barlow Condensed.

### Icons

Add `lucide-react` and import only the icons the page renders. There is no existing icon package; the current SVGs are one-off.

The WhatsApp mark stays the SVG path already in `src/components/Header.tsx`, in one shared component. Do not add `simple-icons`.

### Seed catalog contract

Map `src/data/inventario_semilla_el_maestro.json` into the product shape: `sku` as id and reference, `nombre`, `marca_referencial` when it is not `Genérica`, `categoria`, `presentacion` when it is not `Por confirmar`, `unidad_venta`, and `imagen_url` as an illustrative image. Do not render `precio_cop`, `stock_actual`, or a Disponible badge. `src/data/products.ts` no longer feeds the homepage. Every distinct `categoria` with at least one row becomes a filter. A filter with no matches shows the empty state.

Selecting a product may open an in-page panel. It does not add a route.

Alternative considered: keep the eight local fixtures. Rejected. The seed file is the catalog base for this redesign.

### Hero asset

The hero image is the local file `/img/hero-obra.jpg`, copied from the approved panorama. Do not hotlink it and do not fall back to an external URL.

### Brands

Keep the existing moving marquee and the existing name list plus JPEG logos in `src/components/Brands.tsx`. Restyle it with the new palette. Under `prefers-reduced-motion: reduce`, the track stays visible and the animation is disabled. Do not add manufacturer names that are not already in that list.

### Quote state

A quote module owns the list: React context for the page, plus `localStorage` under a versioned key. Stored JSON is `{ version, items: [{ id, name, reference?, quantity }] }`. Invalid JSON or an unknown version resets to an empty list. Adding an existing `id` increments quantity. Quantity stored is an integer greater than or equal to 1. Removal is a separate action.

The WhatsApp URL is built by one function: published number `573124954231`, `encodeURIComponent`, names, quantities, and reference only when present. No price and no stock. Opening the URL is not treated as a sent message. An empty list does not open a product message.

Alternative considered: a third-party store or no persistence. A store is unnecessary for one list. Persistence is required because the spec says the list survives reload. No login exists, so `localStorage` is the fit.

### Motion, images, and verification

CSS handles hover, reveal, and the brand marquee. Under `prefers-reduced-motion: reduce`, those motions are disabled and the marquee stays visible. No scroll hijacking.

The hero image is eager. Product images use the seed URL, are lazy, and keep a reserved aspect ratio. A failed product image keeps the frame and does not swap in another remote photo.

This change does not add a test runner. The quote message builder can stay a pure function so a later change can test it. Verification for this change is `npm run lint`, `npm run build`, and the manual checks in tasks.md.

## Risks / Trade-offs

- [Old yellow classes survive in the homepage] → Implementation searches `src/` for `yellow`, `mustard`, and `bg-brick` and keeps those names only as contact-page aliases.
- [Token edit restyles `public/contacto.html`] → Compatibility aliases preserve `cream`, `brick`, and the classes that file uses.
- [The seed catalog reads as a verified inventory] → The section says it is a reference catalog, and cards omit price and stock.
- [LoremFlickr URLs fail or misrepresent a product] → The card keeps its frame and the caption says the photo is illustrative.
- [The brand marquee lists names that are not individually verified] → Keep the list already published. Do not add names.
- [Corrupt `localStorage` blanks the page] → Parse inside a guard and fall back to an empty list.
- [Hash scroll for QR entry regresses] → Keep the existing `#catalogo` target and the scroll-margin behavior.

## Migration Plan

1. Add tokens, fonts, and compatibility aliases before rebuilding sections.
2. Rebuild header and hero, then categories and featured products, then the quote list, then trust, brands, and footer.
3. Deploy is the existing static Vite build. Rollback is reverting the change. There is no server data to migrate.
4. The new `localStorage` key is versioned, so there is no old quote payload to convert.

## Open Questions

- Whether the published delivery sentences and `areaServed` in `index.html` should be rewritten. Until confirmed, the visible homepage follows the specs and the existing structured data is left as published.
- Whether the published phone, email, address, and hours are still current. The implementation reuses them and does not replace them.
