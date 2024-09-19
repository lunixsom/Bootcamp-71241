
// Lista de personajes con sus nombres completos
const personajes = {
    'mario': 'Mario',
    'luigi': 'Luigi',
    'bowser': 'Bowser Morton Koopa',
    'peach': 'Princesa Peach Toadstool',
    'yoshi': 'T. Yoshisaur Munchakoopas',
    'toad': 'Toad',
    'toadette': 'Toadette',
    'daisy': 'Princesa Daisy'
};

// Función que captura la respuesta y actualiza el HTML
function mostrarPersonaje() {
    // Prompt para preguntar al usuario
    var respuesta = window.prompt("¿Quién se presenta hoy? (Mario, Luigi, Bowser, Peach, Yoshi, Toad, Toadette, Daisy)")
     // Muestra respuesta en la consola.
     console.log(respuesta);

    // Convertimos la respuesta en minúsculas para evitar errores de entrada
    respuesta = respuesta.toLowerCase();

    // Buscamos el nombre completo del personaje
    let nombreCompleto = personajes[respuesta];

    // Si el personaje existe, actualizamos el span en el HTML
    if (nombreCompleto) {
        // Actualiza el texto del span ID:personaje, con el nombre completo que lee de recorrer el objeto personajes.
        document.getElementById('personaje').textContent = nombreCompleto;

        // Ahora buscamos en el HTML un elemento con el mismo ID que la respuesta del usuario
        var elementoEncontrado = document.getElementById(respuesta);

        // Si se encontró el elemento, le establecemos el atributo title a "presentado"
        if (elementoEncontrado) {
            elementoEncontrado.setAttribute('title', 'presentado');

            // Guardamos el elemento en una variable (ya está en elementoEncontrado)
            console.log("Elemento encontrado y actualizado:", elementoEncontrado);
        }

    } else {
        // Si no existe el personaje, mostramos un mensaje de error
        document.getElementById('personaje').textContent = '(desconocido)';
    }

    // Desaparecer el botón después de ejecutar la acción
    document.getElementById('botonPresentar').style.display = 'none';
}

// Llamamos a la función cuando se carga la página  -- mostrarPersonaje();

// Agregar el evento de clic al botón
document.getElementById('botonPresentar').addEventListener('click', mostrarPersonaje);


