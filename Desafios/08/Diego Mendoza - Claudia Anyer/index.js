

const form = document.getElementById('pedidoForm');
const confirmacionDiv = document.getElementById('confirmacion');
const detallesPedidoP = document.getElementById('detallesPedido');
const costoTotalP = document.getElementById('costoTotal');

const menu = [
    { nombre: 'Pizza', precio: 12.00 },
    { nombre: 'Hamburguesa', precio: 8.50 },
    { nombre: 'Ensalada', precio: 5.00 }
];

form.addEventListener('submit', (event) => {
    event.preventDefault();

    
    const itemsSeleccionados = Array.from(document.querySelectorAll('input[name="item"]:checked'))
        .map(item => item.value);

    if (itemsSeleccionados.length === 0) {
        alert('Por favor, selecciona al menos un artículo.');
        return;
    }

    const nombre = document.getElementById('nombre').value;
    const direccion = document.getElementById('direccion').value;
    const telefono = document.getElementById('telefono').value;
    const correo = document.getElementById('correo').value;

    const total = calcularTotal(itemsSeleccionados);

   
    mostrarConfirmacion(itemsSeleccionados, total);
});


function calcularTotal(items) {
    return items.reduce((total, item) => {
        const articulo = menu.find(menuItem => menuItem.nombre === item);
        return total + (articulo ? articulo.precio : 0);
    }, 0);
}


function mostrarConfirmacion(detalles, total) {
    detallesPedidoP.textContent = `Artículos seleccionados: ${detalles.join(', ')}`;
    costoTotalP.textContent = `Costo total: $${total.toFixed(2)}`;

    confirmacionDiv.classList.remove('hidden');
}
