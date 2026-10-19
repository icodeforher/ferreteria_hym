# Spec Delta

## Purpose

Permite orientarse en la página principal, buscar en el catálogo visible y abrir la lista de cotización sin salir del sitio ni inventar rutas.

## ADDED Requirements

### Requirement: Logo oficial intacto
El encabezado MUST mostrar el archivo de logo ya publicado, sin recortarlo, recolorarlo ni sustituirlo por otro dibujo. MUST conservar su proporción.

#### Scenario: Logo en el encabezado
- **WHEN** la página principal se muestra en escritorio o en móvil
- **THEN** el logo visible es el archivo oficial existente y no una recreación

### Requirement: Navegación a secciones reales
La navegación MUST enlazar únicamente a secciones presentes en la página principal, incluidas categorías, catálogo y contacto.

#### Scenario: Destino existente
- **WHEN** la persona activa un enlace de la navegación principal
- **THEN** la página se desplaza a una sección que existe
- **AND** no abre una ruta de ficha, administración o pago

### Requirement: Búsqueda en la misma página
El encabezado MUST ofrecer un campo de búsqueda con nombre accesible. Confirmar la búsqueda MUST filtrar el catálogo visible en la misma página.

#### Scenario: Búsqueda con resultados
- **WHEN** la persona escribe un término que coincide con un producto visible y confirma la búsqueda
- **THEN** el catálogo muestra solo los productos coincidentes
- **AND** la dirección no cambia a una ruta nueva

#### Scenario: Búsqueda sin resultados
- **WHEN** la persona confirma un término que no coincide con ningún producto visible
- **THEN** el catálogo muestra un estado vacío y una forma de limpiar la búsqueda

### Requirement: Acceso a la cotización
El encabezado MUST ofrecer un acceso visible a la lista de cotización en escritorio y en el menú móvil. Ese acceso MUST mostrar la cantidad de líneas de la lista.

#### Scenario: Lista con productos
- **WHEN** la lista de cotización contiene productos
- **THEN** el acceso del encabezado muestra la cantidad y abre el resumen de esa misma lista

#### Scenario: Lista vacía
- **WHEN** la lista de cotización no contiene productos
- **THEN** el acceso sigue disponible y abre el estado vacío de la lista

### Requirement: Acciones diferenciadas
La acción de cotización MUST distinguirse visualmente de los enlaces de navegación. Su acento MUST ser naranja y MUST NOT ser amarillo.

#### Scenario: Acento de la acción principal
- **WHEN** se muestra el encabezado
- **THEN** la acción de cotización usa el acento naranja de la interfaz
- **AND** ningún control de la interfaz usa amarillo como acento

### Requirement: Menú móvil
En el ancho móvil, los destinos de navegación MUST presentarse en un menú que se abre y se cierra. El control MUST tener un nombre accesible. Elegir un destino MUST cerrar el menú.

#### Scenario: Abrir y cerrar el menú
- **WHEN** la persona activa el control del menú móvil
- **THEN** los destinos se muestran y el control indica el estado contrario
- **AND** activar de nuevo el control o pulsar Escape cierra el menú y devuelve el foco al control

#### Scenario: Elegir un destino
- **WHEN** la persona elige un destino dentro del menú móvil abierto
- **THEN** la página va a esa sección y el menú queda cerrado

### Requirement: Teclado y foco visible
Todos los controles del encabezado MUST poder usarse con teclado y MUST mostrar un foco visible.

#### Scenario: Recorrido por teclado
- **WHEN** la persona recorre el encabezado con el teclado
- **THEN** puede alcanzar el logo, la navegación, la búsqueda, la cotización y el menú móvil
- **AND** el control enfocado es visualmente distinguible
