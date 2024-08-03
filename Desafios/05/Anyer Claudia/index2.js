var cantidadDeGatos = 5;
      var cantidadDePasos = 2;
      var emojiGato = "🐈";
      var emojiPasos ="🐾";
      var texto1 ="";
      var texto2;

      for (let i = 1; i <= cantidadDeGatos; i++) {
        
        texto1 = "gato #"+i+": "+emojiGato;
        texto2 ="";
        for (let u = 1; u <= cantidadDePasos; u++) {
        
            texto2 = texto2 + emojiPasos;
        }

        console.log(texto1 + texto2);
      
      }
 
      
   