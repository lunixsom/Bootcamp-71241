
alert ("Ingresa los siguientes datos para loguearte");
let usuario = prompt("Ingresa tu usuario");
let clave = prompt("Ingresa tu clave");

if(usuario=="admin@gmail.com" && clave=="1234"){
    console.log("Bienvenido a tu cuenta");
    alert("Bienvenido a tu cuenta")
} else {
    alert("Error");
    window.location="../index.html";
}

console.log(window);

/* if(usuario!="admin@gmail.com" || clave!="1234"){
    alert("Error");
    window.location="../index.html";
} */