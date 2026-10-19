# Tasks

## 1. Base visual

- [x] 1.1 Añadir en `src/index.css` los tokens de acento `#FF6A00`, grafito `#171A1D` y piedra `#F4F1EB`, y conservar alias de `cream` y `brick` para `public/contacto.html`. Verificar que el homepage no usa `yellow` ni `mustard` y que `contacto.html` sigue referenciando sus clases actuales.
- [x] 1.2 Sustituir Plus Jakarta Sans por Inter y Barlow Condensed en `index.html`, con `display=swap` y solo los pesos usados. Verificar en el documento cargado que esas dos familias son las únicas de marca y que los titulares pueden usar Barlow Condensed.
- [x] 1.3 Instalar `lucide-react` y dejar el símbolo de WhatsApp como el SVG ya existente, en un solo componente. Verificar que `package.json` incluye Lucide y que no se añadió `simple-icons`, React Router ni Motion.
- [x] 1.4 Copiar la panorámica aprobada a `public/img/hero-obra.jpg`. Verificar que el archivo existe en el repositorio y que el hero no apunta a una URL externa.
- [x] 1.5 Desactivar transiciones y el carrusel cuando `prefers-reduced-motion: reduce`, dejando el carrusel visible. Verificar en CSS que la media query existe.

## 2. Encabezado y hero

- [x] 2.1 Reconstruir el encabezado oscuro con el logo `public/img/logo_web_1024.png` sin alterarlo, enlaces a categorías, catálogo y contacto, búsqueda con nombre accesible, acceso a la cotización y menú móvil. Verificar a 390 px y 1440 px que no hay scroll horizontal, que Escape cierra el menú y que el foco es visible.
- [x] 2.2 Reconstruir el hero a sangre con titular regional, mensaje de materiales y asesoría, acción principal y búsqueda, sobre `/img/hero-obra.jpg`. Verificar que el texto se lee sobre la foto y que no hay “compra en línea” ni “disponibilidad real”.
- [x] 2.3 Cambiar `theme-color` a `#171A1D` y ajustar título y descripción para no limitar la marca a un municipio ni añadir ofertas. Verificar en `index.html` que la URL canónica y el contacto publicado se mantienen, y que no se reescriben el FAQ ni `areaServed`.

## 3. Catálogo de referencia

- [x] 3.1 Mapear `src/data/inventario_semilla_el_maestro.json` al tipo de producto, con marca solo si no es genérica y presentación solo si no está por confirmar. Verificar que la portada ya no usa `src/data/products.ts` y que ninguna tarjeta muestra precio.
- [x] 3.2 Mostrar cada categoría distinta del inventario y filtrar el catálogo en la misma página al elegir una categoría o al buscar. Verificar que una búsqueda sin coincidencias muestra estado vacío y limpieza, sin cambiar de ruta.
- [x] 3.3 Mostrar en cada tarjeta la imagen ilustrativa, el nombre, la marca y la presentación cuando existan, el aviso de catálogo de referencia, y la acción de agregar a cotización. Verificar que no aparece “Disponible” ni un enlace a una ruta de ficha.
- [x] 3.4 Reservar dimensiones, cargar el hero con prioridad y diferir el resto de imágenes. Verificar que una imagen rota conserva el marco y no se reemplaza por otra URL externa.

## 4. Lista de cotización

- [x] 4.1 Crear un único estado de cotización para encabezado, tarjetas y resumen, persistido en `localStorage` con versión. Verificar que agregar el mismo producto incrementa la cantidad, que recargar conserva la lista y que un JSON ilegible deja la lista vacía sin romper la página.
- [x] 4.2 Permitir aumentar cantidad, impedir bajar de 1 y quitar la línea con una acción explícita. Verificar el resumen vacío, el contador del encabezado y el mismo contenido en móvil.
- [x] 4.3 Abrir WhatsApp con el número `573124954231` y un mensaje codificado de nombres, cantidades y referencia. Verificar que la lista vacía no abre un mensaje de productos y que la interfaz no dice que el mensaje fue enviado.

## 5. Asesoría, marcas y pie

- [x] 5.1 Añadir la sección de asesoría con la fotografía de obra y acción de contacto, sin testimonios, cifras ni personas inventadas. Verificar que no promete compra en línea ni disponibilidad real.
- [x] 5.2 Rediseñar el carrusel de marcas ya publicado y mantenerlo en movimiento, con la misma lista y las mismas imágenes. Verificar que se desplaza y que `prefers-reduced-motion` lo deja quieto y visible.
- [x] 5.3 Reconstruir el cierre y el pie con la llamada a cotizar y solo el contacto ya publicado, más enlaces a secciones reales. Verificar que teléfono, correo, Instagram, dirección y horarios coinciden con los publicados y que no se añaden datos nuevos.

## 6. Integración

- [x] 6.1 Recorrer con teclado el encabezado, las categorías, agregar a cotización y el contacto, en escritorio y a 390 px. Verificar foco visible, menú móvil y que `#catalogo` sigue desplazando la página.
- [x] 6.2 Ejecutar `npm run lint` y `npm run build`. Verificar que ambos terminan sin error y que `public/contacto.html` no fue rediseñado.

## Workflow follow-up

- Revisar el resultado visual antes de archivar.
- Archivar el cambio después de cumplir la revisión.
