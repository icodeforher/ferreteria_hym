# Design

## Context

La aplicación es una sola página en React 19 y Vite, sin React Router. La cotización vive en `QuoteProvider` y se guarda en `localStorage` con la clave `el-maestro-quote-v1` y `version: 1`. Hoy `add` solo acepta un producto del inventario y copia su `id` como referencia. El mensaje lo arma `src/lib/whatsapp.ts` hacia `573124954231`. El inventario semilla sigue en `src/data/catalog.ts`.

## Goals / Non-Goals

**Goals:**

- Hacer que la búsqueda del banner muestre coincidencias y siempre pueda agregar el texto escrito.
- Mostrar la misma lista al lado o debajo de esos resultados, con cantidades y WhatsApp.
- Publicar las 33 referencias en `#productos` como texto.

**Non-Goals:**

- No agregar React Router, Motion ni un backend de chat.
- No inventar precios, existencias ni referencias para el texto libre.
- No rediseñar `public/contacto.html` ni archivar `redesign-homepage`.

## Decisions

- La vista se elige con el hash: vacío o `#inicio` es el banner y los resultados; `#productos` es el listado. El banner es el `Hero` existente, con `/img/hero-obra.jpg`. Su texto alimenta el panel `#resultados` y no cambia el hash. El pie reutiliza el mapa publicado `4.8646,-74.0522`. Así se comparte el estado de la lista sin una librería de rutas.
- `add` acepta una línea `{ id, name, reference? }`. Un producto del inventario usa su SKU como `id` y como `reference`. Un texto libre usa un id estable `texto:` más el texto normalizado (minúsculas y espacios colapsados) y no guarda `reference`.
- La búsqueda reutiliza nombre, marca, categoría, id y descripción del inventario ya mapeado. Los resultados no renderizan `imageUrl`.
- La lista visible reutiliza aumentar, disminuir y quitar. El cajón del encabezado puede seguir abriendo el mismo resumen.
- El botón de WhatsApp solo se enlaza cuando hay líneas. El enlace de asesoría del encabezado se mantiene para escribir sin lista.

## Risks / Trade-offs

- [Dos cambios activos describen la portada] → Este cambio no archiva `redesign-homepage`. Al archivar más adelante hay que resolver cuál spec de portada queda publicada.
- [El inventario semilla no cubre todo lo que pidan] → El texto libre entra igual a la lista.
- [Un texto libre y un producto pueden sonar parecido] → No se fusionan: uno tiene referencia y el otro no.

## Migration Plan

La clave `el-maestro-quote-v1` no cambia. Las líneas ya guardadas siguen siendo válidas. No hay migración de datos.

## Open Questions

- Ninguna que cambie el alcance. Sigue abierto, fuera de este cambio, si el contacto publicado y el FAQ de `index.html` deben actualizarse.
