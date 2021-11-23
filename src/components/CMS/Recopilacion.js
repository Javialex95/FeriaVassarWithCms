import React, { useState } from 'react'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { formatData } from '../../lib/helpers'
import { ROUTES } from '../Router/routes'
import { EmprenForm } from './Forms/Emprendimiento/EmprenForm'
import { Modal } from './Forms/Emprendimiento/Modal'

const _defaultData = {
    nombre: null,
    categoria: null,
    descripcion: null,
    urlInsta: null,
    urlWeb: null,
    'galeria/0': null,
    'galeria/1': null,
    'galeria/2': null,
    'galeria/3': null,
    'galeria/4': null,
    'imagenMenu': 'imagenMenu.jpg',
    'logo': 'logo.png',
}

export const Recopilacion = () => {
    const [defaultData, setDefaultData] = useState(_defaultData);
    const [loading, setLoading] = useState(true);

    useEffect(async () => {
        const dataFromServer = await _defaultData; // Aqui se saca lo del server

        console.log("formatted", formatData(dataFromServer))
        setDefaultData(formatData(dataFromServer));
        setLoading(false);
    }, []);


    const closeSesion = () =>{
        localStorage.removeItem('userId')
    }

    return (
        <>

            <section className="recopilacion">
                <div className="recopilacion_left">
                    <h1>
                        Recopilación de <strong>assets</strong>
                    </h1>

                    <nav className="recopilacion_left_buttons">
                
                        <Link to={ROUTES.CMS_LOGIN}>
                            <div className="button button--active">
                                <span>Editor</span>
                            </div>
                        </Link>
                        <Link onClick={closeSesion} to={ROUTES.CMS_LOGIN}>
                            <div className="button">
                                <span>Cerrar sesión</span>
                            </div>
                        </Link>
                    </nav>

                </div>
                <div className="recopilacion_right forms"> 
                    {
                        loading ?
                            <div>Loading...</div>
                            :
                            <EmprenForm data={defaultData} />
                    }
                </div>
            </section>

            <Modal />

        </>
    )
}
