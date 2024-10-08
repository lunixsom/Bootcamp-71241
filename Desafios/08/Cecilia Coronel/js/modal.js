// Función para cargar el modal desde el archivo modal.html
function cargarModal(callback) {
    fetch('../pages/modal.html')
        .then(response => response.text())
        .then(data => {
            // Insertar el contenido del modal en el contenedor
            document.getElementById('modal-container').innerHTML = data;
            // Ejecutar el callback para inicializar el modal con los datos
            callback();
        })
        .catch(error => console.error('Error al cargar el modal:', error));
}

// Función para abrir el modal y cargar el contenido del producto
function abrirModal(nombreProducto, precioProducto, imagenProducto, descripcionProducto) {
    cargarModal(function() {
        const modal = document.getElementById("modal");
        const modalCardContent = document.getElementById("modal-card-content");
        const totalPrecio = document.getElementById("total-precio");
        const cantidadSpan = document.querySelector('.cantidad');
        let cantidad = 1;  // Cantidad inicial

        // Establecer el contenido del modal con los datos del producto
        modalCardContent.innerHTML = `
            <h3>${nombreProducto}</h3>
            <img src="${imagenProducto}" alt="${nombreProducto}" style="width:100%;">
            <p>${descripcionProducto}</p>
        `;

        // Mostrar el precio inicial
        totalPrecio.textContent = precioProducto;

        // Mostrar el modal
        modal.style.display = "block";

        // Funcionalidad de sumar/restar la cantidad y actualizar el precio
        document.querySelector('.plus-button').onclick = function() {
            if (cantidad < 3) {  // Limitar a un máximo de 3
                cantidad++;
                cantidadSpan.textContent = cantidad;
                actualizarTotal(precioProducto, cantidad);
            }
        };

        document.querySelector('.minus-button').onclick = function() {
            if (cantidad > 1) {  // Limitar a un mínimo de 1
                cantidad--;
                cantidadSpan.textContent = cantidad;
                actualizarTotal(precioProducto, cantidad);
            }
        };

        // Función para actualizar el precio total basado en la cantidad
        function actualizarTotal(precio, cantidad) {
            const total = precio * cantidad;
            totalPrecio.textContent = total;
        }

        // Agregar el producto al carrito cuando se hace clic en "Agregar al carrito"
        document.querySelector('.buy-confirm').onclick = function() {
            agregarAlCarrito(nombreProducto, totalPrecio.textContent, cantidad);  // Llamar a la función para agregar al carrito
            modal.style.display = "none";  // Cerrar el modal después de agregar al carrito
        };

        // Lógica para cerrar el modal
        document.querySelector('.close').onclick = function() {
            modal.style.display = "none";
        };
    });
}

// Función para agregar productos al carrito
let carrito = [];  // Inicializamos el carrito como un array vacío

function agregarAlCarrito(nombreProducto, precioProducto, cantidad) {
    const producto = {
        nombre: nombreProducto,
        precio: precioProducto,
        cantidad: cantidad
    };
    carrito.push(producto);  // Agregar el producto al carrito
    alert(`${nombreProducto} agregado al carrito!`);
    
    // Aquí puedes actualizar el carrito en la interfaz si es necesario
    actualizarCarritoUI();
}

// Función para actualizar la interfaz del carrito
function actualizarCarritoUI() {
    const carritoContainer = document.getElementById('lista-carrito');
    carritoContainer.innerHTML = '';  // Limpiar el contenido del carrito

    carrito.forEach(producto => {
        const li = document.createElement('li');
        li.textContent = `${producto.cantidad}x ${producto.nombre} - $${producto.precio}`;
        carritoContainer.appendChild(li);
    });
}