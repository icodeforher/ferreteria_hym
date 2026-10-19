# Spec Delta

## Purpose

Mantiene una sola lista de cotización, con materiales del inventario o escritos por la persona, y prepara el mensaje de WhatsApp con nombres y cantidades.

## ADDED Requirements

### Requirement: Una sola lista
La portada, el encabezado, el listado de productos y el resumen MUST leer y modificar la misma lista de cotización.

#### Scenario: Alta reflejada en todo el sitio
- **WHEN** la persona agrega un material desde la portada o desde el listado
- **THEN** el resumen y el acceso del encabezado muestran esa misma línea

### Requirement: Agregar un material del inventario
Agregar un material del inventario MUST guardar su nombre y su referencia. Si ya está en la lista, MUST incrementar la cantidad en uno y MUST NOT crear otra línea.

#### Scenario: Primer agregado
- **WHEN** la persona agrega un material del inventario que no está en la lista
- **THEN** la lista contiene una línea con cantidad 1 y su referencia

#### Scenario: Material repetido
- **WHEN** la persona agrega un material del inventario que ya está en la lista
- **THEN** la cantidad de esa línea aumenta en uno

### Requirement: Agregar un texto libre
Agregar un texto escrito MUST guardar ese texto como nombre, sin inventar referencia, precio ni existencia. El mismo texto normalizado MUST incrementar la cantidad y MUST NOT duplicar la línea.

#### Scenario: Texto nuevo
- **WHEN** la persona agrega un texto que no está en la lista
- **THEN** aparece una línea con ese nombre, cantidad 1 y sin referencia

#### Scenario: Texto repetido
- **WHEN** la persona agrega otra vez el mismo texto
- **THEN** la cantidad de esa línea aumenta en uno

### Requirement: Cambiar la cantidad
El resumen MUST permitir aumentar y disminuir la cantidad. La cantidad persistida MUST ser un entero mayor o igual que 1. Disminuir en 1 MUST NOT guardar cero.

#### Scenario: Disminuir en el mínimo
- **WHEN** la línea tiene cantidad 1 y la persona intenta disminuirla
- **THEN** la cantidad permanece en 1 hasta que la línea se quite

### Requirement: Quitar una línea
Cada línea MUST ofrecer quitarla. Al quitarla, MUST desaparecer de la lista y del contador.

#### Scenario: Quitar
- **WHEN** la persona quita una línea
- **THEN** esa línea deja de mostrarse

### Requirement: Persistencia
La lista MUST guardarse en el navegador con versión. Un JSON ilegible MUST dejar la lista vacía sin romper la página. Recargar MUST conservar una lista válida.

#### Scenario: Recarga
- **WHEN** la persona recarga con una lista válida guardada
- **THEN** las mismas líneas y cantidades siguen visibles

#### Scenario: Datos ilegibles
- **WHEN** el valor guardado no es un JSON válido de la versión actual
- **THEN** la página muestra la lista vacía

### Requirement: Mensaje de WhatsApp
El mensaje MUST ir al número `573124954231` e incluir nombre y cantidad de cada línea. La referencia MUST incluirse solo si la línea la tiene. Abrir WhatsApp MUST NOT presentarse como un envío confirmado. La lista vacía MUST NOT abrir un mensaje de productos.

#### Scenario: Línea con referencia
- **WHEN** la persona envía una lista con un material del inventario
- **THEN** el mensaje incluye su nombre, su referencia y su cantidad

#### Scenario: Línea escrita
- **WHEN** la persona envía una lista que solo tiene un texto libre
- **THEN** el mensaje incluye ese texto y su cantidad, sin una referencia inventada
