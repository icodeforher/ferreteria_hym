# Spec Delta

## Purpose

La portada muestra la ferretería con un recorrido visual. No arma una cotización.

## ADDED Requirements

### Requirement: Banner cinematográfico
La portada MUST abrir con el banner de `/img/hero-obra.jpg`, a sangre, y el titular “Construimos tus ideas” como único encabezado principal. Sobre el titular MUST verse “Ferretería en Chía”. Las cuatro notas MUST quedar en el borde inferior de la fotografía. El banner MUST NOT incluir buscador ni lista.

#### Scenario: Llegada con el banner
- **WHEN** la persona abre la portada
- **THEN** ve la fotografía de la obra y el titular “Construimos tus ideas”
- **AND** ve “Ferretería en Chía” sobre el titular

#### Scenario: Notas al borde
- **WHEN** la persona ve el banner
- **THEN** las cuatro notas quedan en el borde inferior de la fotografía

#### Scenario: Banner sin cotización
- **WHEN** la persona ve el banner
- **THEN** no ve buscador ni lista

### Requirement: Recorrido visual
Debajo del banner la portada MUST mostrar doce bandas a pantalla, en este orden: La obra, Cemento, Agregados, Estructura, Acero, Mampostería, Tubería, Instalaciones, Madera, Herramientas, Taller y Acabados. Cada banda MUST mostrar su fotografía a sangre, su título y un párrafo sobre ese material, sin precios ni existencias.

#### Scenario: Bandas en orden
- **WHEN** la persona baja por la portada
- **THEN** ve esas doce bandas, cada una con su título y su párrafo sobre la fotografía

### Requirement: Parallax
En escritorio, al hacer scroll, la fotografía del banner y la de cada banda MUST moverse más lento que el texto y MUST usar solo transform. En móvil y cuando el sistema pide reducir el movimiento, esas fotografías MUST permanecer quietas.

#### Scenario: Scroll en escritorio
- **WHEN** la persona hace scroll en escritorio y no pidió reducir el movimiento
- **THEN** la foto se desplaza más lento que el título

#### Scenario: Sin parallax
- **WHEN** la persona usa móvil o el sistema pide reducir el movimiento
- **THEN** la foto no se desplaza por parallax

### Requirement: Cotización fuera de la portada
La portada MUST NOT mostrar buscador, lista, cajón de cotización, enlace Productos ni el botón Pedir cotización. En escritorio el encabezado MUST mostrar “El Maestro Ferretería” a la derecha. WhatsApp MUST quedar como contacto en el botón fijo, en el menú móvil y en el pie.

#### Scenario: Sin armar lista
- **WHEN** la persona recorre la portada
- **THEN** no ve buscador, lista, cajón ni Pedir cotización
- **AND** puede abrir WhatsApp desde el botón fijo y desde el pie

#### Scenario: Marca en el encabezado
- **WHEN** la persona ve el encabezado en escritorio
- **THEN** lee El Maestro Ferretería a la derecha

### Requirement: Título de búsqueda
La portada MUST usar el título “Ferretería en Chía | Materiales de construcción | El Maestro”.

#### Scenario: Resultado de búsqueda
- **WHEN** la persona encuentra la portada en un buscador
- **THEN** el título nombra ferretería y Chía

### Requirement: Contacto a la vista
La portada MUST mostrar un botón de WhatsApp fijo durante el scroll. El banner MUST enlazar “Cómo llegar” a la sección del mapa. Esa sección MUST mostrar el mapa en 4.8529977,-74.062369, la dirección publicada y un botón de WhatsApp. El pie MUST NOT repetir el mapa.

#### Scenario: WhatsApp durante el recorrido
- **WHEN** la persona baja por las bandas
- **THEN** el botón de WhatsApp sigue visible

#### Scenario: Cómo llegar
- **WHEN** la persona elige Cómo llegar en el banner
- **THEN** llega a la sección del mapa
