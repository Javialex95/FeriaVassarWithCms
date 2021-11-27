import React from 'react'
import image1 from '../../assets/fundaciones/textura_encabezado_fundaciones.svg'
import { Button } from '../Common/Button'
import { fundacionesItems } from './fundacionesItems'

export const Fundaciones = () => {
    return (
        <section className="fundaciones">
            <header>
                <div className="left" style={{ backgroundImage: `url(${image1})` }}></div>
                <div className="right">
                    <h1>Fundaciones</h1>
                </div>
            </header>

            <main>
                {
                    fundacionesItems.map((item, index) => {
                        return (
                            <div className="fundaciones_item" key={index}>
                                <div className="left" style={{ backgroundImage: `url(${item.image})` }}></div>
                                <div className="right">
                                    <h2>{ item.title }</h2>
                                    <p>{ item.description }</p>
                                    <div className="fundaciones_item_buttons">
                                        {
                                            item.buttons.map((button, index) => {
                                                return (
                                                    <Button className={button.className}>
                                                        <span dangerouslySetInnerHTML={{ __html: button.content}}></span>
                                                    </Button>
                                                )
                                            })
                                        }
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </main>
        </section>
    )
}
