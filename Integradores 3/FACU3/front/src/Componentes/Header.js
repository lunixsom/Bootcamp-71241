
import nike from '../img/OIP.jpg';
import ave from '../img/impresionante-diseno-logotipo-ave-fenix_414847-186.png';
import whey from '../img/whey.jpg'

const Header = () => {
    return (

    <header> 
        <div className="ico">
                <img className="menu" src={ave} alt="logo" />
                <img src={nike} alt="nike" />
            
        </div>  
        <h1 className= "tit">
        Athlete Transformation
        </h1>
        <div className="ico">
                <img src={whey} alt="protein" />  
                <img src={ave} alt="logo" />
            
        </div>  
    </header>
    )

}

export default Header;