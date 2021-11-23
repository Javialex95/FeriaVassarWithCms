import React from 'react'
import image1 from '../../assets/imagen_experiencia_6_web.png'
import image2 from '../../assets/imagen_experiencia_5_web.png'
import image3 from '../../assets/imagen_experiencia_7_web.png'
import image4 from '../../assets/textura_division_contacto_web.svg'
import { plus } from '../Common/Icons'
import {Link} from 'react-router-dom'

export const HomeExperience = () => {
    return (
        <div className="home-experience">

            <div className="mobile-separator">

            </div>

            <div className="home-experience_title">
                <h2>La experiencia</h2>
            </div>

            <div className="home-experience_container">

                <div className="desktop-hide text">Descubre los espacios y experiencias que nos hacen diferentes.</div>

                <div className="home-experience_images">
                    <div className="image image-1">
                        <img src={image1} alt="" />
                    </div>
                    <div className="image image-2">
                        <img src={image2} alt="" />
                    </div>
                    <div className="image image-3">
                        <img src={image3} alt="" />
                    </div>
                    <div className="image image--hidden image-4">
                        <img src={image1} alt="" />
                    </div>
                    <div className="image image--hidden image-5">
                        <img src={image1} alt="" />
                    </div>
                    <div className="image image--hidden image-6">
                        <img src={image1} alt="" />
                    </div>
                    <div className="image image--hidden image-7">
                        <img src={image3} alt="" />
                    </div>
                </div>

                <Link to="/experiencia">
                    <button>
                        <span>Ver más</span>
                        <div className="">
                            {plus}
                        </div>
                    </button>
                </Link>
                
            </div>
        </div>
    )
}
