/*
  ARCHIVO DE PRODUCTOS — WarmaGames
  =================================
  Este es el único archivo que se toca seguido.
  Cada producto es un bloque entre { llaves }.

  PARA AGREGAR UN PRODUCTO:
  1. Copia un bloque completo (desde { hasta la }, con la coma final).
  2. Pégalo antes del último ] (al final del archivo).
  3. Cambia los valores entre comillas por los del producto nuevo.
  4. Sube la foto a la carpeta /fotos (arrastrándola desde tu compu
     o celular) y escribe su nombre exacto en "imagen".
  5. Presiona "Commit changes" (botón verde). Espera 1-2 minutos
     y refresca la página del catálogo.

  PARA QUITAR UN PRODUCTO:
  Borra su bloque completo, desde la { hasta la } con su coma.

  PARA MARCARLO COMO VENDIDO O AGOTADO:
  Cambia stock: "Disponible" por stock: "Agotado" (con comillas).

  PARA OCULTARLO SIN BORRARLO:
  Cambia mostrar: "Si" por mostrar: "No".

  REGLAS IMPORTANTES:
  - "id" no se repite nunca entre productos.
  - "precio" es solo el número, sin "Bs" y sin puntos (280, no 280.-).
    Si no tienes el precio, deja "precio": "" y la web muestra "Consultar".
  - "imagen" es el nombre exacto del archivo dentro de /fotos
    (ojo con mayúsculas/minúsculas y acentos). Si lo dejas vacío,
    se muestra un recuadro "Sin foto" y todo lo demás sigue igual.
  - No borres ninguna coma , ni ninguna llave { } — si el archivo
    se rompe, el catálogo entero deja de cargar. Ante la duda,
    copia un bloque existente y solo cambia los valores.

  NOTA: estos 6 productos son reales, sacados del catálogo de
  Navidad 2025 de WarmaGames (precios y fotos reales). Es la
  primera tanda — hay más productos en el catálogo en PDF que se
  irán agregando por partes.
*/

window.PRODUCTOS = [
  {
    id: "NOV-1000-POKE",
    nombre: "Pokémon Edición Original",
    categoria: "Rompecabezas",
    marca: "Novelty",
    piezas: "1000",
    precio: "195",
    stock: "Disponible",
    imagen: "NOV-1000-POKE.jpg",
    descripcion: "Rompecabezas con más de 40 Pokémon ilustrados en un mosaico de paneles de colores. Apto para edad 10+.",
    mostrar: "Si"
  },
  {
    id: "CLE-1500-CARRUSEL",
    nombre: "Classic Christmas Collection · Carrusel Navideño",
    categoria: "Rompecabezas",
    marca: "Clementoni",
    piezas: "1500",
    precio: "230",
    stock: "Disponible",
    imagen: "CLE-1500-CARRUSEL.jpg",
    descripcion: "Escena navideña de un mercado con carrusel, luces y Papá Noel repartiendo regalos. Incluye póster de referencia. Armado 84.5 × 59.5 cm.",
    mostrar: "Si"
  },
  {
    id: "CLE-1000-CHIMENEA",
    nombre: "Classic Christmas Collection · Santa Junto a la Chimenea",
    categoria: "Rompecabezas",
    marca: "Clementoni",
    piezas: "1000",
    precio: "190",
    stock: "Disponible",
    imagen: "CLE-1000-CHIMENEA.jpg",
    descripcion: "Papá Noel dejando regalos junto al árbol y la chimenea encendida. Incluye póster de referencia. Armado 70 × 50 cm.",
    mostrar: "Si"
  },
  {
    id: "CLE-1000-LIBRERIA",
    nombre: "Classic Christmas Collection · Librería Navideña",
    categoria: "Rompecabezas",
    marca: "Clementoni",
    piezas: "1000",
    precio: "190",
    stock: "Disponible",
    imagen: "CLE-1000-LIBRERIA.jpg",
    descripcion: "Calle nevada con una librería iluminada y gente paseando en Navidad. Incluye póster de referencia. Armado 70 × 50 cm.",
    mostrar: "Si"
  },
  {
    id: "CLE-MAT-2000",
    nombre: "Puzzle Mat · Tapete para Armar",
    categoria: "Accesorios",
    marca: "Clementoni",
    piezas: "",
    precio: "195",
    stock: "Disponible",
    imagen: "CLE-MAT-2000.jpg",
    descripcion: "Tapete para armar, enrollar y guardar rompecabezas de hasta 2000 piezas sin perder el avance. Incluye bandas elásticas.",
    mostrar: "Si"
  },
  {
    id: "CLE-SORTER-1000",
    nombre: "Puzzle Sorter · Bandejas Clasificadoras",
    categoria: "Accesorios",
    marca: "Clementoni",
    piezas: "",
    precio: "185",
    stock: "Disponible",
    imagen: "CLE-SORTER-1000.jpg",
    descripcion: "Set de bandejas apilables para separar piezas por color o forma mientras armas. Para rompecabezas de hasta 1000 piezas.",
    mostrar: "Si"
  }
];
