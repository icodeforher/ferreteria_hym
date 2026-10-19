# El Maestro Ferretería --- Design System para React

**Versión:** 2.0\
**Estado:** Especificación de diseño e implementación\
**Audiencia:** Claude Code, Cursor y equipo frontend\
**Objetivo:** Rediseñar la web de El Maestro como una experiencia
industrial premium, inmersiva y orientada a generar cotizaciones por
WhatsApp.

> Este documento es la fuente de verdad para la implementación visual.
> Si algo no está definido, inspecciona el repositorio y los activos
> reales; no inventes datos comerciales ni recrees la marca.

## 0. Resumen ejecutivo

Crear una experiencia digital moderna para una ferretería en Colombia
con identidad industrial premium, naranja como único acento de interfaz,
grafito/grises cálidos/piedra/blanco como neutrales, fotografía real,
tipografía fuerte, movimiento sutil, catálogo fácil de explorar y
cotización por WhatsApp.

Prioridad: encontrar producto → entender producto/unidad → añadir a
cotización → revisar cantidades → continuar en WhatsApp. No implementar
pagos online salvo que el negocio lo solicite.

**No usar amarillo como acento de interfaz.** El logo oficial puede
contener sus colores originales y debe mostrarse tal cual, sin editarlo.

## 1. Identidad y activos

### Logo --- regla no negociable

-   Usar el archivo original de El Maestro.
-   No recrear, vectorizar interpretativamente, recolorear, deformar ni
    reemplazar el logo o sus personajes.
-   No usar imágenes generadas como logo final.
-   Mantener proporción original con `object-fit: contain`.
-   Si no existe el archivo, solicitarlo y usar un placeholder
    explícito; no fabricar una versión provisional.
-   Si existe una versión oficial para fondo oscuro, usarla. No crear
    variantes sin aprobación.

### Activos que deben localizarse

Logo SVG/PNG, fotos reales de tienda/equipo/productos, logos oficiales
de fabricantes, video de bienvenida si sigue vigente, dirección,
horarios, teléfono, redes, WhatsApp oficial y catálogo con
referencias/unidades/precios/stock si existen.

No inventar dirección, horarios, precios, disponibilidad, descuentos,
marcas distribuidas, cobertura de domicilios ni garantías.

## 2. Fuentes y recursos

### Tipografías

-   **Inter** para UI, navegación, párrafos y componentes:
    https://fonts.google.com/specimen/Inter
-   **Barlow Condensed** para titulares display industriales:
    https://fonts.google.com/specimen/Barlow+Condensed
-   Alternativas solo si una prueba lo justifica: Oswald
    https://fonts.google.com/specimen/Oswald ; Manrope
    https://fonts.google.com/specimen/Manrope

Elección por defecto: Inter + Barlow Condensed, máximo dos familias.
Importar solo pesos necesarios, usar `font-display: swap`, fallbacks y
revisar rendimiento. Para producción se pueden alojar WOFF2 localmente
si se cumplen las licencias.

### Iconos de interfaz: Lucide React

-   Sitio: https://lucide.dev/
-   Catálogo: https://lucide.dev/icons/
-   NPM: https://www.npmjs.com/package/lucide-react
-   Instalación: `npm install lucide-react`

Usar Lucide React como única familia de iconos de interfaz, salvo que el
repositorio ya tenga una solución consistente. Importar solo los iconos
usados. No mezclar Lucide, Font Awesome, Material Icons y Bootstrap
Icons. No usar emojis como iconos.

Iconos sugeridos: - `Search`, `Menu`, `X` - `ArrowRight`,
`ChevronRight` - `ClipboardList`, `ShoppingCart`, `Plus`, `Minus`,
`Trash2` - `MapPin`, `Clock`, `Phone`, `Truck`, `Store`, `Headset` -
`Wrench`, `Heart`, `SlidersHorizontal` - `CircleCheck`, `TriangleAlert`,
`CircleX`, `Info`, `LoaderCircle`

Ejemplo:

``` tsx
import {
  Search, Menu, X, ArrowRight, ChevronRight,
  ClipboardList, ShoppingCart, Plus, Minus, Trash2,
  MapPin, Clock, Truck, Store, Headset, Wrench,
  Heart, SlidersHorizontal, CircleCheck, TriangleAlert,
  CircleX, Info, LoaderCircle,
} from "lucide-react";
```

Reglas: stroke-width consistente (1.75--2), 16px inline, 20px controles,
24px destacados. Icon-only buttons necesitan `aria-label`; iconos
decorativos usan `aria-hidden="true"`.

### Icono oficial de WhatsApp

Lucide no incluye el logo de WhatsApp. Opciones: - Simple Icons:
https://simpleicons.org/ - Paquete:
https://www.npmjs.com/package/simple-icons - Recursos oficiales Meta:
https://about.meta.com/brand/resources/whatsapp/whatsapp-brand/

Usar el símbolo oficial y respetar sus guías. No dibujar una imitación
ni sustituirlo por un chat genérico si el botón debe identificar
WhatsApp.

### Fotografías

Prioridad: activos propios → imágenes oficiales autorizadas → bancos de
imágenes con licencia para escenas genéricas → imágenes generadas solo
para explorar conceptos, nunca para falsear un producto real.

-   Unsplash: https://unsplash.com/
-   Pexels: https://www.pexels.com/
-   Wikimedia Commons: https://commons.wikimedia.org/ (revisar licencia
    individual)

No hotlinkear resultados de búsqueda en producción. Verificar permisos y
optimizar archivos antes de usarlos.

### Referencias UX

-   Awwwards E-commerce: https://www.awwwards.com/websites/e-commerce/
-   Baymard Home & Hardware:
    https://baymard.com/research/home-and-hardware

Son referencias de inspiración, no para copiar literalmente.

## 3. Dirección visual

**Concepto:** Industrial premium --- "Construimos contigo".

El impacto debe venir de la composición, fotografía, tipografía y
movimiento, no de acumular colores, sombras o efectos.

Principios: 1. Hero impactante con propuesta de valor clara. 2. Naranja
reservado para acciones y acentos. 3. Neutrales para dar aire y
jerarquía. 4. Producto protagonista en el catálogo. 5. Animaciones que
revelan contenido o dan feedback, sin retrasar. 6. Mobile-first real. 7.
Datos y activos auténticos. 8. Tokens centralizados y componentes
reutilizables.

## 4. Design tokens

### Colores

  Token                      Hex         Uso
  -------------------------- ----------- ---------------------------------
  `--color-accent`           `#FF6A00`   CTA primario y estados activos
  `--color-accent-hover`     `#E85F00`   Hover/pressed
  `--color-accent-soft`      `#FFF0E6`   Fondo de selección
  `--color-graphite-950`     `#171A1D`   Hero, footer, fondo oscuro
  `--color-graphite-900`     `#202428`   Header y paneles
  `--color-graphite-800`     `#2B3035`   Superficies oscuras
  `--color-graphite-700`     `#3A4147`   Bordes y secundarios oscuros
  `--color-stone-100`        `#F4F1EB`   Fondo cálido
  `--color-stone-200`        `#E8E3DA`   Bordes cálidos
  `--color-white`            `#FFFFFF`   Superficie principal
  `--color-text-primary`     `#171A1D`   Texto principal
  `--color-text-secondary`   `#626970`   Texto secundario
  `--color-border`           `#D9DDE0`   Bordes claros
  `--color-success`          `#16834A`   Éxito/disponibilidad confirmada
  `--color-warning`          `#A95A00`   Advertencia
  `--color-danger`           `#B42318`   Error
  `--color-info`             `#175CD3`   Información

Reglas: no usar amarillo como acento de UI; el logo oficial puede
conservar sus colores originales. No usar naranja como texto pequeño
sobre blanco si no cumple contraste; preferir texto grafito. Los estados
deben tener texto/icono además de color. Verde solo para éxito y marca
WhatsApp cuando corresponda.

### Tipografía

**Display:** Barlow Condensed 600--800. **UI/body:** Inter 400--700.

  Token                     Desktop      Móvil Uso
  --------------------- ----------- ---------- ----------------------
  `--font-display-xl`     88--112px   48--64px Hero
  `--font-display-lg`      64--80px   40--48px Secciones narrativas
  `--font-h1`              48--56px   34--40px Título de página
  `--font-h2`              36--40px   28--32px Secciones
  `--font-h3`              24--28px   22--24px Subsecciones
  `--font-body-lg`         18--20px   17--18px Descripción
  `--font-body`                16px       16px Texto
  `--font-body-sm`             14px       14px Metadatos
  `--font-label`           12--13px   12--13px Etiquetas
  `--font-button`          14--16px   14--16px Botones

Usar `clamp()` cuando aporte valor. Mayúsculas solo para titulares
cortos. Máximo dos familias.

### Espaciado

Escala base de 4px: `space-1:4`, `space-2:8`, `space-3:12`,
`space-4:16`, `space-5:20`, `space-6:24`, `space-8:32`, `space-10:40`,
`space-12:48`, `space-16:64`, `space-20:80`, `space-24:96`,
`space-32:128`.

### Layout y breakpoints

-   Max-width: 1440px.
-   Padding: desktop 48--64px, tablet 24--32px, móvil 16--20px.
-   Grid: desktop 12 columnas, tablet 8, móvil 4.
-   Breakpoints de referencia: `sm 640px`, `md 768px`, `lg 1024px`,
    `xl 1280px`, `2xl 1440px`.
-   Adaptar por contenido; evitar diseñar para modelos de teléfono
    específicos.

### Radios y sombras

-   `radius-sm:4px`, `radius-md:8px`, `radius-lg:12px`,
    `radius-xl:20px`, `radius-pill:999px`.
-   Sombras sutiles para tarjetas y más profundas para overlays.
-   No hacer que todo parezca una tarjeta flotante; combinar secciones a
    sangre, divisores y espacio negativo.

## 5. Motion design

Tokens: `fast 150ms`, `standard 220ms`, `emphasis 400ms`,
`narrative 500–800ms` solo para escenas no bloqueantes; easing estándar
`cubic-bezier(0.2,0.7,0.2,1)`.

-   Hero: fade + desplazamiento vertical corto.
-   Header: overlay → grafito sólido al hacer scroll.
-   Categorías: escala de imagen `1.03–1.05` en hover.
-   Flechas: desplazamiento 4--6px.
-   Secciones: reveal sutil de 12--24px.
-   Añadir a cotización: feedback breve y contador actualizado.
-   Drawer: 180--240ms.

No secuestrar scroll, no autoplay de carruseles, no bloquear
interacciones, no animar propiedades que provoquen reflow. Preferir
`transform`/`opacity`, respetar `prefers-reduced-motion` y reducir
parallax en móvil.

## 6. Componentes reutilizables

### UI base

`Button`, `IconButton`, `TextField`, `SearchField`, `Select`,
`Checkbox`, `RadioGroup`, `Badge`, `Chip`, `Skeleton`, `Spinner`,
`Toast`, `Alert`, `Modal`, `Drawer`, `Tooltip`, `Breadcrumbs`,
`Pagination`, `Tabs`.

### Layout

`Container`, `Section`, `Stack`, `Grid`, `Header`, `MobileNavigation`,
`Footer`.

### Catálogo

`CategoryCard`, `CategoryGrid`, `ProductCard`, `ProductGrid`,
`ProductGallery`, `ProductFilters`, `ProductSort`, `ProductQuantity`,
`ProductAvailability`, `ProductDetail`.

### Cotización

`QuoteButton`, `QuoteItem`, `QuoteSummary`, `QuoteDrawer`, `QuoteSheet`,
`QuoteEmptyState`, `WhatsAppQuoteButton`.

### Secciones de home

`HeroSection`, `CategoryShowcase`, `FeaturedProducts`, `QuoteBanner`,
`ProjectSolutions`, `BrandStrip`, `TrustSection`, `LocationSection`.

Los componentes UI no conocen reglas de negocio. Los componentes de
dominio muestran datos y emiten acciones. La lógica compartida debe
vivir en hooks/contexto/store o capa de aplicación. No duplicar lógica
de cotización en tarjeta, ficha y drawer. No abstraer cada `div`; crear
componentes cuando exista un patrón claro.

## 7. Contratos de componentes

### Button

Variantes: `primary` (naranja), `secondary`, `dark`, `ghost`, `whatsapp`
(solo para abrir WhatsApp), `danger`. Tamaños: `sm 36px`, `md 44–48px`,
`lg 52–56px`. Estados: default, hover, focus-visible, active, disabled,
loading. Target táctil recomendado ≥44×44px. Navegación usa enlaces;
acciones usan botones. No anidar botones dentro de enlaces.

### SearchField

Nombre accesible/label, icono Search, placeholder
`¿Qué material necesitas?`, acción visible, Enter para buscar, focus
visible. No sugerir resultados ficticios.

### CategoryCard

Foto real, overlay legible, título y flecha. Hover es mejora, nunca
requisito. Si navega, tarjeta como enlace; no anidar acciones
interactivas.

### ProductCard

Imagen, nombre, unidad/referencia real, precio real o
`Consultar precio`, disponibilidad solo si se confirma, botón
`Agregar a cotización`. Estados: default, hover, focus, pressed, added,
unavailable. Añadir no debe abrir accidentalmente la ficha.

### ProductFilters

Filtros solo para datos existentes. Desktop sidebar/barra; móvil
drawer/bottom sheet. Limpiar filtros y mantener selección al volver de
ficha.

### QuoteDrawer / QuoteSheet

Drawer lateral desktop, bottom sheet o página dedicada en móvil. Cerrar
explícitamente, Escape si modal, gestión de foco. Mostrar miniatura,
nombre, unidad/referencia, cantidad y eliminar. Cantidad no puede ser
cero/negativa. Una única fuente de verdad para el estado.

### WhatsAppQuoteButton

-   Construir mensaje legible con productos y cantidades.
-   Incluir referencias/unidades solo si existen.
-   No afirmar compra ni envío confirmado.
-   Abrir WhatsApp con mensaje prellenado y dejar que el usuario
    confirme.
-   Número oficial centralizado en configuración validada, no repetido
    por componentes.
-   Usar `encodeURIComponent`.
-   Si no hay número oficial, solicitarlo; nunca inventarlo.

### Feedback

Toasts/alerts para éxito, error, información y advertencia. No depender
solo del color. Mensajes dinámicos accesibles con `aria-live` cuando
corresponda.

## 8. Arquitectura React

### Antes de cambiar código

Inspeccionar `package.json`, scripts, framework, rutas, estilos,
componentes, pruebas y activos. Revisar si ya existe una librería
UI/iconos. No migrar framework ni reemplazar arquitectura sin
justificación. Presentar plan incremental.

### Principios

-   Componentes funcionales, composición y hooks personalizados.
-   TypeScript si el proyecto lo usa o se aprueba su adopción.
-   Tipos explícitos para `Product`, `Category`, `QuoteItem` y estados
    de UI.
-   Evitar `any` sin justificación.
-   No usar `useEffect` para valores que se derivan en render.
-   No duplicar estado derivado (totales/cantidades).
-   Keys estables; no índices para listas que cambian.
-   Actualizaciones inmutables.
-   No crear un Context global para todo.
-   Usar `useMemo`/`useCallback` cuando haya beneficio real, no por
    reflejo.
-   Separar presentación, reglas de negocio, acceso a datos y
    navegación.
-   Gestionar estados loading/error/empty/success.
-   Nunca guardar secretos en frontend.

### Estructura sugerida

Adaptar al proyecto existente.

``` text
src/
  app/
    App.tsx
    router.tsx
    providers/
  assets/
    images/
    icons/
    fonts/
  components/
    ui/
    layout/
  features/
    catalog/
      components/
      hooks/
      api/
      types.ts
    quote/
      components/
      hooks/
      state/
      services/
      types.ts
    home/
      components/
      sections/
  pages/
    HomePage.tsx
    CatalogPage.tsx
    ProductPage.tsx
    NotFoundPage.tsx
  lib/
    whatsapp.ts
    formatters.ts
  styles/
    tokens.css
    globals.css
    typography.css
    motion.css
  tests/
```

No es obligatorio mover archivos a esta estructura si el repo ya tiene
una arquitectura clara.

### Estado de cotización

-   Una fuente de verdad para items.
-   MVP sin login: considerar hook/contexto específico y `localStorage`
    si se espera recuperar la lista tras recargar.
-   Validar/versionar datos persistidos y manejar JSON corrupto.
-   No guardar datos sensibles.
-   Definir comportamiento al añadir el mismo producto (incrementar
    cantidad o nueva línea).
-   Considerar store externo solo si la complejidad lo justifica.

### Routing

Usar router existente. Si no existe y se requieren rutas cliente,
evaluar React Router: - https://reactrouter.com/ -
https://www.npmjs.com/package/react-router-dom

No añadir routing si basta una página sencilla.

### Estilos

Usar la solución existente. Si no existe, CSS Modules o estilos
organizados por feature con tokens centralizados. No mezclar Tailwind,
CSS-in-JS y CSS global sin estrategia. Evitar librerías UI pesadas sin
necesidad.

### Animación

CSS para microinteracciones. Si el scroll narrativo requiere una
librería, evaluar Motion: - Docs: https://motion.dev/ - NPM:
https://www.npmjs.com/package/motion

No añadirla automáticamente. Respetar reduced motion y evitar
renderizados React por frame.

## 9. Accesibilidad

Objetivo WCAG 2.2 AA cuando sea viable: - Contraste adecuado. - Focus
visible y navegación por teclado. - Labels explícitos. - `aria-label` en
botones de icono. - Gestión de foco en modal/drawer. - Escape para
cerrar overlays cuando corresponda. - Alt descriptivo en imágenes
informativas y `alt=""` en decorativas. - No depender de hover ni
color. - Zoom y reflow. - `prefers-reduced-motion`. - Targets táctiles
recomendados ≥44×44px. - HTML semántico.

Recursos: - W3C WAI: https://www.w3.org/WAI/ - WCAG 2.2:
https://www.w3.org/TR/WCAG22/ - MDN Accessibility:
https://developer.mozilla.org/en-US/docs/Web/Accessibility

## 10. Rendimiento

-   AVIF/WebP, imágenes responsivas y dimensiones reservadas.
-   Priorizar hero; lazy-load bajo el primer viewport.
-   Evitar imágenes gigantes de fondo en móvil.
-   Importar iconos individualmente.
-   Limitar librerías de animación.
-   Evitar renders por estado global excesivo.
-   Code splitting por rutas si el tamaño lo justifica.
-   Medir Core Web Vitals: LCP ≤2.5s, INP ≤200ms, CLS ≤0.1 como
    objetivos de referencia al percentil 75.
-   Medir antes de optimizar.

Recursos: - https://web.dev/articles/vitals -
https://web.dev/learn/performance -
https://react.dev/learn/react-developer-tools

## 11. Testing y herramientas

Herramientas posibles, no instalar todas automáticamente: - Vitest:
https://vitest.dev/ - React Testing Library:
https://testing-library.com/docs/react-testing-library/intro/ -
Playwright: https://playwright.dev/ - Storybook:
https://storybook.js.org/

Cobertura mínima: - Añadir producto, cambiar cantidad y eliminar. -
Persistencia si se implementa. - Generación del mensaje WhatsApp. -
Lista vacía. - Error de carga. - Navegación móvil. - Responsive de
header, filtros y drawer. - `prefers-reduced-motion`.

Probar viewports aproximados 390px, 768px y 1440px. Verificar overflow
horizontal y estados hover/focus/pressed/loading/disabled/error.
Ejecutar lint, tests y build disponibles.

## 12. Contenido y flujo comercial

Mensajes sugeridos: - "Construimos contigo." - "Todo para construir tus
ideas." - "¿Qué material necesitas?" - "Arma tu lista y cotízala por
WhatsApp." - "Consulta precio y disponibilidad con nuestro equipo."

No inventar precios, stock, horarios, dirección, cobertura de
domicilios, descuentos, garantías ni marcas distribuidas.

Flujo: 1. Buscar/explorar categoría. 2. Abrir producto. 3. Añadir a
cotización. 4. Revisar lista y cantidades. 5. Pulsar "Enviar por
WhatsApp". 6. Abrir WhatsApp con mensaje prellenado. 7. Usuario confirma
envío en WhatsApp.

No afirmar que el mensaje se envió si solo se abrió WhatsApp.

## 13. Home propuesta

1.  Header con logo original y CTA.
2.  Hero cinematográfico con titular, buscador y cotización.
3.  Categorías principales.
4.  Productos destacados.
5.  Banda editorial "¿Tienes una lista de materiales?".
6.  Soluciones/proyectos, si refleja servicios reales.
7.  Marcas oficiales disponibles.
8.  Equipo/asesoría/ubicación reales.
9.  Footer con datos verificados.

Alternar secciones oscuras, superficies claras, fotografía a sangre y
composición editorial. No convertir todo en tarjetas idénticas.

## 14. Checklist de aceptación

### Marca/diseño

-   [ ] Logo original sin modificaciones.
-   [ ] Naranja como único acento de UI; sin amarillo como acento.
-   [ ] Grafito y neutrales equilibran el sitio.
-   [ ] Tipografía legible y consistente.
-   [ ] Fotografías autorizadas y optimizadas.
-   [ ] Diseño distintivo, no plantilla genérica.

### Componentes

-   [ ] Botones con estados completos.
-   [ ] Inputs con labels/focus/error.
-   [ ] Tarjetas responsive.
-   [ ] Filtros accesibles.
-   [ ] Cotización funcional.
-   [ ] Feedback accesible.
-   [ ] Lucide React consistente.

### React/calidad

-   [ ] Componentes enfocados y reutilizables.
-   [ ] Estado de cotización centralizado por responsabilidad.
-   [ ] Tipos explícitos.
-   [ ] Sin estado derivado duplicado ni mutaciones directas.
-   [ ] Loading/error/empty.
-   [ ] Responsive, accesibilidad y rendimiento probados.
-   [ ] Tests de cotización.

### Conversión

-   [ ] CTA de WhatsApp visible y correcto.
-   [ ] Mensaje prellenado legible.
-   [ ] Número oficial validado.
-   [ ] Lista mantiene productos/cantidades.
-   [ ] No se afirma una compra o envío confirmado falsamente.

## 15. Prompt operativo para Claude Code

Actúa como senior frontend engineer especializado en React, design
systems y accesibilidad.

Este documento es la fuente de verdad visual. Antes de modificar: 1.
Inspecciona repositorio, framework, scripts, dependencias, rutas,
estilos, componentes y tests. 2. Localiza el logo original y activos
reales. No recrees el logo. 3. Comprueba las librerías de iconos,
estilos, routing y testing ya instaladas. 4. Identifica qué se puede
reutilizar. 5. Propón un plan incremental con archivos y criterios de
aceptación.

Implementa una fase a la vez, comenzando por tokens, tipografía, layout
base, header y hero. Espera validación visual antes de construir el
catálogo completo.

No reescribas toda la aplicación de una sola vez. No cambies framework
ni añadas dependencias sin justificarlo. Usa Lucide React si no existe
una solución establecida, Inter + Barlow Condensed como punto de partida
y el logo original intacto. No uses amarillo como acento de UI. No
inventes datos comerciales. No implementes checkout/pagos online: el
objetivo es cotización por WhatsApp. Separa lógica de cotización de
presentación, implementa estados loading/error/empty, accesibilidad,
responsive y reduced motion. Ejecuta lint/tests/build disponibles. Al
final de cada fase, enumera archivos modificados y cómo validar el
resultado.
