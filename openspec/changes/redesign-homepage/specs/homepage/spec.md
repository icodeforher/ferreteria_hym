# Spec Delta

## Purpose

Define qué muestra la página principal y cómo se comporta al explorar categorías, productos, asesoría, marcas y contacto, usando solo datos y recursos verificables.

## ADDED Requirements

### Requirement: Hero con propuesta y búsqueda
El hero MUST usar la fotografía local de obra, un titular breve, un mensaje sobre materiales, herramientas y asesoría, una acción para ver productos o iniciar la cotización, y un acceso visible a la búsqueda.

#### Scenario: Hero legible
- **WHEN** se muestra la página principal
- **THEN** el titular y la acción principal se leen sobre la fotografía de obra
- **AND** el texto no promete compra en línea ni disponibilidad confirmada

#### Scenario: Foto del hero
- **WHEN** se carga el hero
- **THEN** la imagen es el archivo local de la obra y no una URL externa

### Requirement: Posicionamiento regional
El texto visible MUST NOT presentar el negocio como exclusivo de un municipio. MUST poder mencionar Chía, Tabio, Cajicá, Yerbabuena y zonas cercanas como zona de atención, sin tiempos de entrega.

#### Scenario: Titular de portada
- **WHEN** se lee el hero
- **THEN** el negocio no queda limitado a un solo municipio
- **AND** no aparece una promesa nueva de envío o de plazo

### Requirement: Categorías del inventario semilla
La página MUST presentar como categorías navegables cada categoría distinta del inventario semilla que tenga al menos un producto.

#### Scenario: Elegir una categoría
- **WHEN** la persona elige una categoría
- **THEN** ve los productos de esa categoría del inventario semilla
- **AND** no cambia a una ruta nueva

### Requirement: Filtro sin coincidencias
Si la búsqueda o el filtro no coincide con ningún producto, la página MUST mostrar un estado vacío y una vía para pedir asesoría.

#### Scenario: Búsqueda vacía
- **WHEN** la selección no coincide con ningún producto del inventario semilla
- **THEN** no aparecen fichas inventadas
- **AND** se ofrece pedir asesoría por el contacto publicado

### Requirement: Ficha visible del producto
Cada producto destacado MUST mostrar la imagen ilustrativa del inventario, su nombre y la presentación cuando no esté por confirmar. MUST mostrar la marca referencial solo cuando no sea genérica. MUST NOT mostrar precio ni la etiqueta Disponible.

#### Scenario: Producto de referencia
- **WHEN** se muestra un producto del inventario semilla
- **THEN** se ven nombre e imagen ilustrativa
- **AND** no se ven precio ni la etiqueta Disponible

#### Scenario: Catálogo identificado como referencia
- **WHEN** se muestra la sección de productos
- **THEN** la página indica que el catálogo es de referencia y que precio y existencia están por confirmar

### Requirement: Panel del producto
Elegir un producto MAY abrir un panel en la misma página con los datos disponibles y la acción de cotizar. Esa acción MUST NOT navegar a una ruta nueva.

#### Scenario: Abrir el panel
- **WHEN** la persona elige un producto
- **THEN** ve sus datos en la misma página
- **AND** la dirección no cambia de ruta

### Requirement: Acción de cotización en la tarjeta
Cada tarjeta MUST ofrecer agregar el producto a la lista de cotización. Esa acción MUST NOT navegar a una ruta de producto.

#### Scenario: Agregar desde la tarjeta
- **WHEN** la persona activa agregar a cotización en una tarjeta
- **THEN** el producto entra en la lista de cotización
- **AND** la página permanece en la portada

### Requirement: Asesoría sin testimonios
La página MUST incluir una sección de asesoría con fotografía de construcción y una acción de contacto. MUST NOT incluir testimonios, cifras, certificaciones ni personas que no estén respaldados por un recurso real del repositorio.

#### Scenario: Sección de confianza
- **WHEN** se muestra la sección de asesoría
- **THEN** ofrece contactar al negocio
- **AND** no muestra opiniones ni estadísticas inventadas

### Requirement: Carrusel de marcas
La página MUST conservar el carrusel de marcas ya publicado, en movimiento y con la paleta nueva. MUST usar la lista y las imágenes ya existentes. Con movimiento reducido el carrusel MUST permanecer visible y quieto.

#### Scenario: Carrusel activo
- **WHEN** la persona no pide movimiento reducido
- **THEN** los nombres y las imágenes de marca ya publicados se desplazan en bucle

#### Scenario: Carrusel quieto
- **WHEN** el sistema pide movimiento reducido
- **THEN** el carrusel sigue visible y no se anima

### Requirement: Cierre y pie con datos publicados
La página MUST cerrar con una llamada a pedir asesoría o cotizar. El pie MUST mostrar solo el contacto ya publicado: WhatsApp, correo, Instagram, dirección y horarios. La navegación secundaria MUST apuntar a secciones o canales reales.

#### Scenario: Pie de página
- **WHEN** se muestra el pie
- **THEN** el teléfono, el correo, la dirección y los horarios coinciden con los ya publicados
- **AND** no aparecen datos de contacto nuevos

### Requirement: Página responsive
La página MUST poder usarse en móvil, tableta y escritorio sin desplazamiento horizontal. El orden MUST priorizar el contenido principal en móvil.

#### Scenario: Ancho móvil
- **WHEN** la página se ve a un ancho cercano a 390 píxeles
- **THEN** el hero, las categorías, los productos y el pie caben en la pantalla
- **AND** no hay desplazamiento horizontal

### Requirement: Movimiento reducido
Las animaciones MUST limitarse a una transición breve de aparición o de respuesta. MUST respetar `prefers-reduced-motion` y MUST NOT secuestrar el desplazamiento.

#### Scenario: Preferencia de movimiento reducido
- **WHEN** el sistema pide movimiento reducido
- **THEN** las animaciones de revelado, escala y carrusel no se ejecutan
- **AND** el contenido sigue disponible

### Requirement: Imágenes estables
La imagen del hero MUST cargarse con prioridad. Las imágenes fuera del primer viewport MUST cargarse de forma diferida. Cada imagen MUST reservar sus dimensiones para evitar saltos de layout.

#### Scenario: Imagen que no carga
- **WHEN** la imagen ilustrativa de un producto no puede mostrarse
- **THEN** la tarjeta conserva su espacio y no inserta otra fotografía externa

### Requirement: Estados de contenido
La página MUST definir presentación para carga, error, vacío y contenido no disponible. Un error al preparar el catálogo MUST mostrar un mensaje y una vía de contacto, sin simular que no hay productos.

#### Scenario: Error del catálogo
- **WHEN** el catálogo no puede prepararse
- **THEN** se muestra un mensaje de error y una acción de contacto
- **AND** no se muestra una cuadrícula vacía como si el resultado fuera correcto

### Requirement: Teclado en la página
Los controles de categorías, productos, cotización y contacto MUST ser alcanzables con teclado y MUST mostrar foco visible.

#### Scenario: Recorrido de la portada
- **WHEN** la persona recorre la página con el teclado
- **THEN** puede activar categorías, agregar a cotización y abrir contacto
- **AND** el foco es visible

### Requirement: SEO de la portada
El título, la descripción y el encabezado principal MUST describir el negocio sin limitarlo a un municipio y sin ofertas inventadas. MUST conservar la dirección canónica y el contacto ya publicado en los metadatos.

#### Scenario: Metadatos
- **WHEN** se lee el documento de la portada
- **THEN** hay un solo encabezado principal
- **AND** la descripción no añade precios, existencias ni plazos de entrega
