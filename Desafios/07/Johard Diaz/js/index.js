
const personajes = ["mario", "luigi", "bowser", "peach", "yoshi", "toad", "toadette", "daisy"];

const nombre = prompt('¿Quién se presenta hoy?').toLowerCase();

const span = document.getElementById('nombre');

//const title = document.getElementById('Mario', 'Luigi', 'Bowser', 'Peach', 'Yoshi', 'Toad', 'Toadette', 'Daisy');

if (personajes.includes(nombre)) {
    console.log('Hoy se presenta:' + nombre);
} 
else {
    console.log("El nombre no coincide, elije otro personaje.");
    alert('El nombre no coincide, elije otro personaje.');
    window.location.href = "../index.html";
}

//###############################################################################################

if (nombre == personajes[0]) {
    span.innerHTML = "Mario"
}
else if (nombre == personajes[1]) {
    span.innerHTML = "Luigi"
}
else if (nombre == personajes[2]) {
    span.innerHTML = "Bowser Morton Koopa"
}
else if (nombre == personajes[3]) {
    span.innerHTML = "Princesa Peach Toadstool"
}
else if (nombre == personajes[4]) {
    span.innerHTML = "T. Yoshisaur Munchakoopas"
}
else if (nombre == personajes[5]) {
    span.innerHTML = "Toad"
}
else if (nombre == personajes[6]) {
    span.innerHTML = "Toadette"
}
else if (nombre == personajes[7]) {
    span.innerHTML = "Princesa Daisy"
}

//###############################################################################################

if (nombre == personajes[0], [7]) {
    document.title = "Presentado"
} else {
  document.title = "¿Quién se presenta hoy?"  
}

//###############################################################################################

