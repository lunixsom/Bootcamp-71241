
let boton = document.getElementById("boton");

boton.addEventListener("click", (e)=>{
    
let personaje = prompt("¿Quién se presenta hoy?");
let personajemin = personaje.toLowerCase();

nombrecompleto = ["Mario", "Luigi", "Bowser Morton Koopa", "Princesa Peach Toadstool", "T. Yoshisaur Munchakoopas", "Toad", "Toadette", "Princesa Daisy", "(Desconocido)"];


switch(personajemin){
    case "mario":
    //personaje = "mario":
    nombrefinal= (nombrecompleto[0]);
    console.log(nombrefinal)
    break

    case "luigi":
    //personaje = "luigi":
    nombrefinal= (nombrecompleto[1]);
    console.log(nombrefinal)
    break

    case "bowser":
    //personaje = "bowser":
    nombrefinal= (nombrecompleto[2]);
    console.log(nombrefinal)
    break

    case "peach":
    //personaje = "peach":
    nombrefinal= (nombrecompleto[3]);
    console.log(nombrefinal)
    break

    case "yoshi":
    //personaje = "yoshi":
    nombrefinal= (nombrecompleto[4]);
    console.log(nombrefinal)
    break

    case "toad":
    //personaje = "toad":
    nombrefinal= (nombrecompleto[5]);
    console.log(nombrefinal)
    break

    case "toadette":
    //personaje = "toadette":
    nombrefinal= (nombrecompleto[6]);
    console.log(nombrefinal)
    break

    case
    personaje = "daisy":
    nombrefinal= (nombrecompleto[7]);
    console.log(nombrefinal)
    break

    default:
    console.log("Dato incorrecto.");
    nombrefinal= (nombrecompleto[8]);
    console.log(nombrefinal)
    boton.style.visibility = 'hidden';
    break
}

let titulo = document.getElementById("span");

titulo.innerHTML = nombrefinal;

let elemento = document.getElementById(personajemin);
elemento.setAttribute("title", "Presentado");
boton.style.visibility = 'hidden';

});
