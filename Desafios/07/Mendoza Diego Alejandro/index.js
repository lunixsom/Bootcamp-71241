





let user = prompt("¿Quien se presenta hoy? (Mario, Luigi, Bowser, Peach, Daisy, Toad, Yoshi, Toadette)");

console.log('Has elegido a ${user}');

let span = document.getElementById("personaje")

switch (user) {
  case "mario":
    span.textContent = user;
    break;

    case "Daisy":
      span.textContent = 'Princesa ${user}' ;
      break;
      default:
        
      case "Luigi":
        span.textContent = user;
        break;

    case "Bowser":
      span.textContent = 'Bowser Morton Koopa ${user}';
      break

    case "Yoshi":
      span.textContent = 'T. Yoshisaur Munchakoopas ';
      break

    case "Toad":
      span.textContent = user
      break

    case "Toadette":
      span.textContent = user
      break

    case "Peach":
      span.innerHTML = 'Princesa Peach Toadstool ${user}';
      break



}
function mostrarPersonaje(personaje) {
  ocultarPersonajes();
  const divPersonaje = document.getElementById(personaje);
  if (divPersonaje) {
      divPersonaje.style.display = 'block';
      divPersonaje.setAttribute('title', 'Presentado');
  }
}

function ocultarPersonajes() {
  const personajesDivs = document.querySelectorAll('.personaje');
  personajesDivs.forEach(div => div.style.display = 'none');
}

