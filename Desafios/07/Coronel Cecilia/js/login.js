
// Evento al hacer clic en el botón "Presentar"
document.getElementById('btn-presentar').addEventListener('click', function() {
    this.classList.add('pressed');
    //para q se muestre la animacion antes puse un timeout
    setTimeout(() => {
        let textoPrompt = "¿Quién se presenta hoy? (Mario, Luigi, Bowser, Peach, Yoshi, Toad, Toadette, Daisy)";
        let personaje = prompt(textoPrompt);
        mostrarPersonajeCompleto(personaje);    
        // Ocultar el botón después de seleccionar, no se usa ahora
        // this.style.display = 'none';
    }, 1000);
});

// Hacer que cada personaje sea clickeable
const personajes = document.querySelectorAll('#cajas > div'); //selecciona los hijos de cajas q son los div
personajes.forEach(personaje => {
    personaje.addEventListener('click', function() {
        if(!(personaje.title)){
            mostrarPersonaje(personaje.id);
        } else{
            ocultarPersonajes()
        }
    });
});

// Función para mostrar el personaje completo
function mostrarPersonajeCompleto(personaje) {
    let nombreCompleto;
    let personajeNormalizado = personaje.toLowerCase(); // paso a minúsculas para comparar
    // el switch para asigna el nombre completo y mostrar el personaje
    switch (personajeNormalizado) {
        case 'mario':
            nombreCompleto = 'Mario';
            mostrarPersonaje('mario');
            break;
        case 'luigi':
            nombreCompleto = 'Luigi';
            mostrarPersonaje('luigi');
            break;
        case 'bowser':
            nombreCompleto = 'Bowser Morton Koopa';
            mostrarPersonaje('bowser');
            break;
        case 'peach':
            nombreCompleto = 'Princesa Peach Toadstool';
            mostrarPersonaje('peach');
            break;
        case 'yoshi':
            nombreCompleto = 'T. Yoshisaur Munchakoopas';
            mostrarPersonaje('yoshi');
            break;
        case 'toad':
            nombreCompleto = 'Toad';
            mostrarPersonaje('toad');
            break;
        case 'toadette':
            nombreCompleto = 'Toadette';
            mostrarPersonaje('toadette');
            break;
        case 'daisy':
            nombreCompleto = 'Princesa Daisy';
            mostrarPersonaje('daisy');
            break;
        default:
            nombreCompleto = "(desconocido)";
            //ocultarPersonajes();
            break;
    }
    // Actualizó el contenido del span con el nombre completo, tal como se ingresó
    document.getElementById('nombre-personaje').textContent = nombreCompleto;
}

// Función para mostrar el personaje
function mostrarPersonaje(idPersonaje) { 
    // oculto personajes
    ocultarPersonajes();
    // Muestra el personaje seleccionado (agregar "Presentado")
    document.getElementById(idPersonaje).setAttribute('title', 'Presentado');
}

function ocultarPersonajes () {
    // Oculta todos los personajes (quitar el atributo "Presentado")
    let personajes = document.querySelectorAll('#cajas > div');
    personajes.forEach(function(div) {
        div.removeAttribute('title');
    });
}

