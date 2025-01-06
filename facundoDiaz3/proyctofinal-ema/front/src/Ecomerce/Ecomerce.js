
import Premium from '../img/100_premium_whey_2_kg_-_usn.jpg';
import Pro from '../img/100-whey-pro-5lb-gn.jpg';
import Isolate from '../img/100wheyisolate-2lb-gnn.jpg';
import Lean from '../img/amino-lean-usn_1.jpg';
import Cibeles from '../img/cibeles_wp_whey-protein_2021_1.png';
import Barra from '../img/D_NQ_NP_822152-MLU71106661817_082023-O.webp';
import Medias from '../img/medias negras.webp';
import Bolso from '../img/bolso.webp';
import RemeraH from '../img/remera.webp';
import Mochila from '../img/mochila.webp';
import RemeraM from '../img/remer mujer.webp';
import Short from '../img/short.webp';
import Guantes from '../img/guantes.webp';
import Button from 'react-bootstrap/Button';
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous"></link>


const Ecomerce = () => {


const Articulos =[
    {Nombre: 'Whey premium', Precio: '$7150',descripcion: 'Medida: 30 g --Proteina: 23.5g  -- BCAA: 5g', img: Premium},                          
    {Nombre: 'whey-pro', Precio: '$2190' ,descripcion: 'Medida: 30 g <>Proteina: 24g -- BCAA: 22% -- Glutamina: 4g',  img: Pro},
    {Nombre: 'Whey Isolate Gold', Precio: '$3690',descripcion: 'Medida: 30 g -- Proteina: 27g  -- BCAA: 6g  --  Grasas y Carbos: 0g   ',  img: Isolate},
    {Nombre: 'Aminoácido Lean USN', Precio: '$2280',descripcion: ' Medida: 10,5 g -- SODIO: 65g--  POTASIO: 109mg -- VITAMINA B6: 2mg -- ACIDO FOLICO: 0.4mg-- LEUCINA: 2500mgISOLEUCINA: 1250mg-- VALINA: 1250mg-- GLUTAMINA: 2000m' , img: Lean},
    {Nombre: 'Wp Cibeles® 4lb Whey Protein', Precio: '$3799', descripcion: 'Medida: 10 g -- PROTEINA: 28g- CARBOHIDRATOS 48%- GRASAS 0%-14 VITAMINAS y 14 MINERALES CON EL AGREGADO L-CARNITINA-- APORTA 4,5 g GLUTAMINA y 5,4 g de BCAAS-- SIN GLUTEN', img: Cibeles},
    {Nombre: 'Barritas proteicas 12 unidades', Precio: '$699', descripcion: 'Medida basada en: 40 g / 1 Uniad --Proteina: 16g- - Carbohidratos: 15g--   Grasas saturadas: 2g--   Sodio: 62g-Kcal: 139Kcal', img: Barra},
    {Nombre: 'Medias Largas Negras', Precio: '$1100',descripcion: 'Dalo todo en los entrenamientos con las medias Nike Everyday. Los hilos suaves con tecnología absorbente de transpiración ayudan a mantener los pies cómodos y secos.',  img: Medias},
    {Nombre: 'Remera Entrenamiento Hombre', Precio: '$1700',descripcion: 'Los guantes de entrenamiento Nike Gym proporcionan un gran agarre, protección y sujeción para el levantamiento de pesas, tanto para principiantes como para atletas de cross training con más experiencia.',  img: Guantes},
    {Nombre: 'Remera Entrenamiento Mujer', Precio: '$1700',descripcion: 'La colección Nike Pro te brinda la confianza que necesitás para superar tus metas personales. Esta remera de ajuste entallado ofrece una sensación suave y elástica que se adapta a tus deportes y ejercicios favoritos. Además, presenta un dobladillo redondeado que brinda cobertura adicional y una sensación de seguridad cuando lo llevas por dentro de una prenda para la parte inferior.',  img: RemeraH},
    {Nombre: 'Guantes Entrenamiento', Precio: '$1700', descripcion: 'Apta para entrenar o relajarte, esta remera Nike One Classic está lista para lo que quieras. La tela ligera y suave como la seda se seca rápidamente y funciona para cualquier actividad que te depare el día.', img: RemeraM},
    {Nombre: 'Short Hombre', Precio: '$2190', descripcion: 'Diseñados para correr, entrenar y practicar yoga, nuestros shorts Challenger absorbentes de transpiración mantienen la ligereza y frescura con un ajuste relajado que te ayuda a aprovechar al máximo tu movimiento. Los equipamos para algo más que solo correr, con un bolsillo cómodo que no te irritará cuando vayas de la pista al gimnasio.', img: Short},
    {Nombre: 'Mochila Nike', Precio: '$2500', descripcion: 'El mal tiempo no te impide entrenar y no debería evitar que tengas equipo seco. Ya sea descansando en el suelo o pasando el rato recargados en una cerca, esta mochila maneja condiciones de juego y práctica menos que ideales, y mantiene su pelota en el bolsillo delantero.', img: Mochila},
    {Nombre: 'Bolso Unisex', Precio: '$2790', descripcion: 'El bolso de entrenamiento Nike Academy Team ofrece un diseño duradero para organizar tus cosas. Los compartimientos designados brindan espacio para tu balón, botín de fútbol y ropa, mientras que las múltiples correas te permiten llevar cómodamente tu equipo cuando estás en movimiento.', img: Bolso}
]




const agregarAlCarrito = (producto) => {
    let carrito = JSON.parse(localStorage.getItem('carrito')) || []; 
    carrito.push(producto); 
    localStorage.setItem('carrito', JSON.stringify(carrito)); 
    alert("Productos seleccionados");
};



return(
 <>
    <main className="productosW">
    <h2 className="tProduc">Productos De Nuestra Tienda</h2>
    <section className="sectio">
        {Articulos.map((producto, index) => (
            <div key={index} className="card">
                <img src={producto.img} alt={producto.Nombre} />
                <div className="cardContenido">
                    <h3 className="cardTitulo">{producto.Nombre}</h3>
                    <p className="cardDescripcion">{producto.descripcion}</p>
                    <h3 className="cardTitulo">{producto.Precio}</h3>
                    <Button onClick={() => agregarAlCarrito(producto)} className="comprar" variant="secondary">Agregar al carrito</Button>
                </div>
            </div>
        ))}
    </section>
</main>

</>
);

    
}



export default Ecomerce;