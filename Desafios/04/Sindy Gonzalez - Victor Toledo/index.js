alert("Bienvenido a nuestro E-commerce, inicia sesión para continuar")

let email = "admin@gmail.com"
let password = "12345"

let emailUser = prompt("Introduce tu Email")
let emailPassword = prompt("Introduce tu Contraseña")

if (email == emailUser && password == emailPassword) {
    alert("Bienvenido a la Pagina del Administrador")
} else {
    alert("Bienvenido a la pagina de E-commerce")
    window.location = "../index.html"
}

