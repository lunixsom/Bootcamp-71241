// script.js

document.addEventListener('DOMContentLoaded', function() {
    const nombresPersonajes = {
        'mario': 'Mario',
        'luigi': 'Luigi',
        'bowser': 'Bowser Morton Koopa',
        'peach': 'Princesa Peach Toadstool',
        'yoshi': 'T. Yoshisaur Munchakoopas',
        'toad': 'Toad',
        'toadette': 'Toadette',
        'daisy': 'Princesa Daisy'
    };

    const promptUsuario = () => {
        const nombre = prompt("¿Quién se presenta hoy? (Mario, Luigi, Bowser, Peach, Yoshi, Toad, Toadette, Daisy)").toLowerCase();
        console.log(nombre);

        const nombreCompleto = nombresPersonajes[nombre] || "(desconocido)";
        document.querySelector('h1 > span').textContent = nombreCompleto;

        // Establecer el título del personaje correspondiente
        if (nombresPersonajes[nombre]) {
            // Ocultar todos los personajes
            document.querySelectorAll('#cajas > div').forEach(div => div.removeAttribute('title'));
            // Mostrar el personaje correspondiente
            const personajeDiv = document.getElementById(nombre);
            if (personajeDiv) {
                personajeDiv.setAttribute('title', 'Presentado');
            }
        } else {
            // Si el nombre es desconocido, asegurarse de que ningún personaje se muestre
            document.querySelectorAll('#cajas > div').forEach(div => div.removeAttribute('title'));
        }
    };

    // Asignar el comportamiento al botón
    document.getElementById('boton-presentar').addEventListener('click', function() {
        promptUsuario();   
    });
    const botonResetear = document.getElementById('boton-resetear');
    botonResetear.addEventListener('click', function() {
        // Limpiar el nombre del personaje
        document.querySelector('h1 > span').textContent = '';

        // Ocultar todos los personajes
        document.querySelectorAll('#cajas > div').forEach(div => div.removeAttribute('title'));
    });

    // Comportamiento para mostrar/ocultar personajes al hacer clic
    document.querySelectorAll('#cajas > div').forEach(div => {
        div.addEventListener('click', function() {
            // Ocultar todos los personajes primero
            document.querySelectorAll('#cajas > div').forEach(d => d.removeAttribute('title'));
            // Alternar el título del personaje clicado
            if (this.getAttribute('title') === 'Presentado') {
                this.removeAttribute('title');
            } else {
                this.setAttribute('title', 'Presentado');
            }
        });
    });
});
