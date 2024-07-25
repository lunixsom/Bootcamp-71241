const username = prompt("Ingrese su usuario:");
const password = prompt("Ingrese su contraseña:");

if (username === "admin" && password === "admin") {
    alert("Bienvenido, admin!");
} else {
    alert("Acceso denegado. Redirigiendo a la página principal.");
    window.location.href = "../index.html";
}