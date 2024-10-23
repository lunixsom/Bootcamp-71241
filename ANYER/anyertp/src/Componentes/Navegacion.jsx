import { Link } from "react-router-dom";

const Navegacion = () => {

    return (
        <header>
        <h1>VENDE TODO  YA</h1>
        <nav>
            <ul>
                <li>
                    <Link to='/'>
                        Inicio
                    </Link>
                </li>
                <li>
                    <Link to='/alta'>
                        Alta de Productos
                    </Link>
                </li>
                <li>    
                    <Link to='/contacto'>
                        Contacto
                    </Link>
                </li>
                <li>
                    <Link to='/nosotros'>
                        Nosotros
                    </Link>
                </li>
            </ul>
        </nav>
    </header>
    );

 }

 export default Navegacion;
