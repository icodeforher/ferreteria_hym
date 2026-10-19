# Spec Delta

## Purpose

Ofrece un listado de texto con las referencias del inventario semilla para que la persona las busque y las sume a la misma cotización, sin depender de fotos.

## ADDED Requirements

### Requirement: Acceso al listado
El encabezado MUST enlazar a `#productos`. Esa vista MUST mostrar las referencias del inventario semilla en texto y MUST permanecer en la misma aplicación, sin una ruta de ficha.

#### Scenario: Abrir el listado
- **WHEN** la persona sigue el enlace del encabezado
- **THEN** ve el listado de referencias en `#productos`

### Requirement: Contenido de cada referencia
Cada referencia MUST mostrar nombre y, cuando existan, marca distinta de genérica y presentación que no diga “por confirmar”. MUST NOT mostrar precio ni la palabra “Disponible”. Las fotos MUST NOT ser necesarias para usar el listado.

#### Scenario: Referencia visible
- **WHEN** el listado muestra un material
- **THEN** se lee su nombre sin precio y sin “Disponible”

### Requirement: Búsqueda en el listado
El listado MUST filtrar por el texto escrito. Una búsqueda sin coincidencias MUST mostrar un estado vacío y una forma de limpiar, sin inventar materiales.

#### Scenario: Sin coincidencias
- **WHEN** la búsqueda no coincide con ninguna referencia
- **THEN** el listado muestra el estado vacío y no inventa tarjetas

### Requirement: Agregar desde el listado
Cada referencia MUST poder agregarse a la lista de cotización de la portada. Agregar MUST NOT cambiar de sitio ni exigir una foto.

#### Scenario: Agregar una referencia
- **WHEN** la persona agrega una referencia desde el listado
- **THEN** esa referencia queda en la misma lista de cotización
