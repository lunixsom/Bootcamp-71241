
var cantidadDeGatos = 8;
var cantidadDePasos = 2;
var emojiGato = "🐈";
var emojiPasos ="🐾";
var texto1 ="";
var texto2;
var contador = 1;

for (let i = 1; i <= cantidadDeGatos; i++) {
    texto1 = "gato #"+i+": "+emojiGato;  
    //es par
    if (i % 2 == 0 ) {
        texto1 = texto1 + emojiGato;
    }    
    texto2 ="";
    for (let u = 1; u <= cantidadDePasos; u++) {
    
        texto2 = texto2 + emojiPasos;
    }
console.log(texto1 + texto2);   
}