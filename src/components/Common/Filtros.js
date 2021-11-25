import React, { useState } from 'react'
import flecha_faq from '../../assets/flecha_faq.svg'

export const Filtros = ({ setHideSearch }) => {


    const [headerText, setHeaderText] = useState('Seleccione la categoría')

    const showFiltro = () => {
        const filtro_container = document.querySelector('.filtro-container-filtros');
        const flechita = document.querySelector('.flechita');

        filtro_container.classList.toggle('show-filtros')
        flechita.classList.toggle('turn-flechita')

    }


    const filtrar = (theme) => {
        let themeNormal = theme.toLowerCase();

        const themeSelected = document.querySelectorAll(`.${themeNormal}`)
        const startup = document.querySelectorAll('.startup')



        if (theme === 'TODO') {
            setHideSearch(false)
            for (let i = 0; i < startup.length; i++) {
                if (startup.length !== 0) {
                    startup[i].style.display = 'block'
                }
            }
        } else {

            setHideSearch(true)
            if (startup.length !== 0) {
                for (let i = 0; i < startup.length; i++) {
                    if (startup.length !== 0) {
                        startup[i].style.display = 'none'
                    }
                }

                for (let i = 0; i < themeSelected.length; i++) {
                    if (themeSelected.length !== 0) {
                        themeSelected[i].style.display = 'block'
                    }
                }
            }
        }

    }



    return (
        <div className="filtro">

            <div className="filtro-header" onClick={() => { showFiltro() }}>
                <span>{headerText}</span>
                <div className="flecha"><img className="flechita" src={flecha_faq} alt="flecha" /></div>
            </div>


            <div className="filtro-container-filtros">
                <p onClick={() => { showFiltro(); filtrar('TODO'); setHeaderText('TODO') }}>TODO</p>
                <p onClick={() => { showFiltro(); filtrar('MASCOTAS'); setHeaderText('MASCOTAS') }}> Mascotas</p>
                <p onClick={() => { showFiltro(); filtrar('HOGAR'); setHeaderText('HOGAR Y DECORACIÓN') }}> Hogar y decoración</p>
                <p onClick={() => { showFiltro(); filtrar('ACCESORIOS'); setHeaderText('ACCESORIOS') }}> Accesorios</p>
                <p onClick={() => { showFiltro(); filtrar('RESTAURANTE'); setHeaderText('RESTAURANTE') }}> Restaurante </p>
                <p onClick={() => { showFiltro(); filtrar('KIDS'); setHeaderText('KIDS') }}> Kids </p>
                <p onClick={() => { showFiltro(); filtrar('SALUD'); setHeaderText('SALUD Y BELLEZA') }}> Salud y belleza </p>
                <p onClick={() => { showFiltro(); filtrar('MERCADO'); setHeaderText('MERCADO GASTRONÓMICO') }}> Mercado gastronómico </p>
                <p onClick={() => { showFiltro(); filtrar('MODA'); setHeaderText('MODA') }}> Moda </p>
                <p onClick={() => { showFiltro(); filtrar('ARTE'); setHeaderText('ARTE Y DISEÑO') }}> Arte y diseño</p>
            </div>


        </div>
    )
}
