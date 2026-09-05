# Catálogo WarmaGames

Catálogo web de rompecabezas y juegos de mesa. Carrito, pago por QR y pedido
automático por WhatsApp. Gratis para siempre, alojado en GitHub Pages.

## Cómo publicarlo (una sola vez)

1. Crea una cuenta en [github.com](https://github.com) si WarmaGames no
   tiene una (gratis, con el correo de la tienda).
2. Crea un repositorio nuevo. Nombre sugerido: `catalogo-warmagames`.
   Marca la opción **Public**.
3. Sube todos los archivos de esta carpeta (`index.html`, `config.js`,
   `productos.js`, `logo.webp`, la carpeta `fotos`) arrastrándolos a la
   página del repositorio con "Add file" → "Upload files".
4. Entra a **Settings** → **Pages** (menú de la izquierda).
5. En "Branch" elige `main` y la carpeta `/ (root)`, luego **Save**.
6. Espera 1-2 minutos. GitHub muestra el link del catálogo arriba,
   algo como `https://usuario.github.io/catalogo-warmagames/`.

Ese link es el catálogo. Se puede poner en el Linktree, en la bio de
Instagram y compartir por WhatsApp.

## Cómo se administra el día a día

Todo se edita **desde el navegador, dentro de GitHub**, sin instalar nada:

- **Agregar, quitar, marcar como vendido o agotado** → editar `productos.js`.
  Ese archivo tiene instrucciones escritas arriba, con ejemplos.
- **Subir una foto nueva** → carpeta `fotos`, botón "Add file" → "Upload files".
  Instrucciones en `fotos/LEEME.txt`.
- **Cambiar el número de WhatsApp, el nombre de la tienda o el QR de pago**
  → editar `config.js`.

Para editar un archivo: ábrelo en GitHub, toca el ícono del lápiz
("Edit this file"), cambia el texto y presiona el botón verde
**"Commit changes"**. El catálogo se actualiza solo, en 1 o 2 minutos.

No hace falta saber programar. Es texto simple entre comillas.

## Qué no cubre esta primera versión

- No cobra con tarjeta en línea: el flujo es QR + comprobante por WhatsApp.
- El stock no se descuenta solo; hay que marcarlo manualmente en `productos.js`.
- Editar `productos.js` a mano es más simple que un panel con formularios,
  pero no es tan cómodo como uno. Es la versión que se puede tener operando
  hoy, sin costo. Un panel con botones es una mejora posible más adelante.

## Costo

US$0 al año. GitHub Pages es gratuito sin límite de tiempo. El dominio
propio (ej. warmagames.com, ~US$11/año) es opcional y se puede agregar
después sin rehacer nada.
