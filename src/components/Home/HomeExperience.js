import React from 'react'
import image1 from '../../assets/imagen_experiencia_6_web.png'
import image2 from '../../assets/imagen_experiencia_5_web.png'
import image3 from '../../assets/imagen_experiencia_7_web.png'

import image4 from '../../assets/experience/cuadrado/9.png'
import image5 from '../../assets/experience/horizontal/1.png'
import image6 from '../../assets/experience/horizontal/2.png'
import image7 from '../../assets/experience/vertical/3.png'
import image8 from '../../assets/experience/vertical/4.png'
import image9 from '../../assets/experience/vertical/5.png'
import image10 from '../../assets/experience/vertical/6.png'

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
                        <img src={image7} alt="" />
                    </div>
                    <div className="image image-2">
                        <img src={image8} alt="" />
                    </div>
                    <div className="image image-3">
                        <img src={image5} alt="" />
                    </div>
                    <div className="image image--hidden image-4">
                        <img src={image6} alt="" />
                    </div>
                    <div className="image image--hidden image-5">
                        <img src={image10} alt="" />
                    </div>
                    <div className="image image--hidden image-6">
                        <img src={image4} alt="" />
                    </div>
                    <div className="image image--hidden image-7">
                        <img src={image9} alt="" />
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
