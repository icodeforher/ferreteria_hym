# Proposal

## Why

La página principal se ve como un sitio local de una columna de texto y un acento amarillo, y no permite armar una cotización. El negocio necesita una portada industrial, reconocible y orientada a consultar materiales y pedir cotización por WhatsApp, sin presentarse como una marca limitada a un solo municipio.

## What Changes

- Rediseñar la página principal según el wireframe: cabecera oscura, hero a sangre, categorías, productos destacados, asesoría, carrusel de marcas, lista de cotización y pie.
- Sustituir el acento amarillo de la interfaz por naranja `#FF6A00`, con base grafito, piedra y blanco. El logo oficial permanece intacto.
- Alimentar el catálogo con `src/data/inventario_semilla_el_maestro.json`. No mostrar precio ni “Disponible”: el archivo trae precio y stock vacíos y disponibilidad `por_confirmar`.
- Usar `public/img/hero-obra.jpg` como fotografía del hero.
- Conservar el carrusel de marcas en movimiento y rediseñarlo. Con movimiento reducido queda quieto.
- Añadir búsqueda sobre el catálogo de la misma página y una lista de cotización persistente que abre WhatsApp con nombres, referencias y cantidades.
- Conservar el contacto ya publicado. No añadir “compra en línea” ni “disponibilidad real”.
- Quedan fuera el backend, la administración, el inventario verificado, las fichas con ruta propia, el checkout, los pagos y el rediseño de `public/contacto.html`.

## Capabilities

### New Capabilities

- `storefront-navigation`: cabecera, menú móvil, anclas de categoría, búsqueda en la misma página y acceso a la lista de cotización.
- `homepage`: hero, categorías, destacados, asesoría, carrusel de marcas, llamada final, pie y estados de la página principal.
- `quote-list`: una sola lista de cotización, cantidades, persistencia y mensaje de WhatsApp.

### Modified Capabilities

- Ninguna. No hay especificaciones previas en `openspec/specs/`.

## Impact

- Interfaz y estilos: `src/App.tsx`, `src/components/Header.tsx`, `src/components/Hero.tsx`, `src/components/Catalog.tsx`, `src/components/Brands.tsx`, `src/components/Footer.tsx`, `src/index.css`, `index.html`.
- Datos: `src/types.ts` y `src/data/inventario_semilla_el_maestro.json`. `src/data/products.ts` deja de alimentar la portada.
- Contacto: se reutiliza el número `573124954231`, el correo, Instagram, la dirección y los horarios ya publicados.
- Los tokens de `src/index.css` también alimentan `public/contacto.html`. Se conservan alias para no rediseñar esa página.
- Dependencia nueva: `lucide-react`. El símbolo de WhatsApp sigue siendo el SVG ya usado. No se añaden router, librería de animación ni runner de tests.
- Recursos: logo en `public/img/logo_web_1024.png` y hero en `public/img/hero-obra.jpg`. Las fotos de producto del JSON son ilustrativas.
