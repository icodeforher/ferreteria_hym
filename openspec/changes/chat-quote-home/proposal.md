# Proposal

## Why

La portada muestra un catálogo con fotos ilustrativas, pero todavía no hay un inventario real con fotografías. Quien llega necesita decir qué material busca, ir sumándolo a una lista y enviarla por WhatsApp sin depender de esas imágenes.

## What Changes

- La portada abre con el banner de la obra y el titular “Construimos tus ideas”. Esa es la única búsqueda: al escribir salen las coincidencias y el botón de agregar la frase. No hay chat ni otra caja en el encabezado. El pie muestra el mapa de la tienda.
- Cada elección se suma a la lista de cotización ya existente. Repetir el mismo ítem aumenta la cantidad.
- La lista queda visible junto a los resultados, con cantidades, quitar y el botón “Enviar lista por WhatsApp”. La lista vacía no abre un mensaje de productos.
- Una línea del inventario incluye su referencia en el mensaje. Una línea escrita no inventa referencia, precio ni existencia.
- El encabezado enlaza a `#productos`, un listado en texto de las 33 referencias, con búsqueda y la misma acción de agregar. Sin fotos como contenido principal y sin React Router.
- Salen de la portada la cuadrícula de fotos, el riel de categorías y la ficha con imagen. Se conservan encabezado, logo, carrusel, asesoría y pie.

Este cambio sustituye el comportamiento de portada descrito en `redesign-homepage`. Ese cambio no se archiva aquí.

## Capabilities

### New Capabilities

- `homepage`: Portada conversacional que sugiere materiales y arma la lista visible para WhatsApp.
- `quote-list`: Lista única con líneas del inventario o escritas, cantidades, persistencia y mensaje de WhatsApp.
- `product-list`: Listado de texto en `#productos`, enlazado desde el encabezado y conectado a la misma lista.

### Modified Capabilities

- Ninguna. `openspec/specs/` aún no tiene capacidades publicadas.

## Impact

- `src/App.tsx`, encabezado, hero y componentes de catálogo visual.
- `src/features/quote/` para aceptar una línea escrita además de un producto del inventario.
- `src/lib/whatsapp.ts` sigue armando el mensaje; las líneas libres no llevan referencia.
- `src/data/catalog.ts` alimenta sugerencias y `#productos`.
- Sin checkout, sin precios inventados y sin cambios en `public/contacto.html`.
