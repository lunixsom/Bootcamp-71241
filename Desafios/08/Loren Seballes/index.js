let cartItems = [];
let total = 0;

  // Agregar productos al carrito
function addToCart(productName, productPrice) {
    cartItems.push({ name: productName, price: productPrice }); // Añadir producto al carrito
    total += productPrice; // Sumar el precio al total
    alert(`${productName} agregado al pedido. Total: $${total}`); // Mostrar alerta con el total
}

document.querySelectorAll('.btn-outline-primary').forEach((button, index) => {
    button.addEventListener('click', () => {
      // Obtener el nombre y precio del producto
    const productCard = button.closest('.card');
    const productName = productCard.querySelector('.card-text').textContent;
    const productPrice = parseFloat(productCard.querySelector('h3').textContent.replace('Precio: $', ''));
      addToCart(productName, productPrice); // Llamar a la función para agregar al carrito
    });
});

  // Función para redirigir al formulario con el resumen del pedido
function redirectToForm() {
    const orderDetails = cartItems.map(item => `${item.name}: $${item.price}`).join('\n'); // Crea resumen del pedido
    const url = `./formulario.html?order=${encodeURIComponent(orderDetails)}&total=${total}`; // Crea URL con detalles del pedido
    window.location.href = url; // Redirigir al formulario
}

  // Botón "Realizar pedido" que dirige al formulario
document.querySelector('.btn-primary').addEventListener('click', (e) => {
    e.preventDefault(); 
    if (cartItems.length === 0) {
    alert('El carrito está vacío'); 
    } else {
    redirectToForm(); 
    }
});
