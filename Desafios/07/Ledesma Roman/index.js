



    let boton = document.getElementById("boton");

    boton.addEventListener("click", function () {
        
    
    let personaje = prompt("¿Quién se presenta hoy? (Mario, Luigi, Bowser, Peach, Yoshi, Toad, Toadette, Daisy");

    boton.style.display = 'none';

    console.log('el personaje es ' + personaje)

    let span = document.getElementById('nombre')

    personaje = personaje.toLowerCase();

    let div = document.getElementById(personaje);




    switch (personaje) {
    case 'mario':
        span.innerHTML = 'Mario';
        div.setAttribute('title', 'Presentado');
        break;
    case 'luigi':
        span.innerHTML = 'Luigi';
        div.setAttribute('title', 'Presentado');
        break;
    case 'bowser':
        span.innerHTML = 'Bowser Morton Koopa';
        div.setAttribute('title', 'Presentado');
        break;
    case 'peach':
        span.innerHTML = 'Princesa Peach Toadstool';
        div.setAttribute('title', 'Presentado');
        break;
    case 'yoshi':
        span.innerHTML = 'T. Yoshisaur Munchakoopasoshi';
        div.setAttribute('title', 'Presentado');
        break;
    case 'toad':
        span.innerHTML = 'Toad';
        div.setAttribute('title', 'Presentado');
        break;
    case 'toadette':
        span.innerHTML = 'Toadette';
        div.setAttribute('title', 'Presentado');
        break;
    case 'daisy':
        span.innerHTML = 'Princesa Daisy';
        div.setAttribute('title', 'Presentado');
        break;

    default:
        span.innerHTML = 'desconocido';
        
}
});
