# Spec Delta

## Purpose

La portada abre con el banner para que la persona escriba qué necesita, elija materiales y los sume a la lista que se enviará por WhatsApp.

## ADDED Requirements

### Requirement: Banner cinematográfico
La portada MUST abrir con el banner de `/img/hero-obra.jpg`, a sangre, y el titular “Construimos tus ideas” como único encabezado principal. La búsqueda del banner MUST mostrar sus resultados debajo y MUST NOT abrir el listado de productos. Las cuatro notas MUST quedar en el borde inferior de la fotografía.

#### Scenario: Llegada con el banner
- **WHEN** la persona abre la portada
- **THEN** ve la fotografía de la obra y el titular “Construimos tus ideas”
- **AND** la búsqueda queda en el banner

#### Scenario: Búsqueda del banner
- **WHEN** la persona envía un texto desde la búsqueda del banner
- **THEN** ve debajo las coincidencias del inventario
- **AND** no ve un botón para agregar la frase escrita
- **AND** la vista sigue siendo la portada

#### Scenario: Búsqueda sin estirar el banner
- **WHEN** la persona escribe en escritorio y aparecen coincidencias
- **THEN** el alto de la fotografía no cambia
- **AND** las coincidencias se desplazan dentro del panel

#### Scenario: Notas al borde
- **WHEN** la persona ve el banner
- **THEN** las cuatro notas quedan en el borde inferior de la fotografía

### Requirement: Parallax del banner
En escritorio, al hacer scroll, la fotografía del banner MUST moverse más lento que el contenido y MUST usar solo transform. En móvil y cuando el sistema pide reducir el movimiento, la fotografía MUST permanecer quieta.

#### Scenario: Scroll en escritorio
- **WHEN** la persona hace scroll en escritorio y no pidió reducir el movimiento
- **THEN** la foto se desplaza más lento que el titular

#### Scenario: Sin parallax
- **WHEN** la persona usa móvil o el sistema pide reducir el movimiento
- **THEN** la foto no se desplaza por parallax

### Requirement: Una sola búsqueda
La portada MUST usar un solo texto de búsqueda, el de la caja del banner. MUST NOT mostrar dos cajas a la vez ni un chat. En móvil, cuando esa caja sale de la pantalla, MUST mostrar la misma búsqueda en una barra fija. En escritorio y en el listado esa barra MUST NOT aparecer. Si hay texto, MUST ofrecer limpiarlo sin borrar la lista.

#### Scenario: Portada sin cajas repetidas
- **WHEN** la persona abre la portada y la caja del banner se ve
- **THEN** ve una sola caja de búsqueda, la del banner
- **AND** no ve la barra compacta ni un chat

#### Scenario: Banner fuera de pantalla en móvil
- **WHEN** la caja del banner ya no se ve en móvil
- **THEN** aparece la barra compacta con el mismo texto
- **AND** escribir ahí actualiza las coincidencias

#### Scenario: Escritorio sin barra fija
- **WHEN** la caja del banner sale de la pantalla en escritorio
- **THEN** no aparece la barra compacta

#### Scenario: Limpiar búsqueda
- **WHEN** hay texto y la persona elige Limpiar búsqueda
- **THEN** el campo queda vacío
- **AND** la lista de cotización no cambia

### Requirement: Sugerencias del inventario
Si el texto del banner coincide con el inventario semilla, la portada MUST mostrar esas coincidencias con nombre y, cuando existan, marca distinta de genérica y presentación que no diga “por confirmar”. MUST NOT mostrar precio ni la palabra “Disponible”.

#### Scenario: Hay coincidencias
- **WHEN** la persona escribe un texto que coincide con uno o más materiales del inventario
- **THEN** los resultados muestran esas coincidencias sin precio y sin “Disponible”

#### Scenario: Sin coincidencias
- **WHEN** el texto no coincide con ningún material
- **THEN** los resultados no inventan productos
- **AND** no ofrecen agregar la frase escrita

### Requirement: Agregar una ficha
Los resultados MUST ofrecer Agregar solo en fichas del inventario. MUST NOT ofrecer agregar el texto escrito. Cada Agregar MUST sumar esa ficha, con su referencia, a la lista.

#### Scenario: Ficha del inventario
- **WHEN** la persona elige Agregar en una coincidencia
- **THEN** esa ficha entra a la lista de cotización

#### Scenario: Texto sin ficha
- **WHEN** el texto no coincide con ninguna ficha
- **THEN** no hay un botón para agregar esa frase

### Requirement: Lista visible
En escritorio la lista MUST quedar a la derecha de la búsqueda, dentro del banner, junto a las coincidencias. En móvil MUST quedar debajo de las coincidencias. Las líneas MUST desplazarse dentro de la tarjeta. El título y el envío MUST quedar visibles fuera de ese desplazamiento. Al entrar una línea que no se ve, la tarjeta MUST llevar el scroll hasta ella y marcarla un momento.

#### Scenario: Escritorio dentro del banner
- **WHEN** la persona usa la portada en escritorio
- **THEN** ve la lista a la derecha de la búsqueda, sobre el banner
- **AND** agregar una ficha no sale del banner

#### Scenario: Suma visible
- **WHEN** la persona agrega un material desde los resultados
- **THEN** la lista visible incluye ese material sin cambiar de ruta

#### Scenario: Varias líneas
- **WHEN** la lista tiene varias líneas
- **THEN** la tarjeta no crece con cada una y el alto del banner no cambia
- **AND** las líneas se desplazan por dentro, se ven los controles de cantidad y el envío sigue visible

#### Scenario: Línea que entra
- **WHEN** la persona agrega un material y esa línea no se ve dentro de la tarjeta
- **THEN** la lista se desplaza hasta esa línea
- **AND** la línea se marca un momento

### Requirement: Envío desde la portada
La portada MUST ofrecer “Enviar lista por WhatsApp” cuando la lista tiene al menos una línea. Con la lista vacía MUST NOT abrir un mensaje de productos.

#### Scenario: Lista con materiales
- **WHEN** la lista tiene líneas y la persona elige enviar
- **THEN** se abre WhatsApp con el número publicado y el mensaje de esas líneas

#### Scenario: Lista vacía
- **WHEN** la lista no tiene líneas
- **THEN** la portada no abre un mensaje de productos

### Requirement: Mapa en el pie
El pie MUST mostrar el mapa de la tienda con las coordenadas 4.8646,-74.0522, junto a la dirección publicada.

#### Scenario: Llegada al contacto
- **WHEN** la persona llega al pie
- **THEN** ve el mapa de esa ubicación
