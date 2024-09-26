
let miBoton = document.getElementById("boton");



miBoton.addEventListener("click", function() {
    
    
    let user = prompt("¿Quién se presenta hoy? (Mario, Luigi, Bowser, Peach, Yoshi, Toad, Toadette, Daisy");

    miBoton.style.display = "none";
    
    console.log(`Has elegido a ${user}`);
    
    let span = document.getElementById("personaje");
    
    user = user.toLowerCase();
    
    console.log(user);
    
    
    let div = document.getElementById(`${user}`);
    switch (user) {
        case "mario":
            span.textContent = user;
            
            div.setAttribute("title", "Presentado");
            break;
            case "luigi":
            span.textContent = user;
            
            div.setAttribute("title", "Presentado");
            break;
            case "bowser":
                span.innerHTML = `Bowser Morton Koopa ${user}`;
                div.setAttribute("title", "Presentado");
            break; 
            case "peach":
                span.innerHTML = `Princesa Peach Toadstool ${user}`;
                div.setAttribute("title", "Presentado");
            break; 
            case "yoshi":
                span.innerHTML = `T. Yoshisaur Munchakoopas ${user}`;
                div.setAttribute("title", "Presentado");
                break;
        case "toad":
                span.textContent = user;
            
                div.setAttribute("title", "Presentado");
                break;
            case "toadette":
            span.textContent = user;
            
            div.setAttribute("title", "Presentado");
            break;
            case "daisy":
                span.innerHTML = `Princesa Daisy ${user}`;
                div.setAttribute("title", "Presentado");
            break;
       
        default:
            span.innerHTML = "Desconocido";
            break;
    } 

});


const mostrar = (user) => {

    let div = document.getElementById(`${user}`);
    let span = document.getElementById("personaje");
    span.textContent = user;
    div.setAttribute("title", "Presentado");
    
}
