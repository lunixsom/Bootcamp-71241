var cantidadDeGatos = 22;
var cantidadDePasos = 2;
var  emoji = '';
var  pasos = ''; 
var contador = 1

for(let i=1; i<=cantidadDePasos; i++)
{
        pasos = pasos + '🐾';

    
}

for (let i=1; i<=cantidadDeGatos; i++){ 
    if( (i % 2 == 0))
        {
            emoji ='🐈‍⬛';
        }
        else{
            emoji = '🐈';
        }
    
    console.log("Gato #"+ i + emoji + pasos)
}

/* for (let i=1; i<=cantidadDeGatos; i++)
    {if(contador==1) 
        {
            emoji ="🐈";
        }
        else if( (contador% 2 == 0))
        {
            emoji ='🐈‍⬛';
        }
        else{
            emoji = '🐈';
            contador=3;
        }
    
    console.log("Gato #"+ i + emoji + pasos)
contador++;
} */
