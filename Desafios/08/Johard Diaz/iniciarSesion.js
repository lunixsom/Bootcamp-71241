
const iniciarSesion = document.getElementById('iniciarSesion');
const ventanaIniciarSesion = document.getElementById('ventanaIniciarSesion');

function abrirVentana () {
    ventanaIniciarSesion.style.display = 'block';
};

function cerrarVentana() {
    ventanaIniciarSesion.style.display = 'none';
};

iniciarSesion.addEventListener('click', abrirVentana);
iniciarSesion.addEventListener('dblclick', cerrarVentana);