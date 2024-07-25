const usuarioAdmin = "admin";
const contasenaAdmin = "admin";

const usuario = prompt("Escriba su usuario administrador");
const contrasena = prompt("Escriba su contraseña");

if (usuario === usuarioAdmin && contrasena === contasenaAdmin) {
    alert("Bienvenido administrador");
} else {
    alert(
        "Usuario o contraseña incorrectos, será redirigido a la página principal"
    );
    window.location.href = "index.html";
}
