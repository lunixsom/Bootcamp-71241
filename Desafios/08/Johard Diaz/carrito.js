

const carrito = document.getElementById('carrito');
const ventanaCarrito = document.getElementById('ventanaCarrito');

const agregarAlCarrito = document.querySelectorAll('.agregarAlCarrito');
const contador = document.getElementById('contadorDelCarrito');
let cantidadSeleccionada = 0;

const agregarCombo1 = document.getElementById('combo1');
const agregarCombo2 = document.getElementById('combo2'); 
const agregarCombo3 = document.getElementById('combo3');
const agregarCombo4 = document.getElementById('combo4');
const agregarCombo5 = document.getElementById('combo5');
const productoSeleccionado = document.getElementById('productos');
const precios = document.getElementById('precios');

let montos = [5, 10, 8, 8, 10];
let sumaTotal = 0.00;

const botonOrdenar = document.getElementById('ordenar');
const ventanaDireccion = document.getElementById('ventanaDireccion');
const overlay = document.getElementById('overlay');
const botonCancelarPedido = document.getElementById('cancelarPedido');

function abrirVentana() {
    ventanaCarrito.style.display = 'block';
};

function cerrarVentana() {
    ventanaCarrito.style.display = 'none'
}


carrito.addEventListener('click', abrirVentana);
carrito.addEventListener('dblclick', cerrarVentana)

agregarAlCarrito.forEach(function(agregar) {
    agregar.addEventListener('click', function() {
    cantidadSeleccionada++;
    contador.textContent = cantidadSeleccionada;})});

agregarCombo1.addEventListener('click', function() {   
    let combo1EnCarrito = document.createElement("li");
    let precioCombo1 = document.createElement("li");
    combo1EnCarrito.classList.add('pedidos');
    precioCombo1.classList.add('pedidos');
    combo1EnCarrito.textContent = "Hamburguesa de Pollo + Papas";    
    precioCombo1.textContent = "$5";
    productoSeleccionado.appendChild(combo1EnCarrito);
    precios.appendChild(precioCombo1);});

agregarCombo2.addEventListener('click', function() {
    let combo2EnCarrito = document.createElement("li");
    let precioCombo2 = document.createElement("li");
    combo2EnCarrito.classList.add('pedidos');
    precioCombo2.classList.add('pedidos');
    combo2EnCarrito.textContent = "Wrap de Pollo + Papas + Bebida";
    precioCombo2.textContent = "$10"
    productoSeleccionado.appendChild(combo2EnCarrito);
    precios.appendChild(precioCombo2);});

agregarCombo3.addEventListener('click', function() {
    let combo3EnCarrito = document.createElement("li");
    let precioCombo3 = document.createElement("li");
    combo3EnCarrito.classList.add('pedidos');
    precioCombo3.classList.add('pedidos');
    combo3EnCarrito.textContent = "Hamburguesa de Pollo + Papas + Bebida";
    precioCombo3.textContent = "$8"
    productoSeleccionado.appendChild(combo3EnCarrito);
    precios.appendChild(precioCombo3);});

agregarCombo4.addEventListener('click', function() {
    let combo4EnCarrito = document.createElement("li");
    let precioCombo4 = document.createElement("li");
    combo4EnCarrito.classList.add('pedidos');
    precioCombo4.classList.add('pedidos');
    combo4EnCarrito.textContent = "Wrap de Pollo + Papas";
    precioCombo4.textContent = "$8"
    productoSeleccionado.appendChild(combo4EnCarrito);
    precios.appendChild(precioCombo4);});

agregarCombo5.addEventListener('click', function() {
    let combo5EnCarrito = document.createElement("li");
    let precioCombo5 = document.createElement("li");
    combo5EnCarrito.classList.add('pedidos');
    precioCombo5.classList.add('pedidos');
    combo5EnCarrito.textContent = "Pizza + Bebida";
    precioCombo5.textContent = "$10"
    productoSeleccionado.appendChild(combo5EnCarrito);
    precios.appendChild(precioCombo5);});

function sumarAlTotal(i) {
    sumaTotal += montos[i];
    document.getElementById('total').textContent = sumaTotal;};
agregarCombo1.addEventListener('click', () => sumarAlTotal(0));
agregarCombo2.addEventListener('click', () => sumarAlTotal(1));
agregarCombo3.addEventListener('click', () => sumarAlTotal(2));
agregarCombo4.addEventListener('click', () => sumarAlTotal(3));
agregarCombo5.addEventListener('click', () => sumarAlTotal(4));

function botonReset() {
    productoSeleccionado.innerHTML = '';
    precios.innerHTML = '';
    sumaTotal = 0.00;
    
    document.getElementById('total').textContent = sumaTotal;};

document.getElementById('botonReset').addEventListener('click', botonReset);

function abrirVentanaDireccion() {
    ventanaDireccion.style.display = 'block';
    overlay.style.display = 'block';
};

function cerrarVentanaDireccion() {
    ventanaDireccion.style.display = 'none';
    overlay.style.display = 'none';
};

botonOrdenar.addEventListener('click', abrirVentanaDireccion);
botonCancelarPedido.addEventListener('Click', cerrarVentanaDireccion);


