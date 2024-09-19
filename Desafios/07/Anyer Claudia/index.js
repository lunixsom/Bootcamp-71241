


/* 

    let nombreIngresado = prompt("¿Quién se presenta hoy? (Mario, Luigi, Bowser, Peach, Yoshi, Toad, Toadette, Daisy)");
    console.log("El usuario ingresó:", nombreIngresado);
  
  
    let span = document.getElementById("nombreCompleto")

    switch (nombreIngresado) {
      case "Mario":
        let mario = document.getElementById("mario")
     
        mario.title="Presentado"
         
      span.innerText="mario"

        break;
    
        case "Luigi":

          span.innerText="Luigi"

          let luigi=document.getElementById("luigi")

          luigi.title="Presentado"

        

          break;
          case "Bowser ":

          span.innerText="Bowser Morton Koopa"

          break;
      
          case "":
            span.innerText="Luigi"/* completar */
            

     /*  default:
        span.innerText="desconocido"
        break;
    } */
   




    let presentar=document.getElementById("boton-presentar")/*  asignando a la vriable presentar la referencia id "boton presentar" */

    presentar.addEventListener("click",() =>{ 
      let nombreIngresado = prompt("¿Quién se presenta hoy? (Mario, Luigi, Bowser, Peach, Yoshi, Toad, Toadette, Daisy)");
      console.log("El usuario ingresó:", nombreIngresado);/* addeventistener es asignar un evento a una variable en este caso a la variable presentar ya declarada en let */

      
    let span = document.getElementById("nombreCompleto")/* tomo el span y lo manejo desde js */

    switch (nombreIngresado) {
      case "Mario":
        let Mario = document.getElementById("mario")
     
        mario.title="Presentado"
         
      span.innerText="mario"

        break;
    
        case "Luigi":

          span.innerText="Luigi"

          let luigi=document.getElementById("luigi")

          luigi.title="Presentado"

          case "Bowser":
            let Bowser = document.getElementById("bowser")
         
            bowser.title="Presentado"
             
          span.innerText="bowser"
    
            break;

            case "Peach":
        let Peach = document.getElementById("peach")
     
        peach.title="Presentado"
         
      span.innerText="peach"

        break;

        case "Yoshi":
        let Yoshi = document.getElementById("yoshi")
     
        yoshi.title="Presentado"
         
      span.innerText="yoshi"

        break;

        case "Toad":
        let Toad = document.getElementById("toad")
     
        toad.title="Presentado"
         
      span.innerText="toad"

        break;

        case "Toadete":
          let Toadete = document.getElementById("toadete")
       
          toad.title="Presentado"
           
        span.innerText="toadete"
  
          break;

          case "Daisy":
            let Daisy = document.getElementById("daisy")
         
           daisy.title="Presentado"
             
          span.innerText="daysi"
    
            break;

      default:
        span.innerText="desconocido"
        break;
    }
    
      
   presentar.style.display= "none" })

 /*   encontara otro elemento y aplicar el addEventListener */

  
    let Cajas=document.getElementById("cajas")

    Cajas.style.backgroundColor ="blue"
     

   




  
  
  