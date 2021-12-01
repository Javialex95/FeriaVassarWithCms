import React from 'react'
import { HomeFooter } from '../Home/Footer'
import logos_patrocinadores_dekstop from '../../assets/logos_patrocinadores_dekstop.png';
import logos_patrocinadores_movil from '../../assets/logos_patrocinadores_movil.png';

export const Patrocinadores = () => {
    return (
        <>
            <section className="patrocinadores">
                <div className="patrocinadores_bg"></div>

                <div className="flex">
                    <div className="patrocinadores_title">
                        <div className="title">
                            Patrocinadores
                        </div>
                    </div>

                    <div className="patrocinadores_content">

                        {window.innerWidth > 700 ?
                        <img src={logos_patrocinadores_dekstop} alt="logos_patrocinadores_dekstop" />
                        :

                        <img src={logos_patrocinadores_movil} alt="logos_patrocinadores_dekstop" />
                        
                    }


                    </div>
                </div>
            </section>

            <HomeFooter />
        </>
    )
}
