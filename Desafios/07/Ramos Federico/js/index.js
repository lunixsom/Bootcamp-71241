
const personajes = ["Mario", "Luigi", "Bowser Morton Koopa", "Princesa Peach Toadstool", "T. Yoshisaur Munchakoopas", "Toad", "Toadette", "Princesa Daisy"];

const nombresPila = ["mario", "luigi", "bowser", "peach", "yoshi", "toad", "toadette", "daisy"] /* AGREGADO BONUS 1 */

let span = document.getElementById("nombrePersonaje");

let divPersonajes = document.querySelectorAll('.cerrar') /* AGREGADO BONUS 1 */

let botonPresentar = document.getElementById("botonPresentar");


botonPresentar.addEventListener('click', (e) => {
    e.preventDefault();
    const user = prompt("¿Quién se presenta hoy? (Mario, Luigi, Bowser, Peach, Yoshi, Toad, Toadette, Daisy)").toLowerCase();
   if(nombresPila.includes(user)){ /* AGREGADO BONUS 1 */
       ocultarTodos()
   }
    mostrarPersonajes(user);    /* AGREGADO BONUS 1 */
    console.log(user);   
    //botonPresentar.style.display = "none";
});

 
divPersonajes.forEach(div => {                  /* AGREGADO BONUS 2 */
    div.addEventListener('click', () => {
         
        if(div.getAttribute('title') === 'Presentado'){
            div.removeAttribute('title')
        }else{
            ocultarTodos()
            mostrarPersonajes(div.id)
        }
    })
})


const mostrarPersonajes = (user) => {
    let div = document.getElementById(`${user}`);
    switch (user) {
        case 'mario':
            span.innerHTML = `${personajes[0]}`;
            div.setAttribute("title", "Presentado");
            // console.log(personajes[0]);
            break;
        case 'luigi':
            span.innerHTML = `${personajes[1]}`;
            div.setAttribute("title", "Presentado");
            break;
        case 'bowser':
            span.innerHTML = `${personajes[2]}`;
            div.setAttribute("title", "Presentado");
            break;
        case 'peach':
            span.innerHTML = `${personajes[3]}`;
            div.setAttribute("title", "Presentado");
            break;
        case 'yoshi':
            span.innerHTML = `${personajes[4]}`;
            div.setAttribute("title", "Presentado");
            break;
        case 'toad':
            span.innerHTML = `${personajes[5]}`;
            div.setAttribute("title", "Presentado");
            break;
        case 'toadette':
            span.innerHTML = `${personajes[6]}`;
            div.setAttribute("title", "Presentado");
            break;
        case 'daisy':
            span.innerHTML = `${personajes[7]}`;
            div.setAttribute("title", "Presentado");
            break;
        default:
            span.innerHTML= "Desconocido";
            break;
        };
};

// Me gustaría saber como sería hecho con los bonus, que no los pude sacar 

const ocultarTodos = () => {        /* AGREGADO BONUS 1 y 2*/
    divPersonajes.forEach(div => {
        div.removeAttribute("title")  
    })
}