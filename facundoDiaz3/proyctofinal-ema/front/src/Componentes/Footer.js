

import ave from '../img/impresionante-diseno-logotipo-ave-fenix_414847-186.png';
import tw from '../img/tw.jpg';
import ig from '../img/th.jpg';

const Footer = () => {
    return( 
    <footer> 
        <div className="datos">
            <img src={ave} alt="logo" />  
        </div> 
        <div className="foot">
        <li>Dirección: Magallanes 1721</li>
        <li>Departamento de Montevideo</li> 
        <li>Tel. 094317112</li>     
        <hr />    
        <h3>Nuestras Redes</h3>    
        <div className="redes">
            <img src={tw} alt="tw" />
            <img src={ig} alt="ig" />
        </div>
        <p> @AthleteTransfotmation1891</p>
        </div>
    </footer>
    );
}


export default Footer;