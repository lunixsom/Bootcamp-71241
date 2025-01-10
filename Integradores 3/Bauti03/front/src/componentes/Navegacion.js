import "../css/Navegacion.css";
import Logo from "../img/top-10-suplementos-alimentares.ico";
import { Link} from "react-router-dom";
/* import Nav from 'react-bootstrap/Nav'; */

const Navegacion = () =>  {
    return (
                <header>
                <div id="Logo">
                    <img src={Logo} alt="Logo de suplementos" />
                </div>
                <div id="altadp">
                    <h1 style={{marginLeft: 60}}>Supleportivos</h1>
                    <p>Alta de productos</p>
                </div>
                <nav>
                    <ul>
                        <li><Link to="/">Inicio</Link></li>
                        <li><Link to= "Alta">Alta </Link></li>
                        <li><Link to="/contacto">Contacto</Link></li>
                        <li><Link to="/nosotros">Nosotros</Link></li>
                        <li><Link to="/productos">Lista de productos</Link></li>   
                    </ul>
                    <form id="buscador">
                        <input type="text" placeholder="" />
                        <button type="submit">Buscar</button>
                    </form>
                </nav>
            </header> 
            
        
        /*        <Nav>
            <Nav.Item>
                <Nav.Link href="/">
                    Home
                </Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link href="/alta">
                    Alta de productos
                </Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link href="/productos">
                    Productos
                </Nav.Link>
            </Nav.Item>
        </Nav> */
    );
}

export default Navegacion;