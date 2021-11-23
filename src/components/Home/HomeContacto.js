import React from 'react'
import { chevronUp, envelope } from '../Common/Icons'

export const HomeContacto = () => {
    return (
        <div className="home-contacto" id="contacto">
            <div className="home-contacto_container">
                <div className="home-contacto_images">
                    <div className="home-contacto_images_rings ">
                        <div className="home-contacto_images_envelope">
                            <div className="icon-btn">
                                {envelope}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="home-contacto_text">
                    <h4>DEJANOS TU OPINION</h4>
                    <h2>Contáctanos</h2>
                    <h3>
                        <a href="feriavassar@paramopresenta.com">
                            feriavassar@paramopresenta.com
                        </a>
                    </h3>
                </div>
                <hr className="" />
            </div>


            <div className="home-contacto_comebackUp">
                <a href="#home" className="scrollTo">
                    <span>Volver arriba</span>
                    <div className="">
                        {chevronUp}
                    </div>
                </a>
            </div>
        </div>
    )
}
