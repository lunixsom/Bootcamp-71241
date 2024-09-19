document.getElementById('presentar').addEventListener('click', function() {
    // preguntar quien se presenta

    let personaje = prompt('¿Quién se presenta hoy? ');
    console.log(personaje);

    // Nombres completos 

    const personajes = {
        'Mario': 'Mario',
        'Luigi': 'Luigi',
        'Bowser': 'Bowser Morton Koopa',
        'Peach': 'Princesa Peach Toadstool',
        'Yoshi': 'T. Yoshisaur Munchakoopas',
        'Toad': 'Toad',
        'Toadette': 'Toadette',
        'Daisy': 'Princesa Daisy'
    };

    // leer span y poner el nombre del personaje

    const span = document.querySelector('h1 span');
    if (personajes[personaje]) {
        span.textContent = personajes[personaje];

        // buscar y presentar el personaje

        const personajeDiv = document.getElementById(personaje.toLowerCase());
        if (personajeDiv) {
            personajeDiv.setAttribute('title', 'Presentado');
        }
    } else {
        span.textContent = '(desconocido)';
    }

    // Ocultar el boton cuando se muestra el personaje

    this.style.display = 'none';
});