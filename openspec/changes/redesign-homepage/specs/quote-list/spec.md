# Spec Delta

## Purpose

Mantiene una sola lista de cotización mientras la persona navega y prepara un mensaje de WhatsApp con los productos y las cantidades elegidas.

## ADDED Requirements

### Requirement: Una sola lista
La página MUST mantener una única lista de cotización. El encabezado, las tarjetas y el resumen MUST leer y modificar esa misma lista.

#### Scenario: Alta reflejada en todo el sitio
- **WHEN** la persona agrega un producto desde una tarjeta
- **THEN** el resumen y el acceso del encabezado muestran ese mismo producto

### Requirement: Agregar un producto
Agregar un producto MUST incluir su nombre y su cantidad. Si el producto ya está en la lista, MUST incrementar su cantidad en uno. MUST NOT crear una línea duplicada.

#### Scenario: Primer agregado
- **WHEN** la persona agrega un producto que no está en la lista
- **THEN** la lista contiene una línea de ese producto con cantidad 1

#### Scenario: Producto repetido
- **WHEN** la persona agrega un producto que ya está en la lista
- **THEN** la cantidad de esa línea aumenta en uno
- **AND** no aparece una segunda línea del mismo producto

### Requirement: Cambiar la cantidad
El resumen MUST permitir aumentar y disminuir la cantidad. La cantidad persistida MUST ser un entero mayor o igual que 1. El control de disminución en 1 MUST NOT guardar cero ni un valor negativo.

#### Scenario: Aumentar cantidad
- **WHEN** la persona aumenta la cantidad de una línea
- **THEN** esa línea muestra la nueva cantidad

#### Scenario: Disminuir en el mínimo
- **WHEN** la línea tiene cantidad 1 y la persona intenta disminuirla
- **THEN** la cantidad permanece en 1 hasta que la línea se quite con la acción de eliminar

### Requirement: Quitar un producto
Cada línea MUST ofrecer una acción para quitarla. Al quitarla, MUST desaparecer de la lista y del contador.

#### Scenario: Eliminar una línea
- **WHEN** la persona quita un producto de la lista
- **THEN** ese producto deja de aparecer en el resumen y en el contador

### Requirement: Resumen vacío
Cuando la lista no tiene productos, el resumen MUST explicar que está vacía y MUST ofrecer volver a los productos. MUST NOT presentar una cotización con líneas ficticias.

#### Scenario: Abrir la lista vacía
- **WHEN** la persona abre la cotización sin productos
- **THEN** ve un estado vacío y una vía para volver al catálogo

### Requirement: Conservar la lista
La lista MUST conservarse mientras la persona recorre la página y después de recargar. MUST restaurar nombres y cantidades. Si el dato guardado es ilegible, MUST empezar con una lista vacía y la página MUST seguir utilizable.

#### Scenario: Recargar con productos
- **WHEN** la persona recarga la página después de armar una lista
- **THEN** el resumen muestra los mismos productos y cantidades

#### Scenario: Dato guardado ilegible
- **WHEN** el dato guardado de la lista no puede leerse
- **THEN** la lista queda vacía y la página no muestra un error bloqueante

### Requirement: Mensaje de WhatsApp
Enviar la cotización MUST abrir WhatsApp con el número ya publicado y un mensaje codificado. El mensaje MUST incluir el nombre y la cantidad de cada línea, y la referencia solo cuando exista. MUST NOT incluir precio ni existencia. La interfaz MUST NOT afirmar que el mensaje fue enviado o que la compra quedó confirmada.

#### Scenario: Enviar una lista con productos
- **WHEN** la persona envía una lista con productos por WhatsApp
- **THEN** se abre WhatsApp con esos nombres y cantidades
- **AND** la página no confirma un envío ni una compra

#### Scenario: Enviar sin productos
- **WHEN** la persona intenta enviar la cotización con la lista vacía
- **THEN** no se abre un mensaje que enumera productos
- **AND** el resumen mantiene el estado vacío

### Requirement: Misma lista en móvil
En móvil, la persona MUST poder ver el resumen, cambiar cantidades, quitar productos y preparar WhatsApp sobre la misma lista que en escritorio.

#### Scenario: Resumen en móvil
- **WHEN** la persona abre la cotización en un ancho móvil
- **THEN** puede modificar cantidades, quitar líneas y preparar el mensaje
- **AND** el encabezado refleja el mismo contenido

### Requirement: Sin datos sensibles
La lista MUST guardar solo identificador, nombre, referencia existente y cantidad. MUST NOT guardar datos de pago ni información personal de la persona.

#### Scenario: Contenido guardado
- **WHEN** la lista se conserva para una visita posterior
- **THEN** el dato guardado se limita a los productos y sus cantidades
