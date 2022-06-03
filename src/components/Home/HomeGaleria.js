import React from 'react'

import galeria from '../galeria/galeria.json';

import { plus } from '../Common/Icons'
import { Link } from 'react-router-dom'

export const HomeGaleria = () => {
    return (
        <div className="home-galeria">

            <div className="mobile-separator">

            </div>

            <div className="home-galeria_title">
                <h2>Galería</h2>
            </div>

            <div className="home-galeria_container">

                <div className="desktop-hide text">Descubre los espacios y experiencias que nos hacen diferentes.</div>

                <div className="home-galeria_images">
                    {galeria.map((img, i) => (

                        <>
                            {i < 3 &&
                                <img src={process.env.PUBLIC_URL + '/assets/galeria/' + img} alt="imagen" />
                            }

                        </>


                    ))
                    }
                </div>

                <Link to="/galeria">
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
