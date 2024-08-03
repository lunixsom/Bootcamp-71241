

var login = prompt("Ingrese su login:");
var password = prompt("Ingrese su password:");

if (login === "ale" && password === "mendoza") {
  alert("Bienvenido, administrador!");
} else {
  alert("Login o password incorrectos. Por favor, inténtelo nuevamente.");
  window.location.href = "index.html"; // Redirige a la página principal
}


