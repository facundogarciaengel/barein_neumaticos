import { FaBalanceScale, FaWrench } from 'react-icons/fa';
import { GiCarWheel, GiScrewdriver } from 'react-icons/gi';
import { IoMdSpeedometer } from 'react-icons/io';
import { GiBrakeDisc, GiSuspensionBridge } from 'react-icons/gi';
import React from 'react';
import './Servicios.css';
import WhatsAppButton from '../whatsappButton/WhatsAppButton';


function Servicios() {
    return (
        <section className="servicios">
            <div className="servicios-container">
                <div className="servicio">
                    <div className="servicio-icono">
                        <GiCarWheel />
                    </div>
                    <h3>Balanceo y alineación</h3>
                    <p>
                    El balanceo ajusta los pesos de un neumático y su llanta para evitar desgastes y vibraciones.
                    La alineación evita que el vehículo tenga tendencia a irse a los lados. 
                    </p>
                </div>

                <div className="servicio">
                    <div className="servicio-icono">
                        <IoMdSpeedometer />
                    </div>
                    <h3>Mecánica general</h3>
                    <p>
                        Reparación de ejes y semiejes
                        Sustitución de extremos, rótulas y parrillas
                        Reparación de caja mecánica e hidráulica
                        Cambio de correa de distribución

                    </p>
                </div>

                {/* <div className="servicio">
          <div className="servicio-icono">
            <GiBrakeDisc />
          </div>
          <h3>Frenos</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div> */}

                <div className="servicio">
                    <div className="servicio-icono">
                        <GiSuspensionBridge />
                    </div>
                    <h3>Suspensión</h3>
                    <p>
                    Realizamos cambio de amortiguadores, resortes, barras, bujes y demás.

                    </p>
                </div>

                <div className="servicio">
                    <div className="servicio-icono">
                        <FaWrench />
                    </div>
                    <h3>Reparación de llantas</h3>
                    <p>
                    Nuestro servicio consiste en la restauración, pintado y diamantado de llantas. 

                    </p>
                </div>
            </div>
            <WhatsAppButton />
        </section>
    );
}

export default Servicios;
