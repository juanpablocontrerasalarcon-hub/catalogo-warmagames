/*
  ARCHIVO DE CONFIGURACIÓN — WarmaGames
  =====================================
  Aquí se cambian los datos generales de la tienda.
  Esto casi nunca se toca (una vez configurado, se olvida).

  Para editarlo: entra a este archivo en GitHub, toca el lápiz
  (Edit this file), cambia el texto entre comillas y presiona
  "Commit changes" (botón verde). En 1 o 2 minutos el sitio se
  actualiza solo.

  IMPORTANTE: no borres las comillas " " ni las comas al final
  de cada línea. Si rompes el formato, avísame y lo arreglamos.
*/

window.CONFIG = {
  // Número de WhatsApp con código de país, sin + ni espacios.
  WHATSAPP: "59163075159",

  // Nombre de la tienda, tal como debe aparecer en la web.
  TIENDA: "WarmaGames",

  // Símbolo de moneda que se muestra antes de cada precio.
  MONEDA: "Bs",

  // ---------------------------------------------------------------
  // REDES SOCIALES (solo el usuario, sin @ y sin el link completo)
  // ---------------------------------------------------------------
  // Si alguna red no se usa, déjala vacía ("") y desaparece sola
  // de la web.
  // Instagram: https://www.instagram.com/warma_games/
  INSTAGRAM: "warma_games",
  // TikTok: https://www.tiktok.com/@warmagames
  TIKTOK: "warmagames",
  // Facebook: https://www.facebook.com/WarmaGames/
  FACEBOOK: "WarmaGames",

  // ---------------------------------------------------------------
  // PORTADA (lo que se ve arriba del todo)
  // ---------------------------------------------------------------
  // La portada tiene dos partes:
  //
  // 1) EL DIBUJO DE WARMAGAMES (el gato con las piezas), que se ve
  //    nítido al costado del título. Está en "warma-art.jpg".
  //    Para cambiarlo: sube la imagen nueva a /fotos y escribe aquí
  //    su nombre, por ejemplo: "fotos/nuevo-arte.jpg"
  HERO_ARTE: "",

  // 2) EL FONDO DIFUMINADO detrás de todo. Está en "hero.jpg".
  //    Para usar una foto propia de fondo (por ejemplo, niños
  //    jugando): súbela a /fotos y escribe aquí su nombre, por
  //    ejemplo: "portada-ninos.jpg". Conviene una foto horizontal
  //    grande (1600 px de ancho o más) para que no se vea pixelada.
  //    Si lo dejas vacío (""), se usa hero.jpg.
  HERO_FOTO: "",

  // ---------------------------------------------------------------
  // GOOGLE SHEET DE PRODUCTOS (opcional pero recomendado)
  // ---------------------------------------------------------------
  // Link del Google Sheet publicado en formato CSV. Sirve para que la
  // persona que administra el catálogo solo edite una hoja de cálculo
  // y nunca toque código.
  //
  // Cómo conseguirlo (una sola vez):
  // 1. Abre "plantilla-productos-google-sheets.xlsx" en Google Sheets
  //    (sheets.google.com > Archivo > Importar > Subir).
  // 2. Con la hoja "Productos" abierta: Archivo > Compartir >
  //    Publicar en la Web. Elige la hoja "Productos" y el formato CSV.
  // 3. Presiona Publicar y copia el link que te da Google.
  // 4. Pégalo aquí abajo, entre las comillas.
  //
  // Si lo dejas vacío (""), el catálogo usa productos.js.
  SHEET_CSV: "",

  // ---------------------------------------------------------------
  // QR DE PAGO (el del banco, para que los clientes paguen)
  // ---------------------------------------------------------------
  // Ya está configurado para usar el archivo "qr-pago.jpg".
  // FALTA UN PASO: sube la imagen del QR de cobro de la tienda a la
  // carpeta /fotos en GitHub, con ese nombre exacto: qr-pago.jpg
  // (Add file > Upload files > arrastra la imagen > Commit changes).
  // Apenas la subas, aparece sola en la pantalla de pago del carrito.
  //
  // OJO: este NO es el QR del grupo de WhatsApp, es el QR bancario.
  // Si prefieres otro nombre de archivo, cámbialo aquí abajo.
  QR_ARCHIVO: "qr-pago.jpg",

  // Textos de la pantalla de pago.
  QR_TITULO: "Paga escaneando el QR",
  QR_NOTA: "Escanea el código con la app de tu banco y envía la captura del comprobante por WhatsApp.",

  // ---------------------------------------------------------------
  // ENVÍOS POR DEPARTAMENTO
  // ---------------------------------------------------------------
  // Cada departamento tiene:
  //   modo ..... cómo llega el pedido (texto corto, en azul)
  //   detalle .. explicación para el cliente
  //   mapa ..... true solo donde se entrega a domicilio; muestra el
  //              mapa para que el cliente marque su dirección.
  //
  // El cliente escribe él mismo dónde quiere recibir el pedido, en un
  // campo del carrito, y ese dato viaja en el mensaje de WhatsApp.
  //
  // Para quitar un departamento, borra su bloque completo.
  ENVIOS: {
    "La Paz": {
      modo: "Entrega a domicilio en moto",
      detalle: "Coordinamos la entrega el mismo día en La Paz y El Alto por Yango o InDrive. El costo del envío lo cubre el cliente y se paga al recibir el pedido.",
      mapa: true
    },
    "Cochabamba": {
      modo: "Envío por flota · lugar a coordinar",
      detalle: "Enviamos por flota y coordinamos contigo el punto de entrega por WhatsApp. Te pasamos la guía para el recojo.",
      mapa: false
    },
    "Santa Cruz": {
      modo: "Envío por flota · lugar a coordinar",
      detalle: "Enviamos por flota y coordinamos contigo el punto de entrega por WhatsApp. Te pasamos la guía para el recojo.",
      mapa: false
    },
    "Oruro": {
      modo: "Envío por flota · lugar a coordinar",
      detalle: "Enviamos por flota y coordinamos contigo el punto de entrega por WhatsApp. Te pasamos la guía para el recojo.",
      mapa: false
    },
    "Potosí": {
      modo: "Envío por flota · lugar a coordinar",
      detalle: "Enviamos por flota y coordinamos contigo el punto de entrega por WhatsApp. Te pasamos la guía para el recojo.",
      mapa: false
    },
    "Chuquisaca (Sucre)": {
      modo: "Envío por flota · lugar a coordinar",
      detalle: "Enviamos por flota y coordinamos contigo el punto de entrega por WhatsApp. Te pasamos la guía para el recojo.",
      mapa: false
    },
    "Tarija": {
      modo: "Envío por flota · lugar a coordinar",
      detalle: "Enviamos por flota y coordinamos contigo el punto de entrega por WhatsApp. Te pasamos la guía para el recojo.",
      mapa: false
    },
    "Beni (Trinidad)": {
      modo: "Envío por flota · lugar a coordinar",
      detalle: "Enviamos por flota y coordinamos contigo el punto de entrega por WhatsApp. El tiempo de llegada depende de la ruta.",
      mapa: false
    },
    "Pando (Cobija)": {
      modo: "Envío por flota · lugar a coordinar",
      detalle: "Enviamos por flota y coordinamos contigo el punto de entrega por WhatsApp. El tiempo de llegada depende de la ruta.",
      mapa: false
    }
  },

  // Nota general que aparece al final de la página de envíos.
  ENVIO_NOTA: "El costo del envío no está incluido en el precio de los productos. Te lo confirmamos por WhatsApp según tu departamento y el tamaño del pedido.",

  // Punto donde se centra el mapa de entrega a domicilio (La Paz).
  // Se escribe como [latitud, longitud].
  MAPA_CENTRO: [-16.4955, -68.1336],

  // ---------------------------------------------------------------
  // DATOS PARA TRANSFERENCIA (aparecen debajo del QR, en el carrito)
  // ---------------------------------------------------------------
  // Escribe aquí entre las comillas el nombre del titular de la cuenta,
  // el número de cuenta y el banco. Aparecen como un recuadro en la
  // pantalla de pago, con un botón para copiar el número de cuenta,
  // y también como un paso más en las instrucciones.
  //
  // Si dejas los tres vacíos (""), el recuadro no se muestra y la
  // pantalla de pago queda solo con el QR, como está ahora.
  PAGO_TITULAR: "",
  PAGO_CUENTA: "",
  PAGO_BANCO: "",

  // ---------------------------------------------------------------
  // QR DEL GRUPO DE WHATSAPP (el que estaba en el catálogo en PDF)
  // ---------------------------------------------------------------
  // Se muestra en la sección "Únete a nuestro grupo" de la página.
  // Si el grupo cambia, sube el QR nuevo a /fotos y cambia el nombre.
  QR_GRUPO: "qr-grupo-whatsapp.jpg"
};
