import React, { useEffect, useState } from 'react'
import galeria from './galeria.json';

export const Galeria = () => {

    const [imagen, setImagen] = useState('');


    const showModal = () => {
        document.querySelector('.galeria_modal').classList.toggle('show_modal')
    }



    return (
        <div className="galeria">
            <div className="experience_title">
                <h1>
                    <span>Galería</span>
                </h1>
            </div>


            <div className="galeria_contenedor flex">
                {galeria.map(img => (
                    <img onClick={()=> {showModal(); setImagen(img)}} src={process.env.PUBLIC_URL + '/assets/galeria/' + img} alt="imagen" />
                ))
                }
            </div>


            <div className="galeria_modal">
                <div className="cerrar" onClick={()=> {showModal(); setImagen("")}}>X</div>
                <img  src={process.env.PUBLIC_URL + '/assets/galeria/' + imagen} alt="imagen grande" />
            </div>
        </div>


    )
}

