import img1 from '../img/celularMotorola.jpg'
import img2 from '../img/celularMotorola.jpg'
import img3 from '../img/celularMotorola.jpg'


const Inicio = () => {

    return(

<main>
        <section id="productos">
            <h2>OFERTAS UNICAS</h2>
            <div class="tarjetas">
                <div class="tarjeta">
                    <img src={img1} alt="Motorola" />
                    <h3> <strong>Celular Motorola Moto E14</strong></h3>
                    <p>
                        Memoria interna: 256 GB</p >
                    <p>Cámara trasera principal: 50 Mpx</p >
                    <p>Cámara frontal principal: 16 Mpx</p>
                    <p>$
                        599.999</p>
                        <a href="destino" >comprar</a>
                </div>
                <div class="tarjeta">
                    <img src={img2} alt="samsung" />
                    <h3>Samsung Galaxy A05 64 GB</h3>
                    <p>Memoria interna: 64 GB</p >
                     <p>
                        Cámara trasera principal: 50 Mpx</p >
                        <p>Cámara frontal principal: 8 Mpx</p >
                            <p>$ 199.000</p>
                            <a href="destino" class="tarjetasboton">comprar</a>
                </div>
                <div class="tarjeta">
                    <img src={img3} alt="deportes" />
                    <h3>Banda elastica entrenamiento</h3>
                    <p>Ideal para fuerza y flexibilidad.</p >
                    <p> Adecuadas para pilates y yoga.</p >
                    <p>Soportan múltiples resistencias</p >
                     <p>$ 13.415</p>
                     <a href="destino" class="tarjetasboton">comprar</a>
                </div>
            </div>
        </section>
    </main>
    )
}

export default Inicio;