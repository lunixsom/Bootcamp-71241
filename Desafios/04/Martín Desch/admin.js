document.addEventListener("DOMContentLoaded", function () {
    const login = prompt("Ingrese su usuario:");
    const password = prompt("Ingrese su contraseña:");

    if (login === "admin" && password === "admin123") {
        alert("¡Bienvenido, administrador!");
    } else {
        alert("Acceso denegado. Redirigiendo a la página de inicio.");
        window.location.href = "index.html";
    }
});
