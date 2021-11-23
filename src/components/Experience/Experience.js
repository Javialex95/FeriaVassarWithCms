import React from 'react'
import { chevronUp } from '../Common/Icons';
import { experiences } from './experiences'

export const Experience = () => {
    return (
        <>
            <section id="top" className="experience">
                <div className="experience_title">
                    <h1>
                        <span>experiencia</span>
                    </h1>

                    <div className="desktop-hide hidden">Un espacio de emprendedores y para emprendedores, un lugar donde el diseño, la música, la cultura y la gastronomía se unen para dar vida a este gran movimiento creativo.</div>
                </div>
                <div className="experience_content">
                    <div className="experience_content_container">
                        <div className="experience_content_left">
                            <div className="">Un espacio de emprendedores y para emprendedores, un lugar donde el diseño, la música, la cultura y la gastronomía se unen para dar vida a este gran movimiento creativo.</div>
                        </div>
                        <div className="experience_content_right">
                            {
                                experiences.map((item, index) => {
                                    return (
                                        <div className="experience_item" key={index}>
                                            <div className="experience_item_image">
                                                <img src={item.image} alt="music" />
                                            </div>
                                            <div className="experience_item_content">
                                                <div className="title">{item.title}</div>
                                                <div className="description">{item.description}</div>
                                            </div>
                                        </div>
                                    );
                                })
                            }
                        </div>
                    </div>
                </div>
            </section>
            
            <footer className="home-footer desktop-hide">
                <div className="home-footer_top">
                    <div className="home-contacto_comebackUp">
                        <a href="#top" className="scrollTo">
                            <span>Volver arriba</span>
                            <div className="">
                                {chevronUp}
                            </div>
                        </a>
                    </div>
                </div>
                <div className="home-footer_bottom">
                    <div className="">© VASSAR 2021</div>
                    <div className="">Todos los derechos reservados</div>
                </div>
            </footer>
        </>
    )
}
