// Simulación de base de datos
let email = "admin@gmail.com";
let password = "1234";

// Recibimos datos del usuario
let emailUser = prompt("Introduce tu Email: ");
let passwordUser = prompt("Introduce tu Password: ");

// Comparar los datos del usuario con la base de datos
if (email === emailUser && password === passwordUser) {
  alert("Bienvenido al modo admin");
} else {
  alert("Credenciales incorrectas. Redirigiendo a la página de inicio.");
  window.location.href = "/index.html"; // Redirigir a la página de inicio
}
