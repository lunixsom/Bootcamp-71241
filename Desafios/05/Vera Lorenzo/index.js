/* ** EJERCICIO 1: **
Crear una variable con un valor numérico libre:
var cantidadDeGatos = 10;
Esto debe generar en la consola lo siguiente:
```
Gato #1: 😺
Gato #2: 😸
Gato #3: 😹
Gato #4: 😺
Gato #5: 😸
Gato #6: 😹
Gato #7: 😺
Gato #8: 😸
Gato #9: 😹
Gato #10:😺
```
Noten que son 3 emojis distintos que se se van intercalando.

La consola reflejará los cambios según el contenido de la variable.
var cantidadDeGatos = 1;
```
Gato #1: 😺
```

var cantidadDeGatos = 4;
```
Gato #1: 😺
Gato #2: 😸
Gato #3: 😹
Gato #4: 😺
```

(Siempre son los mismos 3 emojis intercalados).
*/

var cantidadDeGatos = 10;
var emoji = '';
var contador = 1;

for (let i=1; i<=cantidadDeGatos; i++){ 
    if(contador==1) 
    {
        emoji = '😺';
    }
    else if(contador==2)
    {
        emoji ='😸';
    }
    else{
        emoji = '😹';
        contador=0;
    }
    
    console.log("Gato #"+ i + emoji)
    
    contador++;
}


