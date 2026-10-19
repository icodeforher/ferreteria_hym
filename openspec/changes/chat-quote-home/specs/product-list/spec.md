# Spec Delta

## Purpose

El listado de texto de la cotización permanece en el código y no forma parte de la portada.

## REMOVED Requirements

### Requirement: Acceso al listado
**Reason**: La portada ya no arma cotizaciones.
**Migration**: El componente del listado sigue en el repositorio, sin enlace.

### Requirement: Contenido de cada referencia
**Reason**: La portada ya no muestra ese listado.
**Migration**: Ninguna en la interfaz.

### Requirement: Búsqueda en el listado
**Reason**: La portada ya no muestra ese listado.
**Migration**: Ninguna en la interfaz.

### Requirement: Agregar desde el listado
**Reason**: La portada ya no muestra ese listado.
**Migration**: Ninguna en la interfaz.

## ADDED Requirements

### Requirement: Listado fuera de la portada
La portada MUST NOT enlazar a `#productos` ni mostrar el listado de referencias.

#### Scenario: Portada sin listado
- **WHEN** la persona abre la portada
- **THEN** no ve un enlace Productos ni el listado de referencias
