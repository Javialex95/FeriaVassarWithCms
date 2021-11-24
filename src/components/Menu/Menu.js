import React from 'react'
import { Link } from 'react-router-dom'
import { SearchMenu } from '../Common/SearchMenu';
import { ROUTES } from '../Router/routes';
import imagen_menu_web from '../../assets/imagen_menu_web.png'
import logo_feria_vassar_menu_desktop from '../../assets/logo_feria_vassar_menu_desktop.png'

export const Menu = ({ redirect, setRedirect, toggleMenu }) => {



    const closeMenu = () => {
        const menu = document.querySelector('.menu')
        const body = document.querySelector('body')

        menu.classList.remove('show-menu');
        body.style.overflow = "auto"

    }

    return (
        <>
            <div className="menu flex">

                <div className="menu-items">

                    <ul className="menu-items-list">
                        <Link onClick={() => { closeMenu(); toggleMenu(); }} to="/">Home</Link> <br />
                        <Link onClick={() => { closeMenu(); toggleMenu(); }} to={ROUTES.STARTUPS}> <b>Emprendimientos</b> </Link> <br />
                        <Link onClick={() => { closeMenu(); toggleMenu(); }} to={ROUTES.VASSAR}>Es <b>Vassar</b> </Link> <br />
                        <Link onClick={() => { closeMenu(); toggleMenu(); }} to={ROUTES.EXPERIENCE}> Experiencia </Link> <br />
                        <Link onClick={() => { closeMenu(); toggleMenu(); }} to={ROUTES.FAQ}>FAQ</Link> <br />
                        <a href="https://www.entradasamarillas.com/event/feria-vassar" target="_blank" rel="noreferrer">Adquiere tus <b>entradas</b> </a><br />

                        <a href="http://localhost:3000/#/#contacto" onClick={() => { closeMenu(); toggleMenu(); }}>Contacto</a>
                    </ul>

                    <SearchMenu
                        toggleMenu={toggleMenu}
                        setRedirect={setRedirect}
                        className="white-search"
                        redirect={redirect}
                    />

                </div>

                <div className="menu-images">
                    <img className="imagen_menu_web" src={imagen_menu_web} alt="imagen menu web" />

                </div>


                <img className="logo_feria" src={logo_feria_vassar_menu_desktop} alt="logo_feria_vassar_menu_desktop" />
            </div>
        </>

    )
}
