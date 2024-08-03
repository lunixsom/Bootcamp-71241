var cantidadDeGatos = 10;
 var emoji =" "
 var contador = 1
    // va del uno al 10 i
for (let i  = 1; i <= cantidadDeGatos; i++) { 

    //primer vuelta la carita
    if (contador == 1 ) {emoji ="😺"
        
    }
// sino si, se cumple esta segunda condicion 
    else if (contador== 2) {emoji ="😸"}

// si no se cumplio ninguna de la anteriores antra aca y luego entre al contador =1que se resetea y vuelve a la posicion 1
    else {emoji = "😹" 
        contador=0
    }

    contador++

    console.log("gato #"+i+": "+emoji ) }
  