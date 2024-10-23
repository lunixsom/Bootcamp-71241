


const Contacto = () => {

    return(

        <main>
        <section id="formulario">
        <h2>Formulario de contacto</h2>
        <form>
            <label for="nombre">Nombre: </label>
            <input type="text" id="nombre" name="nombre" required />
    
            <label for="email" aria-placeholder="info@dominio.com">Direccion de email: </label>
            <input type="text" id="email" name="email" required />
    
            <label for="comentarios">Comentarios: </label>
            <input type="text" id="comentarios" name="comentarios" required />
    
            <button type="button">Enviar</button>
        </form>
        </section>
        </main>
    );
}

export default Contacto;