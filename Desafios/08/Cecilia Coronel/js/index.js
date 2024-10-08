// Asignar eventos a los botones "Quiero esto"
document.querySelectorAll('.buy-button').forEach(button => {
    button.addEventListener('click', function() {
        // Buscar la tarjeta (card) más cercana a este botón
        const card = this.closest('.card-horizontal') || this.closest('.card'); 
        
        // Obtener el nombre del producto de manera flexible
        const productoElement = card.querySelector('.producto') || card.querySelector('h3'); // Buscar .producto o el h3 como alternativa
        const nombreProducto = productoElement ? productoElement.textContent : '';  // Si el elemento existe, obtener su contenido

        // Obtener el precio del producto
        const precioElement = card.querySelector('.precio');
        const precioProducto = precioElement ? precioElement.getAttribute('data-precio') : '0';  // Verificar si existe el precio y capturarlo

        // Obtener la imagen del producto
        const imagenProducto = card.querySelector('img') ? card.querySelector('img').getAttribute('src') : '';  // Asegurar que haya una imagen

        // Obtener la descripción del producto desde el h3
        const descripcionElement = card.querySelector('h3');
        const descripcionProducto = descripcionElement ? descripcionElement.textContent : '';  

        // Llamar a la función para abrir el modal con los datos extraídos
        abrirModal(nombreProducto, precioProducto, imagenProducto, descripcionProducto);
    });
});


document.getElementById('enviar-pedido').onclick = function() {
    // Guardar el carrito en localStorage
    localStorage.setItem('carrito', JSON.stringify(carrito));

    // Redirigir al formulario
    window.location.href = '../pages/formulario.html';  
};