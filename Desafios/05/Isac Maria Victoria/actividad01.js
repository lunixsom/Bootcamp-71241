/* TRABAJO PRACTICO */

//ACTIVIDAD 1
let acu = 0;
let CantidadDeGatos = 12 ;

for (let index = 0; index < CantidadDeGatos; index++) {
    if (acu == 0) { 
        console.log("😺")
        acu++;    
    } else if (acu==1) { 
        console.log("😸")
        acu++;
        
    } else {console.log("😹")
        acu = 0;}
}

