// Array para guardar los productos añadidos al carrito
let carrito = [];

// Seleccionamos todos los botones de "Añadir al carrito"
const btnComprar = document.querySelectorAll('.btnComprar');

//Función para agregar productos al carrito
btnComprar.forEach((boton) => {
  boton.addEventListener('click', (event) => {
    // Obtenemos los datos del producto desde los atributos data
    const producto = boton.getAttribute('data-producto');
    const precio = parseFloat(boton.getAttribute('data-precio'));

// Verificamos si el producto ya está en el carrito usando Find y una funcion que pregunte si el item producto se encuentra en el array carrito.
const productoExistente = carrito.find(item => item.producto === producto);

if (productoExistente) {
  // Si ya está en el carrito, incrementamos la cantidad
  productoExistente.cantidad += 1;
} else {
  // Si no está en el carrito, lo añadimos con cantidad 1
  carrito.push({ producto, precio, cantidad: 1 });
}    

// Actualizamos el span que muestra la cantidad
const spanCantidad = boton.nextElementSibling; // Selecciona el span que está justo después del botón
// Condicional:
if (productoExistente) {
    spanCantidad.textContent = productoExistente.cantidad; // Si existe, muestra la cantidad
} else {
    spanCantidad.textContent = 1; // Si no existe, muestra 1
}


// Mostrar la información del carrito en la consola
mostrarCarrito();
});
});

// Función para mostrar el carrito en la consola
function mostrarCarrito() {
    console.clear();
    let total = 0;
    console.log("Carrito de compras:");
    //Item corresponde a cada producto del carrito.
    carrito.forEach(item => {
      console.log(item.cantidad +  "x" + item.producto + "- $" + item.precio.toFixed(2) + "c/u");
      total += item.precio * item.cantidad;
    });
    console.log("Total acumulado: $" + total.toFixed(2));
  }
  
  // Funcionalidad del botón "Finalizar Compra"
  const btnTotal = document.querySelector('.btnTotal');
  btnTotal.addEventListener('click', () => {
    if (carrito.length === 0) {
      alert('No has añadido productos al carrito.');
    } else {
      // Guardamos el carrito en localStorage para pasarlo a la nueva página
      localStorage.setItem('carrito', JSON.stringify(carrito));

      // Redirigimos a la página de checkout
      window.location.href = 'pages/checkout.html';
    }
  });