alert("Ingrese sesion");

let login = prompt("ingrese su usuario");

let contraseña = prompt("ingrese su contraseña")

if( (login == "admin") == true && (contraseña =="1234") == true){
    alert("Bienvenido");

} else {
    location.href =  "../index.html"
}