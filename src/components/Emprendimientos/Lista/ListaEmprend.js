import React from 'react'
import { Link } from 'react-router-dom'
import { Cargando } from '../../Common/Cargando'
import { Header } from '../Header'


export const ListaEmprend = ({ perfiles, error }) => {
    return (
        <div className="lista-emprend">

            {window.innerWidth > 700 &&
                <Header />
            }

            <div className="lista-emprend-items">
                {perfiles.map(item => (
                    <>
                        {item.logo &&
                            <Link to={`/emprendimiento/${item._id}`}>
                                <div className={`startup item ${item.categoria.toLowerCase()}`}>
                                    <span>{item.nombre}</span>
                                    {item.imagenMenu &&
                                        <img src={item.imagenMenuUrl} alt={'emprendimiento'} />
                                    }
                                </div>
                            </Link>
                        }
                    </>
                ))}

                {perfiles.length === 0 && error === '' &&
                    <Cargando    />

                }

                {perfiles.length === 0 && error !== '' &&
                    <div >

                        <h3>{error} </h3>
                    </div>

                }

            </div>



        </div>
    )
}
