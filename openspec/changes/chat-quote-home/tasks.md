# Tasks

## 1. Lista de cotización

- [x] 1.1 Ampliar el alta para aceptar un producto del inventario o un texto libre, con id estable y sin referencia inventada. Verificar que repetir el mismo id suma cantidad y que una línea libre no guarda referencia.
- [x] 1.2 Mantener cantidades, quitar, `localStorage` versión 1 y el mensaje de WhatsApp. Verificar que un JSON ilegible deja la lista vacía y que el mensaje solo incluye referencia cuando existe.

## 2. Portada conversacional

- [x] 2.1 Sustituir la cuadrícula de fotos, el riel de categorías y la ficha por el chat “Dime qué necesitas”, las sugerencias sin precio y la acción de agregar el texto escrito. Verificar que no aparece “Disponible” ni precio.
- [x] 2.2 Mostrar la lista junto al chat en escritorio y debajo en móvil, con cantidades, quitar y “Enviar lista por WhatsApp”. Verificar que la lista vacía no abre un mensaje de productos.

## 3. Listado de productos

- [x] 3.1 Añadir la vista `#productos` en texto, enlazada desde el encabezado, con búsqueda, estado vacío y alta a la misma lista. Verificar que no exige fotos ni cambia de sitio.

## 4. Integración

- [x] 4.1 Recorrer el chat, la lista, WhatsApp y `#productos` en escritorio y a 390 px. Verificar que encabezado, carrusel, asesoría y pie siguen presentes.
- [x] 4.2 Ejecutar `npm run lint` y `npm run build`. Verificar que ambos terminan sin error y que `public/contacto.html` no cambió.

## Workflow follow-up

- Revisar el resultado antes de archivar.
- Al archivar, resolver el conflicto con `redesign-homepage` porque ambos describen la portada.
