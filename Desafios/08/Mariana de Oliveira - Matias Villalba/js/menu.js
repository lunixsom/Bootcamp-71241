const opciones = document.querySelectorAll(".card");

let carrito = [];
let preciototal = 0;
let tituloProducto = "";
let precioProducto = 0;
const modal = document.querySelector(".container-modal");
const agregar = modal.querySelector(".agregar");


opciones.forEach((opcion) => {
  opcion.addEventListener(`click`, (evento) => {
    const titulo = opcion.querySelector(".negro").textContent;
    tituloProducto = titulo;
    const precio = opcion.querySelector(".precioProducto").textContent;
    precioProducto = precio;

    modal.style.display = "flex";

    const titulomodal = modal.querySelector(".titulo-modal");

    titulomodal.textContent = titulo;

    const precioModal = modal.querySelector(".precioModal");

    precioModal.textContent = precio;

    const cerrarmodal = modal.querySelector(".cerrar");

    cerrarmodal.addEventListener("click", () => {
      modal.style.display = "none";
    });
  });
});


agregar.addEventListener("click", () => {
  const cantidad = modal.querySelector("#Cantidad").value;

  const comentario = modal.querySelector("#Comentario").value;

  const obj = {
    titulo: tituloProducto,
    precio: precioProducto,
    cantidad: cantidad,
    comentario: comentario,
  };

  carrito.push(obj);

  cantidad.value = "";
  comentario.value = "";

  const numeroCarrito = document.querySelector(".numeroCarrito");


  preciototal = preciototal + cantidad * precioProducto;


  numeroCarrito.textContent = preciototal;

  const cerrarmodal = modal.querySelector(".cerrar");

  cerrarmodal.click();
});
