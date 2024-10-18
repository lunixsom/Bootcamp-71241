document.addEventListener('DOMContentLoaded', function() {
const infoUsuario = document.getElementById('infoUsuario');
const menu = document.getElementById('menu');
const detallesPedido = document.getElementById('detallesPedido');
const totalElemento = document.getElementById('total');
let total = 0;
let pedido = [];

const elementosUsuario = [
{ id: 'nombre', label: 'Nombre:', type: 'text' },
{ id: 'direccion', label: 'Dirección de Entrega:', type: 'text' },
{ id: 'telefono', label: 'Teléfono:', type: 'tel' },
{ id: 'email', label: 'Correo Electrónico:', type: 'email' }
];

for (let i = 0; i < elementosUsuario.length; i++) {
const elemento = elementosUsuario[i];
const label = document.createElement('label');
label.setAttribute('for', elemento.id);
label.textContent = elemento.label;

const input = document.createElement('input');
input.setAttribute('type', elemento.type);
input.setAttribute('id', elemento.id);
input.setAttribute('name', elemento.id);
input.required = true;

infoUsuario.appendChild(label);
infoUsuario.appendChild(input);
}

const itemsMenu = [
{ nombre: 'Pizza Napolitana', precio: 14000, descripcion: 'Con salsa de tomate, mozzarella, tomate y orégano' },
{ nombre: 'Hamburguesa Completa', precio: 10900, descripcion: 'Pan de hamburguesa, hamburguesa, lechuga, tomate y queso.' },
{ nombre: 'Ensalada Primavera', precio: 6500, descripcion: 'Lechuga, tomate, pepino, zanahoria y aderezo de limón.'},
{ nombre: 'Papas Cheddar', precio: 9900, descripcion: 'Papas, cheddar fundido y panceta.'
}
];

function crearBotonAgregar(item) {
const agregarButton = document.createElement('button');
agregarButton.textContent = 'Agregar al pedido';
agregarButton.addEventListener('click', function(e) {
e.preventDefault();
const detalle = document.createElement('p');
detalle.textContent = item.nombre + ' - $' + item.precio + ' - Descripción: ' + item.descripcion;
detallesPedido.appendChild(detalle);
total += item.precio;
totalElemento.textContent = total;
pedido.push({
nombre: item.nombre,
precio: item.precio,
descripcion: item.descripcion
});
});
return agregarButton;
}

for (let i = 0; i < itemsMenu.length; i++) {
const item = itemsMenu[i];
const menuItem = document.createElement('div');

const label = document.createElement('label');
label.textContent = item.nombre + ' - $' + item.precio;

const descripcion = document.createElement('p');
descripcion.textContent = 'Descripción: ' + item.descripcion;

const agregarButton = crearBotonAgregar(item);

menuItem.appendChild(label);
menuItem.appendChild(descripcion);
menuItem.appendChild(agregarButton);
menu.appendChild(menuItem);
}


document.getElementById('pedidoForm').addEventListener('submit', function(e) {
e.preventDefault();
alert('Su pedido fue enviado al restaurante. Total: $' + total);

});
});

