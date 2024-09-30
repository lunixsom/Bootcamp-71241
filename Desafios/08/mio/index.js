let header = document.createElement("header"); // seleccionamos el header

let nav = document.createElement("nav"); // creamos un elemento nav

let ul = document.createElement("ul"); // creamos un elemento ul

ul.className = "listas"; // le damos una clase al ul

nav.appendChild(ul); // agregamos el ul al nav

const items = ["Inicio", "Practico 07", "Contacto", "Nosotros"];

items.forEach(item => {
    let li = document.createElement("li"); // creamos un elemento li
    li.innerHTML = item; // le agregamos el texto al li
    ul.appendChild(li); // lo agregamos al ul
})


header.appendChild(nav);

document.body.appendChild(header)

const arrayProductos = [
    {   
        nombre:"teclado",
        precio: 45,
        descripcion:"retroiluminado"
    },
    {   
        nombre:"mouse",
        precio: 20,
        descripcion:"wireless"
    },
    {   
        nombre:"monitor",
        precio: 65,
        descripcion:"curvo 27 pulgadas"
    }
]

arrayProductos.forEach(prod => {
    let div = document.createElement("div");
    div.className="producto" 

    let tituloProd = document.createElement("h1")
    tituloProd.innerText = prod.nombre.toUpperCase()

    let precioProd = document.createElement("p")
    precioProd.innerText = prod.precio


    div.appendChild(tituloProd)
    div.appendChild(precioProd)
    
    document.body.appendChild(div); 
})

let productos = document.querySelectorAll(".producto")

let suma = 0 
let contador = 0

productos.forEach(prod => {
    prod.addEventListener("click", (e) => {
        contador++

        let precio = parseInt(e.target.children[1].textContent)
        console.log(e.target.children[1].textContent)
        
        suma = suma + precio
        console.log(contador);
        console.log(suma);
        
        
    })
})



    