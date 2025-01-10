import "../css/Contacto.css"

const Contacto = () => {
    return(
        <>
        <main>
        <h1>Contacto</h1>
        <div id="formulario">
        <form id="contact-form">
            <label for="nombre">Nombre:</label>
            <input type="text" id="nombre" name="nombre" required />

            <label for="email">E-mail:</label>
            <input type="email" id="email" name="email" required />

            <label for="comentarios">Comentarios:</label>
            <textarea id="comentarios" name="comentarios" required></textarea>

            <button type="submit">Enviar</button>
        </form>
    </div>
    </main>
    </>
    )
}

export default Contacto;