// Obtener referencias a los elementos del DOM
const categoriaSelect = document.getElementById('categoria');
const precioMinInput = document.getElementById('precio-min');
const precioMaxInput = document.getElementById('precio-max');
const productosContainer = document.querySelector('.productos');

// Lista de productos (incluye "Todos", "Impresión 3D", "Juegos de Play 4", "Películas", "Accesorios" y "Auriculares")
const productos = [
  // Categoría "Todos"
  { id: 1, nombre: 'Consola Retro', categoria: 'todos', precio: 42000, imagen: 'imagenes/consola.png' },

  // Categoría "Impresión 3D"
  { id: 2, nombre: 'Figura 3D', categoria: 'impresion-3d', precio: 17500, imagen: 'imagenes/impresion3d1.png' },
  { id: 3, nombre: 'Llaveros 3D', categoria: 'impresion-3d', precio: 5250, imagen: 'imagenes/impresion3d2.png' },
  { id: 4, nombre: 'Pieza Personalizada', categoria: 'impresion-3d', precio: 26250, imagen: 'imagenes/impresion3d3.png' },
  { id: 5, nombre: 'Soporte para Teléfono', categoria: 'impresion-3d', precio: 7000, imagen: 'imagenes/impresion3d4.png' },
  { id: 6, nombre: 'Organizador de Escritorio', categoria: 'impresion-3d', precio: 12250, imagen: 'imagenes/impresion3d5.png' },
  { id: 7, nombre: 'Figura de Personaje', categoria: 'impresion-3d', precio: 21000, imagen: 'imagenes/impresion3d6.png' },
  { id: 8, nombre: 'Llavero Personalizado', categoria: 'impresion-3d', precio: 3500, imagen: 'imagenes/impresion3d7.png' },
  { id: 9, nombre: 'Base para Laptop', categoria: 'impresion-3d', precio: 15750, imagen: 'imagenes/impresion3d8.png' },
  { id: 10, nombre: 'Adorno Decorativo', categoria: 'impresion-3d', precio: 10500, imagen: 'imagenes/impresion3d9.png' },
  { id: 11, nombre: 'Portavasos', categoria: 'impresion-3d', precio: 4200, imagen: 'imagenes/impresion3d10.png' },
  { id: 12, nombre: 'Soporte para Audífonos', categoria: 'impresion-3d', precio: 8750, imagen: 'imagenes/impresion3d11.png' },
  { id: 13, nombre: 'Figura de Animal', categoria: 'impresion-3d', precio: 14000, imagen: 'imagenes/impresion3d12.png' },
  { id: 14, nombre: 'Caja Organizadora', categoria: 'impresion-3d', precio: 17500, imagen: 'imagenes/impresion3d13.png' },
  { id: 15, nombre: 'Pieza de Repuesto', categoria: 'impresion-3d', precio: 24500, imagen: 'imagenes/impresion3d14.png' },
  { id: 16, nombre: 'Lámpara Decorativa', categoria: 'impresion-3d', precio: 28000, imagen: 'imagenes/impresion3d15.png' },
  { id: 17, nombre: 'Soporte para Control', categoria: 'impresion-3d', precio: 8750, imagen: 'imagenes/impresion3d16.png' },
  { id: 18, nombre: 'Figura de Superhéroe', categoria: 'impresion-3d', precio: 22750, imagen: 'imagenes/impresion3d17.png' },
  { id: 19, nombre: 'Llaveros Temáticos', categoria: 'impresion-3d', precio: 5250, imagen: 'imagenes/impresion3d18.png' },
  { id: 20, nombre: 'Adorno de Escritorio', categoria: 'impresion-3d', precio: 12250, imagen: 'imagenes/impresion3d19.png' },

  // Categoría "Juegos de Play 4"
  { id: 21, nombre: 'The Last of Us Part II', categoria: 'juegos-play4', precio: 21000, imagen: './juegos/The Last of Us Part II.png' },
  { id: 22, nombre: 'God of War', categoria: 'juegos-play4', precio: 15750, imagen: './juegos/god-of-war-ps4.png' },
  { id: 23, nombre: 'Horizon Zero Dawn', categoria: 'juegos-play4', precio: 17500, imagen: './juegos/Horizon Zero Dawn.png' },
  { id: 24, nombre: 'Uncharterd', categoria: 'juegos-play4', precio: 14000, imagen: './juegos/un.png' },
  { id: 25, nombre: 'Spider-Man', categoria: 'juegos-play4', precio: 19250, imagen: './juegos/Spider-Man.png' },
  { id: 26, nombre: 'Red Dead Redemption 2', categoria: 'juegos-play4', precio: 24500, imagen: './juegos/Red Dead Redemption 2.png' },
  { id: 27, nombre: 'Final Fantasy VII Remake', categoria: 'juegos-play4', precio: 22750, imagen: './juegos/Final Fantasy VII Remake.png' },
  { id: 28, nombre: 'Resident Evil 2', categoria: 'juegos-play4', precio: 17500, imagen: './juegos/Resident Evil 2.png' },
  // categoria juegos play 5
  { id: 29, nombre: 'Demon\'s Souls', categoria: 'juegos-play5', precio: 24500, imagen: './juegos/demons.png' },
  { id: 30, nombre: 'Ratchet & Clank: Rift Apart', categoria: 'juegos-play5', precio: 21000, imagen: './juegos/ratchet.png' },
  { id: 31, nombre: 'Returnal', categoria: 'juegos-play5', precio: 22750, imagen: './juegos/returnal.png' },
  { id: 32, nombre : 'Spider-Man: Miles Morales', categoria: 'juegos-play5', precio: 19250, imagen: './juegos/miles.png' },
  { id: 33, nombre: 'Final Fantasy XVI', categoria: 'juegos-play5', precio: 28000, imagen: './juegos/final.png' },
  { id: 34, nombre: 'Gran Turismo 7', categoria: 'juegos-play5', precio: 24500, imagen: './juegos/gran.png' },
  { id: 35, nombre: 'Horizon Forbidden West', categoria: 'juegos-play5', precio: 28000, imagen: './juegos/horizon.png' },
  { id: 36, nombre: 'God of War Ragnarök', categoria: 'juegos-play5', precio: 35000, imagen: './juegos/god.png' },
  // Categoría "Películas"
  { id: 29, nombre: 'Avengers: Endgame', categoria: 'peliculas', precio: 3500, imagen: './peliculas/avengers.png' },
  { id: 30, nombre: 'Inception', categoria: 'peliculas', precio: 3000, imagen: './peliculas/Inception.png' },
  { id: 31, nombre: 'The Matrix', categoria: 'peliculas', precio: 3200, imagen: './peliculas/matrix.png' },
  { id: 32, nombre: 'Interstellar', categoria: 'peliculas', precio: 4000, imagen: './peliculas/inter.png' },
  { id: 33, nombre: 'Joker', categoria: 'peliculas', precio: 4500, imagen: './peliculas/joker.png' },

 
// categoria servicios
  { id: 34, nombre: 'venta y reparacion de impresoras 3d', categoria: 'servicios', precio: 1000, imagen: 'imagenes/servicio1.png' },
  { id: 35, nombre: 'filamentos y respuestos', categoria: 'servicios', precio: 1000, imagen: 'imagenes/servicio2.png' },
  { id: 36, nombre: 'impresiones 3d', categoria: 'servicios', precio: 1000, imagen: 'imagenes/servicio3.png' },
  { id: 37, nombre: 'servicio de corta laser industrial', categoria: 'servicios', precio: 1000, imagen: 'imagenes/servicio4.png' },
  { id: 38, nombre: 'hacemos todo tipo de cartelerias', categoria: 'servicios', precio: 1000, imagen: 'imagenes/servicio5.png' },

// Categoría "Accesorios"
  { id: 39, nombre: 'Control Inalambrico', categoria: 'accesorios', precio: 10500, imagen: 'imagenes/accesorio1.png' },
  { id: 40, nombre: 'Funda para Control', categoria: 'accesorios', precio: 4200, imagen: 'imagenes/accesorio2.png' },
  { id: 41, nombre: 'Base de Carga', categoria: 'accesorios', precio: 7000, imagen: 'imagenes/accesorio3.png' },
  { id: 42, nombre: 'Funda para Consola', categoria: 'accesorios', precio: 10500, imagen: 'imagenes/accesorio4.png' },
  { id: 43, nombre: 'Cable HDMI', categoria: 'accesorios', precio: 3500, imagen: 'imagenes/accesorio5.png' },
  { id: 44, nombre: 'Soporte para Consola', categoria: 'accesorios', precio: 5250, imagen: 'imagenes/accesorio6.png' },
  { id: 45, nombre: 'Funda para Auriculares', categoria: 'accesorios', precio: 4200, imagen: 'imagenes/accesorio7.png' },
  { id: 46, nombre: 'Soporte para Auriculares', categoria: 'accesorios', precio: 5250, imagen: 'imagenes/accesorio8.png' },
  { id: 47, nombre: 'Cable de Carga', categoria: 'accesorios', precio: 3500, imagen: 'imagenes/accesorio9.png' },
  { id: 48, nombre: 'Adaptador USB', categoria: 'accesorios', precio: 4200, imagen: 'imagenes/accesorio10.png' },
  { id: 49, nombre: 'Soporte para Televisor', categoria: 'accesorios', precio: 7000, imagen: 'imagenes/accesorio11.png' },
  { id: 50, nombre: 'Funda para Consola', categoria: 'accesorios', precio: 10500, imagen: 'imagenes/accesorio12.png' },
// Categoría "Auriculares"
  { id: 51, nombre: 'Auriculares Inalambricos', categoria: 'auriculares', precio: 14000, imagen: 'imagenes/auricular1.png' },
  { id: 52, nombre: 'Auriculares con Microfono', categoria: 'auriculares', precio: 10500, imagen: 'imagenes/auricular2.png' },
  { id: 53, nombre: 'Auriculares Gaming', categoria: 'auriculares', precio: 17500, imagen: 'imagenes/auricular3.png' },
  { id: 54, nombre: 'Auriculares Bluetooth', categoria: 'auriculares', precio: 21000, imagen: 'imagenes/auricular4.png' },
  { id: 55, nombre: 'Auriculares Deportivos', categoria: 'auriculares', precio: 14000, imagen: 'imagenes/auricular5.png' },
  { id: 56, nombre: 'Auriculares con Cancelacion de Ruido', categoria: 'auriculares', precio: 24500, imagen: 'imagenes/auricular6.png' },
// categoria accesorrios para telefonos
  { id: 57, nombre: 'Soporte para Telefono', categoria: 'accesorios-telefonos', precio: 3500, imagen: 'imagenes/accesorio-telefono1.png' },
  { id: 58, nombre: 'Funda para Telefono', categoria: 'accesorios-telefonos', precio: 4200, imagen: 'imagenes/accesorio-telefono2.png' },
  { id: 59, nombre: 'Cargador Inalambrico', categoria: 'accesorios-telefonos', precio: 7000, imagen: 'imagenes/accesorio-telefono3.png' },
  { id: 60, nombre: 'Cable de Carga Rápida', categoria: 'accesorios-telefonos', precio: 3500, imagen: 'imagenes/accesorio-telefono4.png' },
  { id: 61, nombre: 'Soporte para Auto', categoria: 'accesorios-telefonos', precio: 4200, imagen: 'imagenes/accesorio-telefono5.png' },
  { id: 62, nombre: 'Protector de Pantalla', categoria: 'accesorios-telefonos', precio: 2800, imagen: 'imagenes/accesorio-telefono6.png' },
  { id: 63, nombre: 'Auriculares Inalambricos', categoria: 'accesorios-telefonos', precio: 14000, imagen: 'imagenes/accesorio-telefono7.png' },
  { id: 64, nombre: 'Adaptador de USB-C a Jack', categoria: 'accesorios-telefonos', precio: 3500, imagen: 'imagenes/accesorio-telefono8.png' },
  { id: 65, nombre: 'Soporte para Telefono', categoria: 'accesorios-telefonos', precio: 4200, imagen: 'imagenes/accesorio-telefono9.png' },
  { id: 66, nombre: 'Funda para Telefono', categoria: 'accesorios-telefonos', precio: 3500, imagen: 'imagenes/accesorio-telefono10.png' },
  { id: 67, nombre: 'Cargador de Auto', categoria: 'accesorios-telefonos', precio: 4200, imagen: 'imagenes/accesorio-telefono11.png' },
  { id: 68, nombre: 'Soporte para Telefono', categoria: 'accesorios-telefonos', precio: 3500, imagen: 'imagenes/accesorio-telefono12.png' },
  //categoria audio
  { id: 69, nombre: 'Parlante Bluetooth', categoria: 'audio', precio: 14000, imagen: 'imagenes/audio1.png' },
  { id: 70, nombre: 'Parlante Inalambrico', categoria: 'audio', precio: 17500, imagen: 'imagenes/audio2.png' },
  { id: 71, nombre: 'Parlante Portatil', categoria: 'audio', precio: 21000, imagen: 'imagenes/audio3.png' },
  { id: 72, nombre: 'Parlante de Estudio', categoria: 'audio', precio: 24500, imagen: 'imagenes/audio4.png' },
  { id: 73, nombre: 'Parlante de Fiesta', categoria: 'audio', precio: 28000, imagen: 'imagenes/audio5.png' },
  { id: 74, nombre: 'Parlante de Auto', categoria: 'audio', precio: 35000, imagen: 'imagenes/audio6.png' },
  { id: 75, nombre: 'Parlante de Techo', categoria: 'audio', precio: 42000, imagen: 'imagenes/audio7.png' },
  { id: 76, nombre: 'Parlante de Pared', categoria: 'audio', precio: 49000, imagen: 'imagenes/audio8.png' },
  //categoria accesorios-pc
  { id: 77, nombre: 'Teclado Mecánico', categoria: 'accesorios-pc', precio: 14000, imagen: 'imagenes/accesorio-pc1.png' },
  { id: 78, nombre: 'Mouse Gamer', categoria: 'accesorios-pc', precio: 10500, imagen: 'imagenes/accesorio-pc2.png' },
  { id: 79, nombre: 'Alfombrilla de Juego', categoria: 'accesorios-pc', precio: 3500, imagen: 'imagenes/accesorio-pc3.png' },
  { id: 80, nombre: 'Monitor 24"', categoria: 'accesorios-pc', precio: 42000, imagen: 'imagenes/accesorio-pc4.png' },
  { id: 81, nombre: 'Webcam HD', categoria: 'accesorios-pc', precio: 7000, imagen: 'imagenes/accesorio-pc5.png' },
  { id: 82, nombre: 'Micrófono USB', categoria: 'accesorios-pc', precio: 10500, imagen: 'imagenes/accesorio-pc6.png' },
  { id: 83, nombre: 'Soporte para Monitor', categoria: 'accesorios-pc', precio: 3500, imagen: 'imagenes/accesorio-pc7.png' },
  { id: 84, nombre: 'Hub USB', categoria: 'accesorios-pc', precio: 4200, imagen: 'imagenes/accesorio-pc8.png' },
  { id: 85, nombre: 'Cable HDMI', categoria: 'accesorios-pc', precio: 2800, imagen: 'imagenes/accesorio-pc9.png' },
  { id: 86, nombre: 'Soporte para Teclado', categoria: 'accesorios-pc', precio: 3500, imagen: 'imagenes/accesorio-pc10.png' },
  { id: 87, nombre: 'Soporte para Mouse', categoria: 'accesorios-pc', precio: 4200, imagen: 'imagenes/accesorio-pc11.png' },
  { id: 88, nombre: 'Soporte para Auriculares', categoria: 'accesorios-pc', precio: 3500, imagen: 'imagenes/accesorio-pc12.png' },
  //categoria cables
  { id: 89, nombre: 'Cable HDMI', categoria: 'cables', precio: 3500, imagen: 'imagenes/cable1.png' },
  { id: 90, nombre: 'Cable USB-C', categoria: 'cables', precio: 2800, imagen: 'imagenes/cable2.png' },
  { id: 91, nombre: 'Cable Auxiliar', categoria: 'cables', precio: 2100, imagen: 'imagenes/cable3.png' },
  { id: 92, nombre: 'Cable Ethernet', categoria: 'cables', precio: 4200, imagen: 'imagenes/cable4.png' },
  { id: 93, nombre: 'Cable de Carga Rápida', categoria: 'cables', precio: 3500, imagen: 'imagenes/cable5.png' },
  { id: 94, nombre: 'Cable de Audio', categoria: 'cables', precio: 2800, imagen: 'imagenes/cable6.png' },
  { id: 95, nombre: 'Cable de Video', categoria: 'cables', precio: 3500, imagen: 'imagenes/cable7.png' },
  { id: 96, nombre: 'Cable de Alimentación', categoria: 'cables', precio: 4200, imagen: 'imagenes/cable8.png' },
  { id: 97, nombre: 'Cable de Extensión', categoria: 'cables', precio: 3500, imagen: 'imagenes/cable9.png' },
  { id: 98, nombre: 'Cable de Red', categoria: 'cables', precio: 2800, imagen: 'imagenes/cable10.png' },
  { id: 99, nombre: 'Cable de Conexión', categoria: 'cables', precio: 3500, imagen: 'imagenes/cable11.png' },
  { id: 100, nombre: 'Cable de Audio y Video', categoria: 'cables', precio: 4200, imagen: 'imagenes/cable12.png' },
  { id: 101, nombre: 'Cable de Conexión para Consola', categoria: 'cables', precio: 3500, imagen: 'imagenes/cable13.png' },
  { id: 102, nombre: 'Cable de Conexión para PC', categoria: 'cables', precio: 4200, imagen: 'imagenes/cable14.png' },
  { id: 103, nombre: 'Cable de Conexión para Televisor', categoria: 'cables', precio: 3500, imagen: 'imagenes/cable15.png' },
  { id: 104, nombre: 'Cable de Conexión para Proyector', categoria: 'cables', precio: 4200, imagen: 'imagenes/cable16.png' },
 
];
// Función para renderizar los productos
function renderizarProductos(productosFiltrados) {
  productosContainer.innerHTML = ''; // Limpiar los productos actuales
  productosFiltrados.forEach(producto => {
    const productoHTML = `
      <div class="producto categoria-${producto.categoria}">

      <img src="${producto.imagen}" alt="${producto.nombre}" onclick="abrirImagen('${producto.imagen}', '${producto.nombre}')">
        <div class="contenido">
          <h3>${producto.nombre}</h3>
          <p>$${producto.precio.toLocaleString('es-AR')} ARS</p>
          <button class="btn-secundario" onclick="comprarProducto('${producto.nombre}', ${producto.precio})">Comprar</button>
        </div>
      </div>
    `;
    productosContainer.innerHTML += productoHTML;
  });
}

// Función para abrir la imagen en un modal
function abrirImagen(imagen, nombre) {
  const modalHTML = `
    <div id="modal" class="modal">
      <div class="modal-contenido">
        <span class="cerrar" onclick="cerrarModal()">&times;</span>
        <img src="${imagen}" alt="${nombre}" class="imagen-ampliada">
        <p>${nombre}</p>
      </div>
    </div>
  `;
  document.body.insertAdjacentHTML('beforeend', modalHTML);
}

// Función para cerrar el modal
function cerrarModal() {
  const modal = document.getElementById('modal');
  if (modal) {
    modal.remove(); // Elimina el modal del DOM
  }
}

// Función para enviar el mensaje a WhatsApp
function comprarProducto(nombre, precio) {
  const numeroWhatsApp = "3547609741"; // Número de WhatsApp
  const mensaje = `Hola, estoy interesado en comprar el producto: ${nombre} por $${precio.toLocaleString('es-AR')} ARS.`;
  const url = `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(mensaje)}`;
  window.open(url, '_blank'); // Abrir WhatsApp en una nueva pestaña
}

// Función para filtrar los productos
function filtrarProductos(categoria) {
  let productosFiltrados;
  if (categoria === 'todos') {
    // Mostrar todos los productos
    productosFiltrados = productos;
  } else {
    // Filtrar por categoría específica
    productosFiltrados = productos.filter(producto => producto.categoria === categoria);
  }
  renderizarProductos(productosFiltrados);
}

// Escuchar cambios en los filtros
categoriaSelect.addEventListener('change', () => filtrarProductos(categoriaSelect.value));
precioMinInput.addEventListener('input', () => filtrarProductos(categoriaSelect.value));
precioMaxInput.addEventListener('input', () => filtrarProductos(categoriaSelect.value));

// Renderizar todos los productos al cargar la página
renderizarProductos(productos);