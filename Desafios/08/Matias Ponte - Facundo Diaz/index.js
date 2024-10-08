const form = document.getElementById('pedidoForm');
const confirmacionDiv = document.getElementById('confirmacion');
const detallesPedidoP = document.getElementById('detallesPedido');
const costoTotalP = document.getElementById('costoTotal');

const menu = [
    { nombre: 'Pancho', precio: 100.00 },
    { nombre: 'Hamburguesa', precio: 400.00 },
    { nombre: 'Papas Fritas', precio: 200.00 },
    { nombre: 'Helado', precio: 150.00 }
];

form.addEventListener('submit', (event) => {
    event.preventDefault();

    const itemsSeleccionados = Array.from(document.querySelectorAll('input[name="item"]:checked'))
        .map(item => item.value);

    if (itemsSeleccionados.length === 0) {
        alert('Seleccionar articulos');
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
    costoTotalP.textContent = `Costo total: $${total.toFixed(1)}`;

    confirmacionDiv.classList.remove('hidden');
}