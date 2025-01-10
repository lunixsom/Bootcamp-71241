

import {Link} from 'react-router-dom';

const Navegacion = () => {
    return (
        <>
            <nav>
                <ul className="atajos">
                <li>
                <Link to="/Nosotros">Nosotros</Link>
                </li>
                <li>
                    <Link to="/Ecomerce">Tienda</Link>
                </li>               
                <li>
                    <Link to="/Contacto">Contacto</Link>
                </li>
                <li>
                    <Link to="/Usuarios">Usuarios</Link>
                </li>
                <li>
                <Link to="/Login">Registrarse</Link>
                </li>
                <li>
                <Link to="/Registrarse">Login</Link>
                </li>
                <li>
                <Link to="/Carrito"> 
                <i className="bi bi-cart-check">
                </i>
                </Link>
                </li>
                </ul>
            </nav>
        </>
    );
}


export default Navegacion;