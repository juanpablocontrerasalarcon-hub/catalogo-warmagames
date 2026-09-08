# Catálogo WarmaGames Bolivia

Catálogo web de rompecabezas, juegos de mesa y accesorios. Buscador
instantáneo, carrito, pago por QR y pedido automático por WhatsApp.
Gratis para siempre, alojado en GitHub Pages.

**149 productos** con fotos y precios reales del catálogo de Navidad 2025.

## Cómo publicarlo (una sola vez)

1. Crea una cuenta en [github.com](https://github.com) si no tienes.
2. Crea un repositorio nuevo. Nombre sugerido: `catalogo-warmagames`.
   Marca la opción **Public**.
3. Sube **el contenido** de esta carpeta (no la carpeta misma):
   `index.html`, `config.js`, `productos.js`, `logo.webp`, `hero.jpg`
   y la carpeta `fotos`.
4. Entra a **Settings** → **Pages** (menú de la izquierda).
5. En "Branch" elige `main` y la carpeta `/ (root)`, luego **Save**.
6. Espera 1-2 minutos. GitHub muestra el link del catálogo, algo como
   `https://usuario.github.io/catalogo-warmagames/`.

Ese link es el catálogo: va en el Linktree, en la bio de Instagram y
se comparte por WhatsApp.

## Cómo se administra el día a día

Hay dos formas. Elige la que le quede más cómoda a quien administre.

### Opción A (recomendada para alguien sin experiencia): Google Sheet

Los productos se escriben en una hoja de cálculo normal — filas y
columnas, como Excel — y el catálogo la lee sola. Nadie toca GitHub
para cambiar precios, agregar productos o marcar algo como agotado.

1. Abre `plantilla-productos-google-sheets.xlsx` (viene aquí, ya trae
   los 149 productos cargados) en Google Sheets: sheets.google.com →
   Archivo → Importar → Subir → "Crear una nueva hoja de cálculo".
2. Con la pestaña "Productos" abierta: Archivo → Compartir → Publicar
   en la Web. Elige la hoja "Productos" y el formato **CSV**. Presiona
   Publicar y copia el link.
3. En GitHub, abre `config.js`, pega ese link entre las comillas del
   campo `SHEET_CSV`, y presiona "Commit changes".
4. Listo. Desde ahí, cada edición en el Google Sheet aparece en la web
   1-2 minutos después.

Si el Sheet no carga (sin internet, link mal copiado), el catálogo
muestra automáticamente los productos de `productos.js` como respaldo.

### Opción B: editar productos.js en GitHub

Abre `productos.js`, toca el lápiz ("Edit this file"), cambia el texto
entre comillas y presiona **"Commit changes"**. El archivo tiene las
instrucciones escritas arriba con ejemplos.

### Fotos (en cualquiera de las dos opciones)

- Entra a la carpeta `fotos` en GitHub → botón "Add file" → "Upload
  files" → arrastra la foto → "Commit changes".
- Después escribe el nombre exacto del archivo en la columna `imagen`
  (Google Sheet) o en el campo `imagen` (productos.js).
- Para varias fotos del mismo producto, sepáralas con `|` en el campo
  `imagenes`. Ejemplo: `WG-001-2.jpg|WG-001-3.jpg`

## Ofertas, novedades y sellos

Dos columnas controlan todo esto, sin tocar diseño:

- **`precio_antes`**: escribe el precio viejo y deja el nuevo en `precio`.
  La web tacha el viejo y calcula sola el porcentaje (sello rojo `-22%`).
  Para quitar la oferta, borra `precio_antes`.
- **`etiqueta`**: sello azul sobre la foto. Escribe `Nuevo`, `Oferta`,
  `Últimas unidades`, `2x1` o lo que quieras.

Los productos con `precio_antes` aparecen solos en la sección "Ofertas de
la semana" del inicio y en el filtro **Ofertas**. Los que dicen "Nuevo"
entran a **Novedades**.

## Menú lateral

El botón ☰ abre un panel con: todo el catálogo, ofertas, novedades,
categorías y marcas (con el número de productos de cada una), lista de
deseos, carrito, envíos y las redes. Se arma solo con los productos que
existan; no hay que mantenerlo a mano.

## Lista de deseos

El corazón de cada producto lo guarda en la lista del cliente, y desde
ahí hay un botón para **enviar toda la lista por WhatsApp**. Así llegan
las peticiones ya escritas.

La lista se guarda en el navegador del cliente (no necesita cuenta ni
contraseña). Eso significa que si cambia de teléfono o borra los datos
del navegador, la lista se pierde. Para que sobreviva entre dispositivos
haría falta login con cuentas, que necesita un servidor.

## Envíos por departamento

Se configuran en `config.js`, en el campo `ENVIOS`. Cada departamento
tiene su modo de entrega y su explicación. En el carrito el cliente elige
su departamento, ve cómo le llega, y **escribe él mismo dónde quiere
recibir el pedido** en un campo de texto. Todo eso viaja dentro del
mensaje de WhatsApp.

- **La Paz** (entrega a domicilio): pide la dirección y además muestra un
  **mapa** para marcar el punto exacto, que se manda como link de Google
  Maps junto al pedido.
- **Los demás departamentos** (flota): el modo dice "lugar a coordinar" y
  el cliente escribe la terminal, la oficina de la flota o la dirección
  que prefiera. No se fija ninguna dirección desde la web.

## Productos agotados

Poniendo `Agotado` en la columna `stock`, el producto:

- muestra un sello gris **Agotado** y la foto atenuada,
- pierde el botón de agregar al carrito (queda solo el de WhatsApp, para
  que el cliente pregunte cuándo llega),
- y aparece en el filtro **Agotados**, tanto en los chips de categorías
  como en el menú lateral.

Sigue visible en el catálogo. Para esconderlo del todo hay que poner
`mostrar` en `No`.

## Cosas que se configuran en config.js

| Campo | Para qué sirve |
|---|---|
| `WHATSAPP` | Número al que llegan los pedidos y consultas |
| `TIENDA` | Nombre que aparece en la web |
| `MONEDA` | Símbolo antes del precio (Bs) |
| `INSTAGRAM`, `TIKTOK`, `FACEBOOK` | Usuarios de las redes (sin @) |
| `HERO_ARTE` | Dibujo de la portada. Vacío = usa `warma-art.jpg` |
| `HERO_FOTO` | Fondo difuminado. Vacío = usa `hero.jpg` |
| `SHEET_CSV` | Link del Google Sheet publicado (opcional) |
| `QR_ARCHIVO` | **QR de pago del banco** (falta subirlo) |
| `QR_GRUPO` | QR del grupo de WhatsApp (ya viene cargado) |

### Los dos QR (no confundirlos)

- **QR del grupo de WhatsApp** (`QR_GRUPO`): ya está puesto, sacado del
  catálogo en PDF. Aparece en la sección "Únete a nuestro grupo".
- **QR de pago** (`QR_ARCHIVO`): el QR bancario con el que los clientes
  pagan. **Falta un paso:** sube esa imagen a la carpeta `/fotos` con el
  nombre exacto **`qr-pago.jpg`**. `config.js` ya está apuntando a ese
  nombre, así que apenas la subas aparece sola en el carrito. Mientras
  tanto se muestra un aviso en su lugar.

## Portada

La portada tiene dos capas:

- **`warma-art.jpg`**: el dibujo de WarmaGames (el gato con las piezas).
  Se ve nítido al costado del título y completo en celular. Para
  cambiarlo, sube la imagen nueva a `/fotos` y ponla en `HERO_ARTE`.
- **`hero.jpg`**: el fondo difuminado detrás de todo. Para usar una foto
  propia (niños jugando, la tienda, etc.), súbela a `/fotos` y escribe su
  nombre en `HERO_FOTO`. Conviene una foto horizontal de 1600 px de ancho
  o más para que no se vea pixelada.

## Redes sociales

Se configuran en `config.js` con solo el nombre de usuario. Aparecen en
la barra superior, en la sección "Síguenos" y en el pie de página:

- Instagram: `warma_games`
- TikTok: `warmagames`
- Facebook: `WarmaGames`

Si alguna deja de usarse, se borra el texto entre comillas y desaparece
sola de toda la web.

## Qué no cubre esta versión

- No cobra con tarjeta en línea: el flujo es QR + comprobante por WhatsApp.
- El stock no se descuenta solo; se marca a mano ("Agotado").
- Los nombres de los productos se sacaron leyendo las fotos del catálogo
  en PDF. Están revisados, pero si alguno quedó mal escrito se corrige
  en el Google Sheet o en `productos.js` en un minuto.

## Costo

US$0 al año. GitHub Pages es gratuito sin límite de tiempo. El dominio
propio (ej. warmagames.com, ~US$11/año) es opcional y se puede agregar
después sin rehacer nada.
