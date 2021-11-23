import React from 'react'
import { chevronUp } from './Common/Icons'

export const Footer = () => {

    const toTop = () =>{
        window.scrollTo(0, 0);
    }


    return (
        <section className="footer ">

            <div onClick={toTop} className="footer_comeback_container flex">
                <span>Volver arriba</span>
                <div className="footer_flechaArriba">
                    {chevronUp}
                </div>
            </div>

            <div className="footer_bottom flex">
                <div>
                © VASSAR 2021
                </div>

                <div>
                    Todos los derechos reservados
                </div>
            </div>
        </section>
    )
}

