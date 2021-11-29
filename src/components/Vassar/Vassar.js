import React, { useState } from 'react'
import vassarIcon from '../../assets/logo_es_vassar_web.svg'
import { chevronUp, rightArrowLong } from '../Common/Icons'
import { WordUp } from '../Common/WordUp'
import gif_vassar from '../../assets/gif_vassar.gif';

export const Vassar = () => {
    const [wordsAnim1, setWordsAnim1] = useState(false);
    const [wordsAnim2, setWordsAnim2] = useState(false);
    const [wordsAnim3, setWordsAnim3] = useState(false);
    const [wordsAnim4, setWordsAnim4] = useState(false);

    return (
        <section id="top" className="vassar">
            <div className="vassar_images">
                <div className="">
                    <img src={gif_vassar} alt="" />
                </div>
            </div>
            <div className="vassar_content">
                <div className="vassar_icon">
                    <div className="">
                        <img src={vassarIcon} alt="" />
                    </div>
                </div>
                <div className="vassar_text">
                    <div className="vassar_text_container">
                        <p onClick={() => setWordsAnim1(!wordsAnim1)}>
                            <WordUp text="Siempre hemos sido unos profundos creyentes de la colectividad. De que, aunque sea un cliché, la unión hace la fuerza. Por eso, en 2021, tras todos los aprendizajes que nos trajeron hasta aquí, y una canasta llena de sueños, decidimos formar la <strong>Asociación de Emprendedores de Colombia.</strong> Una colectividad que busca luchar por y para los suyos por medio de acciones creativas en pro de su visibilidad y crecimiento." 
                            isActive={wordsAnim1}/>
                        </p>
                        <br />
                        <br />
                        <p onClick={() => setWordsAnim2(!wordsAnim2)}>
                            <WordUp text="De allí nació <strong>Vassar Feria</strong>, un espacio que, para nosotros, es más que un evento que espera convocar a cientos de soñadores. Es, en definitiva, una plataforma para materializar un deseo que siempre estuvo latente y que era momento de materializar." 
                            isActive={wordsAnim2}/>
                        </p>
                        <br />
                        <br />

                        <div className="vassar_mobile-image">
                            <div className="vassar_icon">
                                <div className="">
                                    <img src={vassarIcon} alt="" />
                                </div>
                            </div>
                        </div>

                        <p onClick={() => setWordsAnim3(!wordsAnim3)}>
                            <WordUp text="<strong>Vassar</strong> es una comunidad creativa, una sociedad emprendedora e inclusiva que trae consigo un movimiento de creadores que han innovado por años gracias a sus cualidades visionarias detrás del diseño, de una idea o un concepto. Es una invitación para que ustedes, visitantes, invitados, amigos, compañeros, vivan el consumo de una manera única, entendiendo la proveniencia de las cosas, de su proceso y de su materialidad." 
                            isActive={wordsAnim3}/>
                        </p>
                        <br />
                        <br />
                        <p onClick={() => setWordsAnim4(!wordsAnim4)}>
                            <WordUp text="¡Vassar es la casa de todos! Bienvenidos a esta nueva comunidad con la que crearemos una nueva cultura emprendedora. Éste nuevo hogar en el que encontrarán más de 200 hermanos, amigos y co trabajadores, enfocados en que la interacción y el intercambio de experiencias generen oportunidades ganadoras para todos, en pro de nuestro sector, y en pro de nuestro país." 
                            isActive={wordsAnim4}/>
                        </p>
                    </div>

                    <div className="arrow">
                        {rightArrowLong}
                    </div>

                    <h3 className="vassar_welcome">¡Bienvenidos!</h3>
                </div>

                <footer className="vassar_footer">
                    <div className="home-contacto_comebackUp">
                        <a href="#top" className="scrollTo">
                            <span>Volver arriba</span>
                            <div className="">
                                {chevronUp}
                            </div>
                        </a>
                    </div>

                    <div className="vassar_footer_top">
                        <div className="logos">
                            <div className="vassar_footer_logo logo1"></div>
                            <div className="vassar_footer_logo logo2"></div>
                            <div className="vassar_footer_logo logo3"></div>
                        </div>
                    </div>
                    <div className="vassar_footer_bottom">
                        <div className="">© VASSAR 2021</div>
                        <div className="">Todos los derechos reservados</div>
                    </div>
                </footer>
            </div>

        </section>
    )
}
