var cantidadDeGatos = 8;
var cantidadDePasos = 6;
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