let email = 'admin@gmail.com';
let password = '4321';

let emailUser = prompt('Ingrese su Email: ');
let passwordUser = prompt('Ingrese su contraseña ');

console.log(window);

if(email == emailUser && password == passwordUser){
    /* window.location.href = '../index/index.html'; */
    alert('Bienvenido a ANISSA & TAM');
}

else {
   
    alert('Email o contraseña incorrectos');
    window.location.href = '../index/index.html';
}