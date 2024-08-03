/* ** EJERCICIO 3 **
Adaptar el ejercicio anterior para que se muestren 2 gatos alternadamente:
var cantidadDeGatos = 10;
var cantidadDePasos = 4;
```
Gato #1: 🐈 🐾🐾🐾🐾
Gato #2: 🐈‍⬛ 🐾🐾🐾🐾
Gato #3: 🐈 🐾🐾🐾🐾
Gato #4: 🐈‍⬛ 🐾🐾🐾🐾
Gato #5: 🐈 🐾🐾🐾🐾
Gato #6: 🐈‍⬛ 🐾🐾🐾🐾
Gato #7: 🐈 🐾🐾🐾🐾
Gato #8: 🐈‍⬛ 🐾🐾🐾🐾
Gato #9: 🐈 🐾🐾🐾🐾
Gato #10: 🐈‍⬛ 🐾🐾🐾🐾
```
*/

var cantidadDeGatos = 10;
var cantidadDePasos = 4;
var  emoji = '';
var  pasos = ''; 
var contador = 1

for(let i=1; i<=cantidadDePasos; i++)
{
        pasos = pasos + '🐾';


}

for (let i=1; i<=cantidadDeGatos; i++)
{    
    if(contador==1) 
        {
            emoji ='🐈';
        }
        else if((contador% 2 == 0))
        {
            emoji ='🐈‍⬛';
        }
        else{
            emoji = '🐈';
            contador=3;
}

    console.log("Gato #"+ i + emoji + pasos)
contador++;
}