import React from 'react'
import { Button } from '../Common/Button'

export const HomeEntradas = () => {
    return (
        <div className="home-entradas flex">

            <div className="fechas">
                <h2>
                    Del 10 al 16 de diciembre <br />
                    <strong>Parque El Country</strong>
                </h2>
                <span>
                    CALLE 127 # 12, BOGOTÁ De 11:00 am a 10:00 pm
                </span>

            </div>

            <a href="https://www.entradasamarillas.com/event/feria-vassar" target="_blank" rel="noreferrer">

                <Button >
                    Adquiere tus entradas a <strong>Vassar</strong>
                </Button>
            </a>

        </div>
    )
}
