import "../css/Footer.css";
import { Link} from "react-router-dom";
import IgLogo from "../img/ig.ico";
import Facebook from "../img/facebook.ico"
import Twitter from "../img/twitter.ico"


const Footer = () => {
return(
    <footer>
    <div class="footer-social">
        <h3>Redes Sociales</h3>
        <Link to="https://facebook.com"><img src={Facebook} alt="Logo de Facebook" /></Link>
        <Link to="https://www.instagram.com/"><img src={IgLogo} alt="Logo de Instagram" /></Link>
        <Link to="https://x.com/i/flow/login?redirect_after_login=%2Fhome"><img src={Twitter} alt="Logo de Twitter" /></Link>
    </div>        
    <div class="footer-legal">
        <p>2024 Supleportivos. Todos los derechos reservados.</p>
    </div>
</footer>
)
}

export default Footer;