
// Obtenemos el carrito desde el localStorage
const carrito = JSON.parse(localStorage.getItem('carrito'));

// Si no hay carrito, redirigimos al usuario de vuelta a la página principal
if (!carrito || carrito.length === 0) {
    alert('No hay productos en el carrito.');
    window.location.href = 'index.html';
} else {
    // Mostramos el resumen del pedido
    const resumen = document.getElementById('pedidoResumen');
    let total = 0;
    //Item corresponde a cada producto del carrito.
    carrito.forEach(item => {
        const itemDiv = document.createElement('div');
        itemDiv.textContent = `${item.producto} - $${item.precio} x ${item.cantidad} - $${(item.precio * item.cantidad).toFixed(2)}`;
        resumen.appendChild(itemDiv);

        total += item.precio * item.cantidad;
    });

    const totalDiv = document.createElement('div');
    totalDiv.textContent = `Total acumulado: $${total.toFixed(2)}`;
    resumen.appendChild(totalDiv);
}

// Manejar el envío del formulario
const form = document.getElementById('checkoutFormulario');
form.addEventListener('submit', (event) => {
    event.preventDefault(); // Evitar el comportamiento por defecto del formulario

    // Aca enviar los datos del formulario al servidor o hacer algo:
    alert('¡Compra confirmada!');

    // Limpiamos el carrito después de la compra
    localStorage.removeItem('carrito');

    // Redirigimos al usuario a una página de confirmación o a la página principal
    window.location.href = '../index.html';
});
