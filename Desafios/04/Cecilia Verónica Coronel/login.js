let email = 'pepe@gmail.com';
let password = '1234';
 
let emailUser = prompt ('introduce tu email: ');
let passwordUser = prompt ('introduce tu password: ');

if(email == emailUser && password == passwordUser){

    alert('Bienvenido  al mejor sitio de pizza!!');
}
else{
    alert('Sus datos son incorrectos!');
    window.location.href = './index.html';
}
