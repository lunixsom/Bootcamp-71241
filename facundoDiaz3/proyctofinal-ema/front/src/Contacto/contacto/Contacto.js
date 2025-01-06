

const Contacto = () => {
    return (
        <div className="formulario" >
            <form action="Direccion" method="post">
                
                <label htmlFor="Nombre"> Nombre: </label>  <br />
                <input type="text" name="nombre" className="contact" /> <br /><br />
                
                <label htmlFor="Direccion"> Email:   </label> <br />
                    <input type="email" name="Email" className="contact" /> <br /> <br />
                
                <label htmlFor="Telefono"> Telefono:  </label><br />
                    <input type="number" name="telefono" className="contact" /> <br /> <br />
                    
                <label htmlFor="Texto"> Comentarios/Preguntas  </label><br />
                    <input type="text" name="Texto" className="contact" /> <br /> <br />   

                    <input type="button" value="Enviar" className="boton" /> <br />                    
            </form>
        </div>
    );

}

export default Contacto;