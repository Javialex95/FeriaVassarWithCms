import { motion } from 'framer-motion';
import React, { useState } from 'react'
// import { cross } from '../Common/Icons';
import cross from '../../assets/mas_ver_mas_experiencia_web.png'
import equisClose from '../../assets/equis_cerrar_boton_va_web_hover.svg';
import { useOuterClick } from '../Common/Hooks/useOutsideClick';
import { Menu } from './Menu';
import { useLocation } from 'react-router';
import { ROUTES } from '../Router/routes';

const test = {
    show: {
        x: 0,
        transition: { ease: "linear" }
    },
    hidden: {
        x: 150,
        transition: { ease: "linear" }
    }
}

const test1 = {
    show: {
        x: 40,
        opacity: 1,
        transition: {
            x: {
                ease: "linear",
            },
            opacity: {
                delay: 0.5,
            }
        },
    },
    hidden: {
        x: 150,
        opacity: 0,
        transition: {
            x: {
                ease: "linear",
                delay: 0.5,
            },
            opacity: {
                duration: 0.2,
            }
        }
    }
}

export const MenuOpener = () => {
    const [hover, setHover] = useState(false);
    const [text, setText] = useState("Menu");
    const [active, setActive] = useState(false);
    const [redirect, setRedirect] = useState(false);
    const location = useLocation();

    const innerRef = useOuterClick(ev => outsideClick());

    const outsideClick = () => {
        setHover(false)
    }

    const openMenu = () => {
        setActive(true)
        setText("Cerrar")
    }

    const closeMenu = () => {
        setActive(false)
        setText("Menu")
    }

    const toggleMenu = () => {
        const menu = document.querySelector('.menu')
        const body = document.querySelector('body')
        if (!active) {
            openMenu()
            setRedirect(false)
            menu.classList.add('show-menu');
            body.style.overflow = "hidden"

        } else {
            closeMenu()
            menu.classList.remove('show-menu');
            body.style.overflow = "auto"
        }
    }

    if (
        location.pathname === ROUTES.CMS_LOGIN ||
        location.pathname === ROUTES.CMS_EMPRENDIMIENTO
    ) {
        return null;
    }

    return (
        <>
            <div className="menu-opener"
                ref={innerRef}
                onClick={toggleMenu}
                onMouseEnter={() => { setHover(true) }}
                onMouseLeave={() => { setHover(false) }}
            >
                <svg viewBox="0 0 250 100" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                        <clipPath id="clipPath-5">
                            <path d="M0 49.5C0 23.2665 21.2665 2 47.5 2H200V97H47.5C21.2665 97 0 75.7335 0 49.5V49.5Z" />
                            <circle cx="200" cy="50" r="50.1" />
                        </clipPath>
                        <clipPath id="clipPath-1">
                            <circle cx="200" cy="50" r="50.1" />
                        </clipPath>
                    </defs>

                    <g clipPath="url(#clipPath-5)">
                        <motion.path transform="translate(0, 0)" d="M47.5 2.25H199.75V96.75H47.5C21.4045 96.75 0.25 75.5955 0.25 49.5C0.25 23.4045 21.4045 2.25 47.5 2.25Z" fill="#E1DBCD" stroke="black" strokeWidth="0.5"
                            variants={test} animate={hover ? "show" : "hidden"}
                        />
                        <circle cx="200" cy="50" r="49.75" stroke="black" strokeWidth="1" />

                        <motion.text font-size="25" y="60"
                            variants={test1} animate={hover ? "show" : "hidden"}>
                            {text}
                        </motion.text>

                    </g>
                    <g clipPath="url(#clipPath-1)" fill="" >
                        {
                            active ?

                                <g id="equis_cerrar" transform="translate(0.707 0.707)">
                                    <svg xmlns="http://www.w3.org/2000/svg" y="2" x="180" width="40" viewBox="0 0 50.634 50.634">
                                        <line id="Line_12" data-name="Line 12" y2="69.607" transform="translate(49.22 0) rotate(45)" fill="black" stroke="#231f20" strokeWidth="2" />
                                        <line id="Line_13" data-name="Line 13" y1="69.607" transform="translate(49.22 49.22) rotate(135)" fill="none" stroke="#231f20" strokeWidth="2" />
                                    </svg>
                                </g>
                                :
                                <g id="logo-svg">
                                    <svg y="2" x="180" width="40" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50.196 44.315">
                                        <path fill="currentColor" d="M14.814 30.514 23.55 0h3.672L14.181 44.315h-1.266L0-.001h6.2Z" data-name="Path 118" />
                                        <path fill="currentColor" d="M33.356-.001h3.8l13.041 44.315h-6.2l-2.469-8.99H29.051l-2.405 8.99h-6.2Zm1.836 13.675-5.508 19.309h11.205Z" data-name="Path 119" />
                                    </svg>
                                </g>
                        }
                    </g>
                </svg>
            </div>

            <Menu
                redirect={redirect}
                toggleMenu={toggleMenu}
                setRedirect={setRedirect}
            />

        </>
    )
}

