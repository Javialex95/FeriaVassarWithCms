import React, { useEffect, useState } from 'react'
import { HoverWord } from '../Common/HoverWord'
import { Button } from '../Common/Button'
import { WordUp } from '../Common/WordUp'
import { useInView } from "react-intersection-observer";
import iframeImage from '../../assets/frame-video.png'
import { Link } from 'react-router-dom'

import consumo_11 from '../../assets/consumo_11.png'
import comunidad_20 from '../../assets/comunidad_20.png'
import solidario_12 from '../../assets/solidario_12.png'
import reunirnos_18 from '../../assets/reunirnos_18.png'
import nuevos_espacios_19 from '../../assets/nuevos_espacios_19.png'
import mundo_15 from '../../assets/mundo_15.png'
import diseno_5 from '../../assets/diseno_5.png'
import creativa_1 from '../../assets/creativa_1.png'
import { wordUpBreak1, wordUpBreak2 } from '../Animations/wordUpBreak';


export const HomeManifesto = () => {
    const [wordsAnim1, setWordsAnim1] = useState(false);
    const [wordsAnim2, setWordsAnim2] = useState(false);

    const [wordAnim1Ref, inViewAnim1] = useInView({
        rootMargin: "0px 0px -50px 0px",
        triggerOnce: true,
        threshold: 0,
    });
    const [wordAnim2Ref, inViewAnim2] = useInView({
        rootMargin: "0px 0px -200px 0px",
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

    const testconsumo_11 = <img className="word-hover_hover test" src={consumo_11} alt="manifesto" />
    const testcomunidad_20 = <img className="word-hover_hover test" src={comunidad_20} alt="manifesto" />
    const testsolidario_12 = <img className="word-hover_hover test" src={solidario_12} alt="manifesto" />
    const testreunirnos_18 = <img className="word-hover_hover test" src={reunirnos_18} alt="manifesto" />
    const testnuevos_espacios_19 = <img className="word-hover_hover test" src={nuevos_espacios_19} alt="manifesto" />
    const testmundo_15 = <img className="word-hover_hover test" src={mundo_15} alt="manifesto" />
    const testdiseno_5 = <img className="word-hover_hover test" src={diseno_5} alt="manifesto" />
    const testcreativa_1 = <img className="word-hover_hover test" src={creativa_1} alt="manifesto" />

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
                        <WordUp text="Más que una feria, somos una plataforma." variant={wordUpBreak1} isActive={wordsAnim2} />
                    </h2>
                    <p>
                        Una comunidad
                        <HoverWord className="relative" hover={testcreativa_1}> creativa</HoverWord>
                        , una sociedad emprendedora e inclusiva, un movimiento de creadores, de visionarios del
                        <HoverWord className="relative" hover={testdiseno_5}> diseño</HoverWord>
                        . Un espacio para vivir el
                        <HoverWord className="relative word-consumo" hover={testconsumo_11}> consumo de otra manera</HoverWord>
                        , desde un entendimiento de la proveniencia de las cosas, de su proceso, de su materialidad.<br />
                        Un espacio donde la compra es un acto
                        <HoverWord className="relative" hover={testsolidario_12}> solidario </HoverWord>
                        para aportar a un cambio de dinámica, para aportar a un
                        <HoverWord className="relative" hover={testmundo_15}> nuevo mundo </HoverWord>
                        que se transforma.
                    </p>

                    <h3 ref={wordAnim1Ref} onClick={() => setWordsAnim1(!wordsAnim1)}>
                        <WordUp text="Es momento de unirnos en una fuerza creadora." variant={wordUpBreak2} isActive={wordsAnim1} />
                    </h3>

                    <p>
                        Vassar es el movimiento creativo con la grandeza de destacar lo mejor del emprendimiento colombiano. Por ello, el 30% de los ingresos por boletería serán destinados a crear un fondo para apoyar a esos talentos que han decidido emprender. Por medio de la Asociación de Emprendedores queremos ayudar a que puedan aprovechar las oportunidades que el nuevo año traerá consigo y fortalecer así un sector en crecimiento.
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
                                span{height:1.5em;text-align:center;font:120px/1.5 sans-serif;color:#FF4200;text-shadow:0 0 0.5em black}
                            </style>
                            <a href=https://www.youtube.com/embed/Z4RjCSjRAuw> 
                                <img src=${iframeImage}>
                  
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
