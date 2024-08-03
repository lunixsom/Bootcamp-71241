var cantidadDeGatos = 5;
var cantidadDePasos = 3;
var  emoji = '';
var  pasos = ''; 

for(let i=1; i<=cantidadDePasos; i++)
{
        pasos = pasos + '🐾';

    
}

for (let i=1; i<=cantidadDeGatos; i++)
{
    emoji = '🐈';
    console.log("Gato #"+ i + emoji + pasos)

}