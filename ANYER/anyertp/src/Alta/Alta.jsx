


const Alta = () => {

    return(
<main>

<section id="formulario">
    <h2>Formulario de ingreso de producto </h2>
    <form id="tarjeta">
        <label for="nombre">Nombre: </label>
        <input type="text" id="nombre" name="nombre" required />

        <label for="Precio">Precio: </label>
        <input type="text" id="precio" name="precio" required />

        <label for="stock">stock: </label>
        <input type="text" id="stock" name="stock" required />

        <label for="marca">Marca: </label>
        <input type="tel" id="marca" name="marca" />

        <label for="categoria">categoria: </label>
        <input type="text" id="categoria" name="categoria" required />

        <label for="descripcioncorta">Descripcion Corta: </label>
        <input type="text" id="descripcionCorta" name="descripcioncorta" required /> 

        <label for="descripcionlarga">descripcionlarga: </label>
        <input type="text" id="descripcionLarga" name="descripcionlarga" required />

        <label for="enviosincargo">Envio sin cargo: </label>
        <input type="tel" id="envioSincargo" name="enviosincargo" />

        <label for="edaddesde">Edad desde: </label>
        <input type="number" id="edadDesde" name="edaddesde" required />

        <label for="imagen">Foto: </label>
        <input type="file" id="Foto" name="Foto" />


        <button type="submit">Enviar</button>

    </form>

</section>
</main>
    );
}

export default Alta;