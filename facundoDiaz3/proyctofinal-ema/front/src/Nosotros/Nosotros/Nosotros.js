import { Link } from "react-router-dom";



const Nosotros = () => {
    return( 
<main>
    <h1 className="Patro">
        Patrocinadores de primer nivel: 
        </h1> 
        <div className="patroN">
        <p>Nike / Whey Protein</p>
        
        </div>    
    <section className="section">
    <div className="cajainfo">
        <h2 className="titu"> Informacion</h2>
        <h2>Quienes Somos</h2>
        <p>Somos un equipo especializado en el alto rendimiento, quienes nos encargamos de potenciar tus habilidades para que llegues a ser un verdadero profesional en tu deporte.
        Hoy en dia contamos con un local ubicado en Uruguay Montevideo , en la brevedad veran mas noticias sobre un nuevo local en nuestro pais hermano, Argentina Buenos Aires. </p>
        <h2>Alto rendimiento</h2>  
        <p>El deporte de alto rendimiento se refiere a la práctica deportiva llevada a cabo en un nivel élite, donde los/as atletas dedican una cantidad significativa de tiempo, esfuerzo y recursos para alcanzar su máximo potencial. Este nivel de competición está marcado por estándares excepcionales de rendimiento y una dedicación extrema al entrenamiento y la preparación física y mental.</p>  
        <h2>Nuesta Casa</h2>
        <p>Estamos agradecidos de poder contar con un local muy bien equipado para sacar tu mayor potencial, cuenta con maquinas de musculacion, picsinas de tamaño profesional, canchas con arcos de futbol y aros de basket para mejorar tus tiros y un espacio para hacer funcional.</p>    
        <h2>Nuestro Equipo</h2>
        <p>Tenemos la suerte de poder ofrecerles 5 profesioales de distintos deportes los cuales los ayudaran a cumplir sus metas. </p>
        <h2>Pagos/Mensualidad</h2>
        <p>Para obtener mas informacion sobre el costo, deberan registrarse y llenar un formulario contandonos que deporte realiza para que nosotros puedamos contactarnos y explicarle mejor todo sobre como procederemos    
        </p>
        <div>
        <Link to="/Contacto"><button className="botonFormu">Formulario</button> </Link> 
        </div>
    </div>  

    
            <div className="cajainfo2">
        <h2 classname="titu">Tienda</h2>
        <h2>Whey Protein</h2>
        <p>
        Contamos con variedades de productos de esta marca <br />      
        -Ganador de masa muscular <br />
        -BCAA <br />       
        -Proteina Aislada <br />        
        -Barrass de proteina
        </p>
        <h2>Nike</h2>
        <p>
        Aqui podran encontrar utileria de entrenamiento <br />       
        -Medias <br />
        -Bolsos <br /> 
        -Remeras Hom/Muj <br />
        -Shorts <br />
        -Guantes
        </p>
        <hr />
        </div>
        </section>
</main>
    );
}

export default Nosotros;