import React, { useEffect, useState } from 'react'
import { HoverWord } from '../Common/HoverWord'
import foto_background_1 from '../../assets/imagen_gif_web.png'
import { Button } from '../Common/Button'
import { WordUp } from '../Common/WordUp'
import { useInView } from "react-intersection-observer";
import iframeImage from '../../assets/frame-video.jpg'
import { Link } from 'react-router-dom'
import {useWindowSize} from '../Common/Hooks/useWindowSize'

export const HomeManifesto = () => {
    const [wordsAnim1, setWordsAnim1] = useState(false);
    const [wordsAnim2, setWordsAnim2] = useState(false);
    
    const [wordAnim1Ref, inViewAnim1] = useInView({
        rootMargin: "0px 0px -400px 0px",
        triggerOnce: true,
        threshold: 0,
    });
    const [wordAnim2Ref, inViewAnim2] = useInView({
        rootMargin: "0px 0px -400px 0px",
        triggerOnce: true,
        threshold: 0,
    });

    useEffect(() => {
        if (!inViewAnim1) return
        setWordsAnim1(true)
    }, [inViewAnim1])

    useEffect(() => {
        if (!inViewAnim2) return
        setWordsAnim2(true)
    }, [inViewAnim2])

    const test = <img className="word-hover_hover test" src={foto_background_1} alt="manifesto" />

    return (
        <section className="home-manifesto">

            <div className="flex home-manifesto-contenedor flex">

                <div className="home-manifesto-contenedor-title flex">

                    <div className="home-manifesto-contenedor-title-aros"></div>

                    <div className="titulo">
                        <p>UN MOVIMIENTO CREATIVO</p>
                        <h2>Manifiesto</h2>
                    </div>
                </div>

                <div className="home-manifesto-text">
                    <h2 ref={wordAnim2Ref} onClick={() => setWordsAnim2(!wordsAnim2)}>
                        <WordUp text="Más que una feria, somos una plataforma." isActive={wordsAnim2} />
                    </h2>
                    <p>
                        Una comunidad
                        <HoverWord className="relative" hover={test}> creativa</HoverWord>
                        , una sociedad emprendedora e inclusiva, un movimiento de creadores, de visionarios del
                        <HoverWord className="relative" hover={test}> diseño</HoverWord>
                        . Un espacio para vivir el
                        <HoverWord className="relative" hover={test}> consumo de otra manera</HoverWord>
                        , desde un entendimiento de la proveniencia de las cosas, de su proceso, de su materialidad.<br />
                        Un espacio donde la compra es un acto
                        <HoverWord className="relative" hover={test}> solidario </HoverWord>
                        para aportar a un cambio de dinámica, para aportar a un
                        <HoverWord className="relative" hover={test}> nuevo mundo </HoverWord>
                        que se transforma.
                    </p>

                    <h3 ref={wordAnim1Ref} onClick={() => setWordsAnim1(!wordsAnim1)}>
                        <WordUp text="Es momento de unirnos en una fuerza creadora." isActive={wordsAnim1} />
                    </h3>

                    <p>
                        Es momento de
                        <HoverWord className="relative" hover={test}> reunirnos </HoverWord>
                        en torno a
                        <HoverWord className="relative" hover={test}> nuevos espacios </HoverWord>
                        que aporten a la sociedad y a la cultura, donde la interacción, el intercambio y la experiencia vivida creen una
                        <HoverWord className="relative" hover={test}> comunidad </HoverWord>
                        que se potencia entre ella.
                    </p>
                </div>

            </div>


            <div className="relative">
                <iframe className="home-manifesto_iframe"
                    srcDoc={`
                            <style>
                                img{object-fit:cover}
                                *{padding:0;margin:0;overflow:hidden}
                                html,body{height:100%;}
                                img,span{position:absolute;width:100vw;height:100%;top:0;bottom:0;margin:auto}
                                span{height:1.5em;text-align:center;font:48px/1.5 sans-serif;color:white;text-shadow:0 0 0.5em black}
                            </style>
                            <a href=https://www.youtube.com/embed/Z4RjCSjRAuw> 
                                <img src=${iframeImage}>
                                <span>▶</span>
                            </a>
                    `}
                    src="https://www.youtube.com/embed/Z4RjCSjRAuw" title="YouTube video player" frameBorder="0" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen muted autoPlay>
                </iframe>
                <div className="home-manifesto_button">

                    <Link to="/vassar">
                        <Button>
                            <span>Conoce qué es <strong>Vassar</strong></span>
                        </Button>
                    </ Link >
                </div>
            </div>
        </section>
    )
}
